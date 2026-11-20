import { workflow } from "../data/portfolio";
import { SectionHeader } from "./common";

export default function ToolsWorkflow() {
  return (
    <section className="tools-workflow section" id="tools-workflow">
      <div className="container">
        <SectionHeader title="MINHAS FERRAMENTAS E FLUXO DE TRABALHO" />
        <div className="tools-workflow__container">
          {workflow.map((cat) => (
            <div className="workflow__category" key={cat.title}>
              <h3 className="category__title">
                <i className={cat.icon}></i>
                {cat.title}
              </h3>
              <div className="tools__grid">
                {cat.items.map((item) => (
                  <div className="tool__item" key={item.name}>
                    <div className="tool__icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tool__info">
                      <h4>{item.name}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
