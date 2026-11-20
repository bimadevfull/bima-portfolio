import { services } from "../data/portfolio";
import { SectionHeader, SectionLink } from "./common";

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionHeader title="SERVIÇOS" />
        <div className="services__intro">
          <p className="services__description">
            Ofereço soluções completas em desenvolvimento web, sistemas e design de interfaces. Cada projeto é
            desenvolvido com foco na qualidade, performance e <strong>resultados mensuráveis</strong>.
          </p>
        </div>

        <div className="services__container">
          {services.map((s) => (
            <div className={`service__card ${s.featured ? "featured" : "service__card--hover"}`} key={s.title}>
              {s.badge && <div className="service__badge">{s.badge}</div>}
              <div className="service__icon">
                <i className={s.icon}></i>
              </div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__description">{s.description}</p>
              <ul className="service__features">
                {s.features.map((f) => (
                  <li key={f}>
                    <i className="fas fa-check"></i> {f}
                  </li>
                ))}
              </ul>
              <SectionLink to="contact" className={`btn ${s.featured ? "btn-primary" : "btn-outline"}`}>
                <span>SOLICITAR ORÇAMENTO</span>
                <i className="fas fa-arrow-right"></i>
              </SectionLink>
            </div>
          ))}
        </div>

        <div className="services__guarantee">
          <div className="guarantee__content">
            <div className="guarantee__icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="guarantee__text">
              <h3>Garantia de Qualidade</h3>
              <p>
                Todos os projetos incluem 30 dias de suporte gratuito e garantia de satisfação. Seu projeto será
                entregue no prazo acordado com a qualidade que você merece.
              </p>
            </div>
          </div>
        </div>

        <div className="services__cta-section">
          <div className="cta-urgency">
            <div className="cta-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div className="cta-text">
              <h4>Agenda Limitada</h4>
              <p>
                Aceito apenas <strong>3 novos projetos por mês</strong> para garantir qualidade e atenção dedicada.
                Reserve seu horário agora.
              </p>
            </div>
            <SectionLink to="contact" className="btn btn-primary">
              <span>GARANTIR MINHA VAGA</span>
              <i className="fas fa-arrow-right"></i>
            </SectionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
