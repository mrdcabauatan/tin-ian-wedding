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
  const [successLogin, setSuccessLogin] = useState(false);

  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
    role: "Guest",
  });

  const audioRef = useRef(null);

  const isMobileOrTablet = () => {
    return window.innerWidth <= 1024;
  };

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
          setSuccessLogin={setSuccessLogin}
        />
      )}
      {successLogin && (
        <div>
          {/* Desktop navbar only */}
          {!isMobileOrTablet() && currentPage !== "home" && (
            <Navbar setCurrentPage={changePage} />
          )}

          <PetalOverlay />

          {isMobileOrTablet() ? (
            /* MOBILE: normal scrolling */
            <div>
              <div className="page">
                <Home
                  onEnterInvitation={() => {
                    const invitationSection =
                      document.getElementById("invitation");

                    invitationSection?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                />
              </div>

              <div id="invitation" className="page">
                <Invitation
                  name={guestInfo.firstName.toUpperCase()}
                  role={guestInfo.role}
                />
              </div>

              <div className="page">
                <Details />
              </div>

              <div className="page">
                <Rsvp guestInfo={guestInfo} />
              </div>
            </div>
          ) : (
            /* DESKTOP: keep existing slider */
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
                <Invitation
                  name={guestInfo.firstName.toUpperCase()}
                  role={guestInfo.role}
                />
              </div>

              <div className="page">
                <Details />
              </div>

              <div className="page">
                <Rsvp guestInfo={guestInfo} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
