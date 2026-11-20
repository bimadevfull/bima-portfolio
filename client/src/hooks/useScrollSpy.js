import { useEffect, useState } from "react";

/** Retorna o id da seção visível e se a página já rolou além de `offset`. */
export function useScrollSpy(ids, headerOffset = 100) {
  const [active, setActive] = useState(ids[0]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop - headerOffset) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, headerOffset]);

  return { active, scrollY };
}

/** Rolagem suave para uma seção, compensando a altura do header fixo. */
export function scrollToSection(id, headerOffset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
}
