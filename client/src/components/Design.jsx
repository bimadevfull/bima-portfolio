import { designCategories, designProcess, designTools } from "../data/portfolio";
import { LevelBadge, Reveal, SectionHeader } from "./common";

const subTitleStyle = { fontSize: "1.8rem", marginBottom: "2rem" };

export default function Design() {
  return (
    <section className="design section" id="design">
      <div className="container">
        <SectionHeader
          title="DESIGN UX/UI & GRÁFICO"
          subtitle="Criando experiências visuais memoráveis e interfaces centradas no usuário"
        />

        <div className="design__skills-container">
          {designCategories.map((cat) => (
            <div className="design__category" key={cat.title}>
              <h3 className="category__title">
                <i className={cat.icon}></i>
                {cat.title}
              </h3>
              <div className="design__grid">
                {cat.items.map((item, i) => (
                  <Reveal className="design__item" key={item.name} delay={i * 80}>
                    <div className="design__icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="design__info">
                      <h4>{item.name}</h4>
                      <p>{item.text}</p>
                      <LevelBadge level={item.level} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="design__tools">
          <h3 className="section__title" style={subTitleStyle}>
            FERRAMENTAS DE DESIGN
          </h3>
          <div className="tools__showcase">
            {designTools.map((tool, i) => (
              <Reveal className="tool__card" key={tool.name} delay={i * 100}>
                <div className="tool__card-icon">
                  <i className={tool.icon}></i>
                </div>
                <h4>{tool.name}</h4>
                <p>{tool.text}</p>
                <LevelBadge level={tool.level} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="design__process">
          <h3 className="section__title" style={subTitleStyle}>
            MEU PROCESSO DE DESIGN
          </h3>
          <div className="process__timeline">
            {designProcess.map((step, i) => (
              <Reveal className="process__step" key={step.title} delay={i * 120}>
                <div className="process__number">{String(i + 1).padStart(2, "0")}</div>
                <div className="process__content">
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
