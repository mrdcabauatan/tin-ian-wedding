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
  const [successLogin, setSuccessLogin] = useState(false);

  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
  });

  const audioRef = useRef(null);

  const pages = ["home", "invitation", "details", "rsvp"];
  const currentIndex = pages.indexOf(currentPage);

  const isMobileOrTablet = window.innerWidth <= 1024;

  useEffect(() => {
    if (showIntro) {
      document.body.classList.add("intro-active");
    } else {
      document.body.classList.remove("intro-active");
    }

    return () => {
      document.body.classList.remove("intro-active");
    };
  }, [showIntro]);

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
      {showIntro && (
        <Intro
          onFinish={handleIntroFinish}
          setGuestInfo={setGuestInfo}
          setLoginStatus={setSuccessLogin}
        />
      )}

      {successLogin && (
        <>
          {!isMobileOrTablet && currentPage !== "home" && (
            <Navbar setCurrentPage={changePage} />
          )}

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
