import { heroTechIcons, profile, socialList } from "../data/portfolio";
import { useTyping } from "../hooks/useTyping";
import { ExternalLink, SectionLink } from "./common";

export default function Hero() {
  const profession = useTyping(profile.professions);

  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content">
          <div className="home__data">
            <h1 className="home__name">
              <span className="name-part">{profile.name}</span>
            </h1>
            <h2 className="home__profession">
              <span id="profession-text">{profession}</span>
              <span className="cursor">|</span>
            </h2>

            <p className="home__description">
              <strong>Engenharia de Software</strong> | <strong>Ciência de Dados</strong> |{" "}
              <strong>Customer Experience (CX)</strong>
              <br />
              <br />
              Profissional multidisciplinar, unindo desenvolvimento Full-Stack, Customer Experience (CX), análise de
              dados e design de interfaces. Transformo ideias em soluções digitais completas e de alto impacto.
            </p>

            <div className="home__buttons">
              <SectionLink to="contact" className="btn btn-primary pulse-animation">
                <span>CONTRATAR AGORA</span>
                <i className="fas fa-handshake"></i>
              </SectionLink>
              <SectionLink to="projects" className="btn btn-outline">
                <span>VER PROJETOS</span>
                <i className="fas fa-rocket"></i>
              </SectionLink>
              <a href={profile.resume} className="btn btn-outline" target="_blank" rel="noopener" download>
                <span>BAIXAR CURRÍCULO</span>
                <i className="fas fa-file-arrow-down"></i>
              </a>
            </div>

            <div className="home__social">
              {socialList.map((s) => (
                <ExternalLink key={s.name} href={s.url} className={`social__link ${s.className ?? ""}`} title={s.name}>
                  <i className={s.icon}></i>
                </ExternalLink>
              ))}
            </div>

            <div className="home__tech-icons">
              {heroTechIcons.map((t) => (
                <div className="tech-icon" title={t.title} key={t.title}>
                  <i className={t.icon}></i>
                </div>
              ))}
            </div>
          </div>

          <div className="home__image">
            <div className="image-container">
              <img src={profile.photo} alt="Abimael - Desenvolvedor Full-Stack e UI/UX Designer" className="home__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
