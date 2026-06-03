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

  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
  });

  const audioRef = useRef(null);

  const pages = ["home", "invitation", "details", "rsvp"];
  const currentIndex = pages.indexOf(currentPage);

  const isMobileOrTablet = window.innerWidth <= 1024;

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

    setTimeout(() => {
      setShowIntro(false);
    }, 1200);
  };

  return (
    <div className="app-container">
      {!isMobileOrTablet && currentPage !== "home" && (
        <Navbar setCurrentPage={changePage} />
      )}

      <PetalOverlay
        active={
          isMobileOrTablet
            ? true
            : ["invitation", "details", "rsvp"].includes(currentPage)
        }
      />

      {isMobileOrTablet ? (
        <div className="mobile-scroll-container">
          <div className="page">
            <Home onEnterInvitation={() => {}} />
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
      ) : (
        <>
          <div
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

          {currentPage !== "home" && (
            <Navbar setCurrentPage={changePage} />
          )}
        </>
      )}

      {showIntro && (
        <Intro
          onFinish={handleIntroFinish}
          setGuestInfo={setGuestInfo}
        />
      )}
    </div>
  );
};

export default App;