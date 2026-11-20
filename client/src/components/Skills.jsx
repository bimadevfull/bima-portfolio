import { skillCategories } from "../data/portfolio";
import { LevelBadge, Reveal, SectionHeader } from "./common";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <SectionHeader
          title="HABILIDADES TÉCNICAS"
          subtitle="Stack que utilizo no desenvolvimento de aplicações web full stack"
        />
        <div className="skills__container">
          {skillCategories.map((cat) => (
            <div className="skills__category" key={cat.title}>
              <h3 className="category__title">
                <i className={cat.icon}></i>
                {cat.title}
              </h3>
              <div className="skills__grid">
                {cat.items.map((skill, i) => (
                  <Reveal className="skill__item" key={skill.name} delay={i * 60}>
                    <div className="skill__icon">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="skill__info">
                      <h4>{skill.name}</h4>
                      <div className="skill__bar">
                        <LevelBadge level={skill.level} />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
