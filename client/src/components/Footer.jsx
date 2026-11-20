import { profile, socialList } from "../data/portfolio";
import { ExternalLink, SectionLink } from "./common";

const quickLinks = [
  ["about", "Sobre"],
  ["services", "Serviços"],
  ["education", "Formações"],
  ["skills", "Habilidades"],
  ["design", "Design"],
  ["projects", "Projetos"],
  ["testimonials", "Depoimentos"],
  ["contact", "Contato"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <div className="footer__section">
              <h3>Sobre Mim</h3>
              <p>
                Engenheiro de Software, UI/UX Designer e profissional de Customer Experience (CX) / SAC atuante no setor
                de marketing de uma empresa varejista. Focado em criar soluções digitais inovadoras e eficientes que
                geram resultados reais.
              </p>
            </div>
            <div className="footer__section">
              <h3>Links Rápidos</h3>
              <ul className="footer__links">
                {quickLinks.map(([id, label]) => (
                  <li key={id}>
                    <SectionLink to={id}>{label}</SectionLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__section">
              <h3>Contato</h3>
              <p>Email: {profile.email}</p>
              <p>Praia Grande, SP - Brasil</p>
              <p>Campinas, SP - Brasil</p>
            </div>
          </div>

          <div className="footer__logo">
            <span className="logo-glitch" data-text={profile.brand}>
              {profile.brand}
            </span>
          </div>

          <div className="footer__social">
            {socialList.map((s) => (
              <ExternalLink key={s.name} href={s.url} className="footer__link" title={s.name}>
                <i className={s.icon}></i>
              </ExternalLink>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} Abimael.script | Feito com React + Node.js ·{" "}
            <ExternalLink href="https://github.com/bimadevfull">Código aberto no GitHub</ExternalLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
