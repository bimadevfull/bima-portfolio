import { useEffect } from "react";

/** Fundo animado com particles.js (carregado via CDN no index.html). */
export default function Particles() {
  useEffect(() => {
    const init = () => {
      if (typeof window.particlesJS !== "function") return false;
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 900 } },
          color: { value: "#00b8d4" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#0066cc", opacity: 0.3, width: 1 },
          move: { enable: true, speed: 4 },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.8 } },
            push: { particles_nb: 3 },
          },
        },
        retina_detect: true,
      });
      return true;
    };

    if (init()) return;
    // O script do CDN pode ainda estar carregando
    const timer = setInterval(() => init() && clearInterval(timer), 300);
    const stop = setTimeout(() => clearInterval(timer), 10000);
    return () => {
      clearInterval(timer);
      clearTimeout(stop);
    };
  }, []);

  return <div id="particles-js"></div>;
}
