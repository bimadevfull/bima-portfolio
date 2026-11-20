import { useEffect, useRef, useState } from "react";

/**
 * Revela o elemento com fade/slide quando ele entra na tela.
 * Retorna [ref, style] — aplique os dois no elemento.
 */
export function useReveal({ delay = 0, from = "translateY(25px)", threshold = 0.1 } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : from,
    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
  };

  return [ref, style, visible];
}
