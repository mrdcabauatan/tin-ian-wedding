import { useState, useRef, useEffect } from "react";

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

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

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

  const handleIntroFinish = () => {
    startMusic();

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

    const swipeDistance =
      touchStartY.current - touchEndY.current;

    const threshold = 60;

    if (swipeDistance > threshold) {
      const nextIndex = Math.min(
        currentIndex + 1,
        pages.length - 1
      );

      setCurrentPage(pages[nextIndex]);
    }

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
      <div>
        {currentPage !== "home" && (
          <Navbar setCurrentPage={changePage} />
        )}

        <PetalOverlay
          active={[
            "invitation",
            "details",
            "rsvp",
          ].includes(currentPage)}
        />

        <div
          className="page-slider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: isMobileOrTablet()
              ? `translateY(-${currentIndex * 100}vh)`
              : `translateX(-${currentIndex * 100}vw)`,
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
            <Rsvp guestInfo={guestInfo} />
          </div>
        </div>
      </div>

      {showIntro && (
        <Intro
          onFinish={handleIntroFinish}
          setGuestInfo={setGuestInfo}
          setLoginStatus={setSuccessLogin}
        />
      )}

      {successLogin && (
        <>
          {/* Desktop Navbar */}
          {!isMobileOrTablet && currentPage !== "home" && (
            <Navbar setCurrentPage={changePage} />
          )}

          {/* Petals start immediately after successful login */}
          <PetalOverlay
            active={["invitation", "details", "rsvp"].includes(currentPage)}
          />

          {isMobileOrTablet ? (
            <div className="mobile-scroll-container">
              <div className="page">
                <Home onEnterInvitation={() => {}} />
              </div>

              <div className="page">
                <Invitation guestInfo={guestInfo.firstName.toUpperCase()} />
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
                  <Invitation guestInfo={guestInfo.firstName.toUpperCase()} />
                </div>

                <div className="page">
                  <Details />
                </div>

                <div className="page">
                  <Rsvp guestInfo={guestInfo} />
                </div>
              </div>

              {currentPage !== "home" && <Navbar setCurrentPage={changePage} />}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
