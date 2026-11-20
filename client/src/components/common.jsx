import { useReveal } from "../hooks/useReveal";
import { scrollToSection } from "../hooks/useScrollSpy";
import { LEVEL_LABEL } from "../data/portfolio";

export function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h2 className="section__title">{title}</h2>
      <div className="section__line"></div>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </div>
  );
}

/** Link interno (#secao) com rolagem suave. */
export function SectionLink({ to, className, children, onClick, ...rest }) {
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(to);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

/** Link externo seguro. */
export function ExternalLink({ href, children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

/** Envolve qualquer elemento com animação de entrada ao rolar a página. */
export function Reveal({ as: Tag = "div", delay = 0, from, className, children, style, ...rest }) {
  const [ref, revealStyle] = useReveal({ delay, from });
  return (
    <Tag ref={ref} className={className} style={{ ...style, ...revealStyle }} {...rest}>
      {children}
    </Tag>
  );
}

export function LevelBadge({ level }) {
  return <div className={`skill__level ${level}`}>{LEVEL_LABEL[level]}</div>;
}
