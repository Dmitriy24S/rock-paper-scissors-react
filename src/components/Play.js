import React, { useState, useEffect } from "react";
import "./Play.css";

import rockIcon from "../images/icon-rock.svg";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";

const Play = ({ userChoice, setGameStarted }) => {
  const [computerChoice, setComputerChoice] = useState();
  const [userWin, setUserWin] = useState();
  let choices = ["rock", "paper", "scissors"];

  const computerPlay = () => {
    let computerAnswer = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerAnswer);
  };

  const gameResultCalculation = () => {
    console.log("user choose " + userChoice, "|| computer choose " + computerChoice);

    if (computerChoice) {
      if (userChoice === "rock" && computerChoice === "paper") {
        setUserWin("win");
        console.log("user win");
        return;
      }
      if (userChoice === "rock" && computerChoice === "scissors") {
        setUserWin("lose");
        console.log("user lost");
        return;
      }
      if (userChoice === "paper" && computerChoice === "scissors") {
        setUserWin("lose");
        console.log("user lost");
        return;
      }
      if (userChoice === "paper" && computerChoice === "rock") {
        setUserWin("win");
        console.log("user win");
        return;
      }
      if (userChoice === "scissors" && computerChoice === "rock") {
        setUserWin("lose");
        console.log("user lost");
        return;
      }
      if (userChoice === "scissors" && computerChoice === "paper") {
        setUserWin("win");
        console.log("user win");
        return;
      } else {
        setUserWin("draw");
        console.log("draw");
      }
    }
  };

  useEffect(() => {
    computerPlay();
    if (computerChoice !== "undefined" && computerChoice !== undefined) {
      if (userChoice !== "" || userChoice !== undefined || userChoice !== "undefined") {
        gameResultCalculation();
      }
    }
  }, [computerChoice]);

  return (
    <section className="game-result-container">
      <div class="player-container">
        <div className="player-container2">
          <div className={`icon-container ${userChoice}-icon-container`}>
            <img
              src={
                userChoice === "paper" ? paperIcon : userChoice === "rock" ? rockIcon : scissorsIcon
              }
              alt={`${userChoice}`}
            />
          </div>
        </div>
        <p className="picked-choice-text"> You picked {userChoice}</p>
      </div>
      <div className="result">
        {userWin === "win" && "You win"}
        {userWin === "lose" && "You lost"}
        {userWin === "draw" && "Draw"}
        <button class="play-again-btn" onClick={() => setGameStarted(false)}>
          Play again
        </button>
      </div>
      <div className="computer-container">
        <div className="computer-container2">
          <div className={`icon-container ${computerChoice}-icon-container`}>
            <img
              src={
                computerChoice === "paper"
                  ? paperIcon
                  : computerChoice === "rock"
                  ? rockIcon
                  : scissorsIcon
              }
              alt={`${computerChoice}`}
            />
          </div>
        </div>
        <p className="picked-choice-text">House picked {computerChoice}</p>
      </div>
    </section>
  );
};

export default Play;
