import { linkedinCard, profile, social } from "../data/portfolio";
import { ExternalLink } from "./common";

export default function LinkedInCard() {
  return (
    <section className="linkedin-card-section section" id="linkedin-profile">
      <div className="container">
        <div className="linkedin-profile-card">
          <div className="linkedin-card-header">
            <div className="linkedin-banner"></div>
            <div className="linkedin-avatar">
              <img src={profile.photo} alt="Abimael - Foto de Perfil" />
              <div className="linkedin-badge">
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>

          <div className="linkedin-card-body">
            <div className="linkedin-info">
              <h3 className="linkedin-name">{profile.fullName}</h3>
              <p className="linkedin-headline">{profile.headline}</p>
              <div className="linkedin-location">
                <i className="fas fa-map-marker-alt"></i>
                <span>{profile.location}</span>
              </div>
              <div className="linkedin-experience-badge">
                <i className="fas fa-briefcase"></i>
                <span>
                  <strong>{linkedinCard.experience}</strong> de experiência em Desenvolvimento Web e Mobile
                </span>
              </div>
            </div>

            <div className="linkedin-bio">
              {linkedinCard.bio.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            <div className="linkedin-skills-preview">
              {linkedinCard.skills.map((s) => (
                <span className="linkedin-skill" key={s}>
                  {s}
                </span>
              ))}
            </div>

            <div className="linkedin-cta">
              <ExternalLink href={social.linkedin} className="btn btn-linkedin">
                <i className="fab fa-linkedin-in"></i>
                <span>Ver Perfil Completo no LinkedIn</span>
              </ExternalLink>
              <ExternalLink href={social.whatsapp} className="btn btn-whatsapp">
                <i className="fab fa-whatsapp"></i>
                <span>Entrar em Contato</span>
              </ExternalLink>
            </div>
          </div>

          <div className="linkedin-card-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
