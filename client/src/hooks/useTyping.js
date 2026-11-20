import { useEffect, useState } from "react";

/** Efeito de "máquina de escrever" que alterna entre as frases recebidas. */
export function useTyping(words, { typeSpeed = 120, deleteSpeed = 60, pause = 2500 } = {}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === current) delay = pause;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
