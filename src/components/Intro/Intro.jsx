import { useState } from "react";
import "./Intro.css";

export default function Intro({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 2200);
  };

  return (
    <div className={`intro ${opening ? "opening" : ""}`}>
      {/* Left Panel */}
      <div className="intro-panel left-panel" />

      {/* Right Panel */}
      <div className="intro-panel right-panel" />

      {/* Center Content */}
      <div className="intro-center">
        <button
          className="monogram-btn"
          onClick={handleOpen}
        >
          <div className="monogram">
            <span>I</span>
            <span>&</span>
            <span>T</span>
          </div>

          <p className="tap-text">
            Tap to Open Invitation
          </p>
        </button>
      </div>

      {/* Black Fade Overlay */}
      <div className="intro-blackout"></div>
    </div>
  );
}