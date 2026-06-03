import { useState, useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Invitation from "./components/Invitation/Invitation";
import Details from "./components/Details/Details";
import Rsvp from "./components/Rsvp/Rsvp";

import bgMusic from "./assets/bgmusic.mp3";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

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

  const pages = ["home", "invitation", "details", "rsvp"];
  const currentIndex = pages.indexOf(currentPage);

  return (
    <div className="app-container">
      {currentPage !== "home" && <Navbar setCurrentPage={changePage} />}

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
  );
};

export default App;
