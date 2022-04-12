import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";
import Play from "./components/Play";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [userChoice, setUserChoice] = useState("");

  return (
    <div className="App">
      <Header />

      {gameStarted ? (
        <Play
          userChoice={userChoice}
          setUserChoice={setUserChoice}
          setGameStarted={setGameStarted}
        />
      ) : (
        <Game
          setGameStarted={setGameStarted}
          setUserChoice={setUserChoice}
          userChoice={userChoice}
        />
      )}
    </div>
  );
}

export default App;
