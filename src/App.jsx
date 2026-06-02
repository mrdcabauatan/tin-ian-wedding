import { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Invitation from "./components/Invitation/Invitation";
import Venue from "./components/Venue/Venue";
import Attire from "./components/Attire/Attire";
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

  const pages = ["home", "invitation", "venue", "dress", "rsvp"];
  const currentIndex = pages.indexOf(currentPage);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {currentPage !== "home" && <Navbar setCurrentPage={changePage} />}

      <div
        style={{
          height: `${pages.length * 100}vh`,
          transform: `translateY(-${currentIndex * 100}vh)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        <Home onEnterInvitation={() => changePage("invitation")} />

        <Invitation />
        <Venue />
        <Attire />
        <Rsvp />
      </div>
    </div>
  );
};

export default App;
