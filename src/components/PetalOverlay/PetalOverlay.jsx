import "./PetalOverlay.css";

const PetalOverlay = ({ active }) => {
  if (!active) return null;

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="petal-overlay">
      {Array.from({ length: isMobile ? 10 : 30 }).map((_, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
            transform: `scale(${0.6 + Math.random() * 0.8})`,
          }}
        >
          <svg
            viewBox="0 0 100 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id={`petalGradient-${i}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#fff7f8" />
                <stop offset="40%" stopColor="#ffd7e2" />
                <stop offset="75%" stopColor="#f4b8ca" />
                <stop offset="100%" stopColor="#dfa0b4" />
              </linearGradient>
            </defs>

            <path
              d="
              M50 8
              C85 20 95 60 70 95
              C58 112 42 112 30 95
              C5 60 15 20 50 8
              Z
            "
              fill={`url(#petalGradient-${i})`}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default PetalOverlay;