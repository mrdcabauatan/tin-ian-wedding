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

  if (!audioRef.current) {
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.8;
  }

  const startMusic = () => {
    audioRef.current.play().catch((err) => console.log(err));
  };

  const changePage = (page) => {
    startMusic();
    setCurrentPage(page);
  };

  const handleIntroOpen = () => {
    setShowIntro(false);

    setTimeout(() => {
      setFadeIn(true);
    }, 50);
  };

  const pages = ["home", "invitation", "details", "rsvp"];
  const currentIndex = pages.indexOf(currentPage);

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
            style={{
              transform: `translateX(-${currentIndex * 100}vw)`,
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
              <Rsvp />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;