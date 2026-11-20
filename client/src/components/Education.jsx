import { timeline } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import { SectionHeader } from "./common";

function TimelineItem({ item }) {
  const [ref, style, visible] = useReveal({ from: "translateX(-20px)", threshold: 0.3 });
  const isCompleted = item.variant.includes("completed");

  return (
    <div ref={ref} style={style} className={`timeline__item ${item.variant} ${visible ? "animate" : ""}`}>
      <div className="timeline__marker">{!isCompleted && <div className="marker__pulse"></div>}</div>
      <div className="timeline__content">
        <div className="timeline__header">
          <div className="timeline__icon">
            <i className={item.icon}></i>
          </div>
          <div className="timeline__info">
            <div className="timeline__date">{item.date}</div>
            <div className={`timeline__status ${isCompleted ? "completed" : ""}`}>{item.status}</div>
            <h3 className={`timeline__title ${item.glitch ? "glitch-text" : ""}`} data-text={item.glitch ? item.title : undefined}>
              {item.title}
            </h3>
            <h4 className="timeline__company">{item.company}</h4>
          </div>
        </div>
        <p className="timeline__description" dangerouslySetInnerHTML={{ __html: item.description }} />
        <div className="timeline__skills">
          {item.skills.map((s) => (
            <span className="skill-tag" key={s}>
              {s}
            </span>
          ))}
        </div>
        <div className="timeline__achievements">
          {item.achievements.map((a) => (
            <div className="achievement" key={a.label}>
              <i className={a.icon}></i>
              <span>{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <SectionHeader title="FORMAÇÕES & EXPERIÊNCIA" subtitle="Minha jornada de aprendizado e crescimento profissional" />
        <div className="education__container">
          <div className="timeline">
            {timeline.map((item) => (
              <TimelineItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
