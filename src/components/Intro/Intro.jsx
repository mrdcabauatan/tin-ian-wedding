import { useState, useRef } from "react";
import "./Intro.css";

import introVideo from "../../assets/intro.mp4";

const Intro = ({ onFinish, setGuestInfo }) => {
  const [showModal, setShowModal] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const videoRef = useRef(null);

  const handleEnter = async () => {
    if (!firstName.trim() || !lastName.trim()) {
      alert("Please enter your first name and last name.");
      return;
    }

    setGuestInfo({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
    });

    setShowModal(false);

    try {
      await videoRef.current.play();
    } catch (err) {
      console.error(err);
    }
  };

  const handleVideoEnd = () => {
    setIsLeaving(true);

    setTimeout(() => {
      onFinish();
    }, 1200);
  };

  return (
    <div className={`intro ${isLeaving ? "intro-leave" : ""}`}>
      <video
        ref={videoRef}
        className="intro-video"
        src={introVideo}
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
      />

      <div className="video-overlay" />

      {showModal && (
        <div className="intro-modal-backdrop">
          <div className="intro-modal">
            <h1 className="intro-title">
              Welcome! Please enter your full name.
            </h1>

            <input
              type="text"
              placeholder="First Name"
              className="intro-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Last Name"
              className="intro-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <button
              className="intro-button"
              onClick={handleEnter}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;