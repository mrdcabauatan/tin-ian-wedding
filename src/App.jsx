import { useState, useRef } from "react";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Invitation from "./components/Invitation/Invitation";
import Details from "./components/Details/Details";
import Rsvp from "./components/Rsvp/Rsvp";

import bgMusic from "./assets/bgmusic.mp3";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [showIntro, setShowIntro] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const audioRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const handleIntroOpen = () => {
    startMusic();

    setShowIntro(false);

    setTimeout(() => {
      setFadeIn(true);
    }, 50);
  };

  const isMobileOrTablet = () => {
    return window.innerWidth <= 1024;
  };

  const handleTouchStart = (e) => {
    if (!isMobileOrTablet()) return;

    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!isMobileOrTablet()) return;

    touchEndX.current = e.changedTouches[0].clientX;

    const swipeDistance =
      touchStartX.current - touchEndX.current;

    const threshold = 50;

    // Swipe Left → Next Page
    if (swipeDistance > threshold) {
      const nextIndex = Math.min(
        currentIndex + 1,
        pages.length - 1
      );

      setCurrentPage(pages[nextIndex]);
    }

    // Swipe Right → Previous Page
    if (swipeDistance < -threshold) {
      const prevIndex = Math.max(
        currentIndex - 1,
        0
      );

      setCurrentPage(pages[prevIndex]);
    }
  };

  return (
    <div className="app-container">
      {showIntro ? (
        <Intro onOpen={handleIntroOpen} />
      ) : (
        <div className={`home-fade ${fadeIn ? "visible" : ""}`}>
          {currentPage !== "home" && (
            <Navbar setCurrentPage={changePage} />
          )}

          <div
            className="page-slider"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(-${currentIndex * 100}vw)`,
            }}
          >
            <div className="page">
              <Home
                onEnterInvitation={() =>
                  changePage("invitation")
                }
              />
            </div>

            <div className="page">
              <Invitation />
            </div>

            <div className="page">
              <Details />
            </div>

            <div className="page">
              <Rsvp />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;