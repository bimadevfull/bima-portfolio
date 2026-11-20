import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "../data/portfolio";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { SectionLink } from "./common";

const SECTION_IDS = navItems.map((n) => n.id);
const DESKTOP_BREAKPOINT = 900;

export default function Header() {
  const { active, scrollY } = useScrollSpy(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Trava o scroll do body com o menu aberto + fecha com ESC / resize
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > DESKTOP_BREAKPOINT && setOpen(false);
    const onOutside = (e) => menuRef.current && !menuRef.current.contains(e.target) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("pointerdown", onOutside);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`header ${scrollY > 50 ? "scrolled" : ""}`} id="header">
      <nav className="nav">
        <div className="nav__logo">
          <span className="logo-glitch" data-text={profile.brand}>
            {profile.brand}
          </span>
        </div>

        <div ref={menuRef} className={`nav__menu ${open ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li className="nav__item" key={item.id}>
                <SectionLink
                  to={item.id}
                  className={`nav__link ${active === item.id ? "active-link" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.image ? (
                    <img src={item.image} width="28" alt="" />
                  ) : (
                    <i className={item.icon}></i>
                  )}
                  <span>{item.label}</span>
                </SectionLink>
              </li>
            ))}
          </ul>
          {open && (
            <button
              type="button"
              className="nav__close"
              id="nav-close"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              style={{ display: "block", background: "none", border: 0, color: "inherit" }}
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>

        {!open && (
          <button
            type="button"
            className="nav__toggle"
            id="nav-toggle"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            style={{ background: "none", border: 0, padding: 0 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </nav>
    </header>
  );
}
