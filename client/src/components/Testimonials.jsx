import { testimonials } from "../data/portfolio";
import { Reveal, SectionHeader, SectionLink } from "./common";

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <SectionHeader title="O QUE DIZEM SOBRE MIM" subtitle="Depoimentos reais de clientes satisfeitos" />
        <div className="testimonials__container">
          {testimonials.map((t, i) => (
            <Reveal className="testimonial__card" key={t.name} delay={i * 150}>
              <div className="testimonial__header">
                <div className="testimonial__avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="testimonial__info">
                  <h4 className="testimonial__name">{t.name}</h4>
                  <span className="testimonial__role">{t.role}</span>
                  <div className="testimonial__rating" aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }, (_, s) => (
                      <i className="fas fa-star" key={s}></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial__quote">"{t.quote}"</p>
              <div className="testimonial__project">
                <i className={t.projectIcon}></i>
                <span>Projeto: {t.project}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="testimonials__cta">
          <p>Quer ter resultados como esses também?</p>
          <SectionLink to="contact" className="btn btn-primary">
            <span>INICIAR MEU PROJETO</span>
            <i className="fas fa-arrow-right"></i>
          </SectionLink>
        </div>
      </div>
    </section>
  );
}
