import { useState, useRef } from "react";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Invitation from "./components/Invitation/Invitation";
import Details from "./components/Details/Details";
import Rsvp from "./components/Rsvp/Rsvp";
import PetalOverlay from "./components/PetalOverlay/PetalOverlay";

import bgMusic from "./assets/bgmusic.mp3";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [showIntro, setShowIntro] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
  });

  const audioRef = useRef(null);

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const pages = ["home", "invitation", "details", "rsvp"];
  const currentIndex = pages.indexOf(currentPage);

  if (!audioRef.current) {
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }

  const startMusic = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((err) => console.log(err));
    }
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const handleIntroFinish = () => {
    startMusic();

    setFadeIn(false);

    setTimeout(() => {
      setShowIntro(false);
    }, 1200);
  };

  const isMobileOrTablet = () => {
    return window.innerWidth <= 1024;
  };

  const handleTouchStart = (e) => {
    if (!isMobileOrTablet()) return;

    touchStartY.current = e.changedTouches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!isMobileOrTablet()) return;

    touchEndY.current = e.changedTouches[0].clientY;

    const swipeDistance = touchStartY.current - touchEndY.current;

    const threshold = 70;

    // Swipe Up → Next Page
    if (swipeDistance > threshold) {
      const nextIndex = Math.min(currentIndex + 1, pages.length - 1);
      setCurrentPage(pages[nextIndex]);
    }

    // Swipe Down → Previous Page
    if (swipeDistance < -threshold) {
      const prevIndex = Math.max(currentIndex - 1, 0);
      setCurrentPage(pages[prevIndex]);
    }
  };

  return (
    <div className="app-container">
      <div>
        {currentPage !== "home" && <Navbar setCurrentPage={changePage} />}

        {/* Persistent Falling Petals */}
        <PetalOverlay
          active={["invitation", "details", "rsvp"].includes(currentPage)}
        />

        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            height: `${pages.length * 100}vh`,
            transform: `translateY(-${currentIndex * 100}vh)`,
            transition: "transform 1s ease-in-out",
          }}
        >
          <div className="page">
            <Home onEnterInvitation={() => changePage("invitation")} />
          </div>

          <div className="page">
            <Invitation />
          </div>

          <div className="page">
            <Details />
          </div>

          <div className="page">
            <Rsvp guestInfo={guestInfo} />
          </div>
        </div>
      </div>

      {showIntro && (
        <Intro onFinish={handleIntroFinish} setGuestInfo={setGuestInfo} />
      )}
    </div>
  );
};

export default App;
