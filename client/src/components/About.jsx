import { useEffect, useState } from "react";
import { about } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import { SectionHeader, SectionLink } from "./common";

function Counter({ value, label }) {
  const [ref, , visible] = useReveal({ threshold: 0.5 });
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const duration = 2000;
    const step = 20;
    const increment = value / (duration / step);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        setDone(true);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, step);
    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div className="stat-item" ref={ref}>
      <div
        className="stat-number"
        style={{ transform: done ? "scale(1)" : visible ? "scale(1.05)" : "none", transition: "transform .2s" }}
      >
        {count}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionHeader title={about.title} />
        <div className="about__container">
          <div className="about__content">
            <div className="about__text">
              <div className="brand__header">
                <h3 className="about__subtitle">{about.subtitle}</h3>
                <div className="brand__tagline">{about.tagline}</div>
              </div>

              {about.paragraphs.map((p, i) => (
                <p className="about__description" key={i}>
                  {p}
                </p>
              ))}

              <div className="about__highlights">
                {about.highlights.map((h) => (
                  <div className="highlight__item" key={h.label}>
                    <i className={h.icon}></i>
                    <span>{h.label}</span>
                  </div>
                ))}
              </div>

              <div className="about__stats">
                {about.stats.map((s) => (
                  <Counter key={s.label} {...s} />
                ))}
              </div>

              <SectionLink to="contact" className="btn btn-primary">
                <span>VAMOS CONVERSAR</span>
                <i className="fas fa-comments"></i>
              </SectionLink>
            </div>

            <div className="about__image">
              <div className="image-frame">
                <img src={about.image} alt="BIMA TECH" className="about__img" loading="lazy" />
                <div className="frame-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
