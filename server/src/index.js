import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import contactRouter from "./routes/contact.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3001;
const CLIENT_DIST = path.resolve(__dirname, "../../client/dist");

const app = express();

app.set("trust proxy", 1); // necessário atrás de Render/Railway/Heroku para o rate-limit
app.use(helmet({ contentSecurityPolicy: false })); // CSP desligado: o site usa CDNs (fontes, ícones, VLibras)
app.use(express.json({ limit: "20kb" }));

const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);
app.use(
  "/api",
  cors({ origin: allowedOrigins.length ? allowedOrigins : true })
);

// ---- API ----
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.use("/api/contact", contactRouter);

app.use("/api", (_req, res) => res.status(404).json({ error: "Rota não encontrada." }));

// ---- Front-end (produção) ----
// Depois de `npm run build`, o Express também serve o React compilado.
if (fs.existsSync(CLIENT_DIST)) {
  app.use(express.static(CLIENT_DIST, { maxAge: "7d", index: false }));
  app.get(/^\/(?!api).*/, (_req, res) => res.sendFile(path.join(CLIENT_DIST, "index.html")));
}

// ---- Erros ----
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: "Erro interno no servidor." });
});

app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`);
});
