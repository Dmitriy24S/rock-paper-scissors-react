import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section className="title" onClick={() => window.location.reload()}>
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </section>
      <section className="score-container">
        <span className="score-title">Score</span>
        <div className="score-number">12</div>
      </section>
    </header>
  );
};

export default Header;
