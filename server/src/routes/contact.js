import { Router } from "express";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MESSAGES_FILE = path.resolve(__dirname, "../../data/messages.json");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const router = Router();

// Máximo de 5 mensagens a cada 15 minutos por IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Muitas mensagens em pouco tempo. Tente novamente mais tarde." },
});

const clean = (v, max) => String(v ?? "").trim().slice(0, max);

export function validate(body) {
  const data = {
    name: clean(body.name, 100),
    email: clean(body.email, 150),
    subject: clean(body.subject, 150) || "Contato pelo portfólio",
    message: clean(body.message, 3000),
  };
  const errors = [];
  if (data.name.length < 2) errors.push("Informe seu nome.");
  if (!EMAIL_RE.test(data.email)) errors.push("Informe um e-mail válido.");
  if (data.message.length < 10) errors.push("A mensagem precisa ter pelo menos 10 caracteres.");
  return { data, errors };
}

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  const port = Number(SMTP_PORT) || 465;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

async function saveLocally(entry) {
  let list = [];
  try {
    list = JSON.parse(await fs.readFile(MESSAGES_FILE, "utf8"));
  } catch {
    /* arquivo ainda não existe */
  }
  list.push(entry);
  await fs.mkdir(path.dirname(MESSAGES_FILE), { recursive: true });
  await fs.writeFile(MESSAGES_FILE, JSON.stringify(list, null, 2));
}

router.post("/", limiter, async (req, res, next) => {
  try {
    // Honeypot: se o campo invisível veio preenchido, é bot — finge sucesso
    if (req.body?.website) return res.json({ message: "Mensagem enviada!" });

    const { data, errors } = validate(req.body ?? {});
    if (errors.length) return res.status(400).json({ error: errors.join(" ") });

    const entry = { ...data, date: new Date().toISOString() };
    const transport = getTransport();

    if (transport) {
      await transport.sendMail({
        from: `"Portfólio Bima Dev" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO || process.env.SMTP_USER,
        replyTo: `"${data.name}" <${data.email}>`,
        subject: `[Portfólio] ${data.subject}`,
        text: `Nome: ${data.name}\nE-mail: ${data.email}\n\n${data.message}`,
      });
    } else {
      await saveLocally(entry);
      console.log(`📩 Nova mensagem de ${data.name} <${data.email}> (salva em data/messages.json)`);
    }

    res.json({ message: "Mensagem enviada com sucesso! Retorno em breve." });
  } catch (err) {
    next(err);
  }
});

export default router;
