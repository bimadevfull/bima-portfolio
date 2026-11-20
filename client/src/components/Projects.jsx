import { useMemo, useState } from "react";
import { projectFilters, projects } from "../data/portfolio";
import { ExternalLink, Reveal, SectionHeader, SectionLink } from "./common";

function ProjectCard({ project, index }) {
  const extras = project.stats ?? project.features ?? [];
  const extrasClass = project.stats ? "project__stats" : "project__features";
  const extrasItem = project.stats ? "stat" : "feature";

  return (
    <Reveal className="project__card" delay={(index % 3) * 100}>
      <div className="project__image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project__overlay">
          <div className="project__links">
            {project.demo && (
              <a href={project.demo} className="project__link" target="_blank" rel="noopener noreferrer" title="Ver demo">
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
            {project.repo && (
              <ExternalLink href={project.repo} className="project__link" title="Ver código no GitHub">
                <i className="fab fa-github"></i>
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
      <div className="project__content">
        <div className="project__category">{project.label}</div>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__description">{project.description}</p>
        <div className="project__tech">
          {project.tech.map((t) => (
            <span className="tech-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        {extras.length > 0 && (
          <div className={extrasClass}>
            {extras.map((e) => (
              <div className={extrasItem} key={e.label}>
                <i className={e.icon}></i>
                <span>{e.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <SectionHeader
          title="PROJETOS EXPERIMENTAIS EM DESTAQUE"
          subtitle="Projetos desenvolvidos para demonstrar habilidades técnicas e criativas"
        />

        <div className="projects__filters" role="tablist">
          {projectFilters.map((f) => (
            <button
              key={f.value}
              type="button"
              role="tab"
              aria-selected={filter === f.value}
              className={`filter__btn ${filter === f.value ? "active" : ""}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* key={filter} remonta os cards para repetir a animação a cada filtro */}
        <div className="projects__container" key={filter}>
          {visible.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <div className="projects__button">
          <SectionLink to="contact" className="btn btn-primary">
            <span>SOLICITAR ORÇAMENTO PARA SEU PROJETO</span>
            <i className="fas fa-arrow-right"></i>
          </SectionLink>
        </div>
      </div>
    </section>
  );
}
