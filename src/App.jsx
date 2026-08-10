import { useState, useRef, useEffect } from "react";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import PetalOverlay from "./components/PetalOverlay/PetalOverlay";
import Home from "./components/Home/Home";
import Invitation from "./components/Invitation/Invitation";
import Attire from "./components/Attire/Attire";
import GiftRegistry from "./components/GiftRegistry/GiftRegistry";
import Gallery from "./components/Gallery/Gallery";
import Details from "./components/Details/Details";
import Rsvp from "./components/Rsvp/Rsvp";
import bgMusic from "./assets/bgmusic.mp3";
import AlertModal from "./components/AlertModal/AlertModal";
import useAlert from "./hooks/useAlert";
import { ROLE_MAP } from "./components/constants/invitation_roles";

const App = () => {
  const { alert, showAlert, closeAlert } = useAlert();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [successLogin, setSuccessLogin] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
    role: "",
    churchAttendance: "",
    receptionAttendance: "",
    companion: 0,
    group: "",
    companionNames: [],
  });

  const audioRef = useRef(null);

  const roleId = ROLE_MAP[guestInfo.role] ?? 0;

  const isAttending =
    guestInfo.churchAttendance === "Attending" ||
    guestInfo.receptionAttendance === "Attending";

  if (!audioRef.current) {
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
  }

  const startMusic = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((err) => console.log(err));
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleIntroFinish = () => {
    startMusic();

    setTimeout(() => {
      setShowIntro(false);

      setTimeout(() => {
        setShowHome(true);
      }, 500);
    }, 1200);
  };

  const isMobileOrTablet = window.innerWidth <= 1024;

  return (
    <div className="app-container">
      {showIntro && (
        <Intro
          onFinish={handleIntroFinish}
          setGuestInfo={setGuestInfo}
          setSuccessLogin={setSuccessLogin}
          showAlert={showAlert}
        />
      )}

      {successLogin && showHome && (
        <div className="website">
          {showNavbar && (
            <Navbar
              scrollToSection={scrollToSection}
              isAttending={isAttending}
              setShowNavbar={setShowNavbar}
            />
          )}

          <PetalOverlay />

          <section id="home" className="page">
            <Home
              onEnterInvitation={() => {
                scrollToSection("invitation");
                if (!isMobileOrTablet) {
                  setShowNavbar(true);
                }
              }}
            />
          </section>

          <section id="invitation" className="page">
            <Invitation
              name={`${guestInfo.firstName.toUpperCase()} ${guestInfo.lastName.toUpperCase()}`}
              roleId={roleId}
            />
          </section>

          <section id="attire" className="page">
            <Attire roleId={roleId} />
          </section>

          <section id="gallery" className="page">
            <Gallery />
          </section>

          <section id="gift" className="page">
            <GiftRegistry guestInfo={guestInfo} showAlert={showAlert} />
          </section>

          {isAttending && (
            <section id="details" className="page">
              <Details guestInfo={guestInfo} />
            </section>
          )}

          <section id="rsvp" className="page">
            <Rsvp
              guestInfo={guestInfo}
              setGuestInfo={setGuestInfo}
              showAlert={showAlert}
            />
          </section>
        </div>
      )}

      <AlertModal
        open={alert.open}
        title={alert.title}
        message={alert.message}
        confirmText={alert.confirmText}
        cancelText={alert.cancelText}
        showCancel={alert.showCancel}
        onConfirm={() => {
          alert.onConfirm?.();
          closeAlert();
        }}
        onCancel={closeAlert}
      />
    </div>
  );
};

export default App;
