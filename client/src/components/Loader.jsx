import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setHidden(true), 200);
          return 100;
        }
        return p + 2;
      });
    }, 15);
    return () => clearInterval(interval);
  }, []);

  if (removed) return null;

  return (
    <div
      className="loader"
      id="loader"
      style={{ opacity: hidden ? 0 : 1 }}
      onTransitionEnd={() => hidden && setRemoved(true)}
    >
      <div className="loader-content">
        <div className="cyber-loader"></div>
        <h2 className="loader-text">INICIALIZANDO SISTEMA...</h2>
        <div className="loading-bar">
          <div className="loading-progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}
