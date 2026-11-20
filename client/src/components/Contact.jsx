import { useState } from "react";
import { profile, social, socialList } from "../data/portfolio";
import { ExternalLink, SectionHeader } from "./common";

const API_URL = import.meta.env.VITE_API_URL ?? "";

function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      type="button"
      className="copy-email-btn"
      onClick={copy}
      style={copied ? { background: "var(--primary-color)", color: "var(--bg-color)" } : undefined}
    >
      {copied ? (
        <>
          <i className="fas fa-check"></i> Copiado!
        </>
      ) : (
        <>
          Copiar Email <i className="fas fa-copy"></i>
        </>
      )}
    </button>
  );
}

const EMPTY = { name: "", email: "", subject: "", message: "", website: "" };

function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Enviando..." });
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Não foi possível enviar a mensagem.");
      setStatus({ type: "success", message: data.message || "Mensagem enviada! Retorno em breve." });
      setForm(EMPTY);
    } catch (err) {
      setStatus({
        type: "error",
        message: `${err.message} Você também pode falar comigo pelo WhatsApp ou e-mail ao lado.`,
      });
    }
  };

  return (
    <form className="contact__form" onSubmit={submit} noValidate={false}>
      <h3>
        <i className="fas fa-paper-plane"></i> ENVIE UMA MENSAGEM
      </h3>

      <div className="form__row">
        <label className="form__field">
          <span>Nome</span>
          <input name="name" value={form.name} onChange={update} required minLength={2} maxLength={100} placeholder="Seu nome" />
        </label>
        <label className="form__field">
          <span>E-mail</span>
          <input type="email" name="email" value={form.email} onChange={update} required maxLength={150} placeholder="voce@email.com" />
        </label>
      </div>

      <label className="form__field">
        <span>Assunto</span>
        <input name="subject" value={form.subject} onChange={update} maxLength={150} placeholder="Ex.: Orçamento de site" />
      </label>

      <label className="form__field">
        <span>Mensagem</span>
        <textarea name="message" value={form.message} onChange={update} required minLength={10} maxLength={3000} rows={5} placeholder="Conte um pouco sobre o seu projeto..." />
      </label>

      {/* Campo-armadilha anti-spam: invisível para pessoas, bots costumam preencher */}
      <input type="text" name="website" value={form.website} onChange={update} className="form__honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button type="submit" className="btn btn-primary" disabled={status.type === "loading"}>
        <span>{status.type === "loading" ? "ENVIANDO..." : "ENVIAR MENSAGEM"}</span>
        <i className="fas fa-arrow-right"></i>
      </button>

      {status.type !== "idle" && status.type !== "loading" && (
        <p className={`form__status form__status--${status.type}`} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <SectionHeader title="VAMOS CONVERSAR!" />
        <div className="contact__intro">
          <p className="contact__intro-text">
            Estou disponível para projetos freelance, oportunidades de trabalho em equipe ou apenas para trocar ideias
            sobre tecnologia. <strong>Entre em contato agora</strong> e vamos transformar sua ideia em realidade!
          </p>
        </div>

        <div className="contact__container contact__container--with-form">
          <div className="contact__info">
            <div className="contact__card linkedin-card-contact">
              <div className="contact__icon linkedin-icon">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className="contact__details">
                <h3>LinkedIn</h3>
                <p>{profile.fullName}</p>
                <p className="linkedin-subtitle">Eng. Software | UI/UX | Customer Experience (CX)</p>
                <ExternalLink href={social.linkedin} className="contact__link linkedin-link">
                  <i className="fab fa-linkedin-in"></i> Ver perfil completo →
                </ExternalLink>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="contact__details">
                <h3>WhatsApp</h3>
                <p>Resposta rápida garantida</p>
                <ExternalLink href={social.whatsapp} className="contact__link">
                  Chamar agora →
                </ExternalLink>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__icon">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="contact__details">
                <h3>Instagram</h3>
                <p>{social.instagramHandle}</p>
                <ExternalLink href={social.instagram} className="contact__link">
                  Seguir →
                </ExternalLink>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact__details">
                <h3>Email</h3>
                <p id="contact-email">{profile.email}</p>
                <CopyEmailButton email={profile.email} />
              </div>
            </div>

            <div className="contact__social">
              <h3>ME SIGA NAS REDES</h3>
              <div className="social__links">
                {socialList.map((s) => (
                  <ExternalLink key={s.name} href={s.url} className="social__link" title={s.name}>
                    <i className={s.icon}></i>
                  </ExternalLink>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
