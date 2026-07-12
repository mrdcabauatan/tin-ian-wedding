import { useState, useRef } from "react";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Invitation from "./components/Invitation/Invitation";
import Details from "./components/Details/Details";
import Rsvp from "./components/Rsvp/Rsvp";
import PetalOverlay from "./components/PetalOverlay/PetalOverlay";

import bgMusic from "./assets/bgmusic.mp3";

import { ROLE_MAP } from "./components/constants/invitation_roles";
import Attire from "./components/Attire/Attire";

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

  const roleId = ROLE_MAP[guestInfo.role] ?? 0;

  const isMobileOrTablet = () => {
    return window.innerWidth <= 1024;
  };

  const pages = ["home", "invitation", "attire", "details", "rsvp"];
  const currentIndex = pages.indexOf(currentPage);

  if (!audioRef.current) {
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0;
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

  console.log(guestInfo)

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
          {!isMobileOrTablet() && currentPage !== "home" && (
            <Navbar setCurrentPage={changePage} />
          )}

          <PetalOverlay />

          {isMobileOrTablet() ? (
            <div>
              <div className="page">
                <Home
                  onEnterInvitation={() => {
                    document
                      .getElementById("invitation")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </div>

              <div id="invitation" className="page">
                <Invitation
                  name={`${guestInfo.firstName.toUpperCase()} ${guestInfo.lastName.toUpperCase()}`}
                  roleId={roleId}
                />
              </div>

              <div className="page">
                <Attire roleId={roleId} />
              </div>

              <div className="page">
                <Details />
              </div>

              <div className="page">
                <Rsvp guestInfo={guestInfo} />
              </div>
            </div>
          ) : (
            <div
              className="page-slider"
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
                <Invitation
                  name={`${guestInfo.firstName.toUpperCase()} ${guestInfo.lastName.toUpperCase()}`}
                  roleId={roleId}
                />
              </div>

               <div className="page">
                <Attire roleId={roleId} />
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