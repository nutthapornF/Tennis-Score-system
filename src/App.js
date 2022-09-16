import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //init at 0
  const [scoreP1, setScoreP1] = useState("0");
  const [scoreP2, setScoreP2] = useState("0");
  const [setP1, setSetP1] = useState(0);
  const [setP2, setSetP2] = useState(0);
  const [matchP1, setMatchP1] = useState(0);
  const [matchP2, setMatchP2] = useState(0);

  let deuce = "Ad";
  const hangleAddScoreP1 = () => {
    setScoreP1(Number(scoreP1) + 15);
    if (scoreP1 === 30) {
      setScoreP1(Number(scoreP1) + 10);
    } else if (scoreP1 === 40 && scoreP2 < 40) {
      setScoreP1("0");
      setScoreP2("0");
      setSetP1(setP1 + 1);
    } else if (scoreP1 >= 40 && scoreP2 >= 40) {
      setScoreP1(deuce);
    } else if (scoreP1 === deuce && scoreP2 === 40) {
      setScoreP1("0");
      setScoreP2("0");
      setSetP1(setP1 + 1);
    } else if (scoreP1 === 40 && scoreP2 === deuce) {
      setScoreP2(40);
      setScoreP1(40);
    } else if (setP1 === 6) {
      setMatchP1(matchP1 + 1);
      setSetP1(0);
    } else if (matchP1 === 2) {
      alert("YOU WON !!");
    }
  };
  const hangleAddScoreP2 = () => {
    setScoreP2(Number(scoreP2) + 15);
    if (scoreP2 === 30) {
      setScoreP2(Number(scoreP2) + 10);
    } else if (scoreP2 === 40 && scoreP1 < 40) {
      setScoreP1("0");
      setScoreP2("0");
      setSetP2(setP2 + 1);
    } else if (scoreP2 >= 40 && scoreP1 >= 40) {
      setScoreP2(deuce);
    } else if (scoreP2 === deuce && scoreP1 === 40) {
      setScoreP1("0");
      setScoreP2("0");
      setSetP2(setP2 + 1);
    } else if (scoreP2 === 40 && scoreP1 === deuce) {
      setScoreP2(40);
      setScoreP1(40);
    } else if (setP2 === 6) {
      setMatchP2(matchP2 + 1);
      setSetP2(0);
    } else if (matchP2 === 2) {
      alert("YOU WON !!");
    }
  };
  const handleScoresReduceP1 = () => {
    if (scoreP1 === "0" || scoreP1 === 15) {
      setScoreP1("0");
    } else if (scoreP1 === 30) {
      setScoreP1(15);
    } else if (scoreP1 === 40) {
      setScoreP1(30);
    } else if (scoreP1 === deuce) {
      setScoreP1(40);
    }
  };
  const handleScoresReduceP2 = () => {
    if (scoreP2 === "0" || scoreP2 === 15) {
      setScoreP2("0");
    } else if (scoreP2 === 30) {
      setScoreP2(15);
    } else if (scoreP2 === 40) {
      setScoreP2(30);
    } else if (scoreP2 === deuce) {
      setScoreP2(40);
    }
  };

  /* const handleReset = () => {
    setScoreP1("0");
    setP1(0);
    setMatchP1(0);
    setScoreP2("0");
    setP1(0);
    setMatchP2(0);
  }; */

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Tennis Scores System</h1>
          <table className="player">
            <tbody>
              <tr>
                <td>Player Name</td>
                <td>Match Scores</td>
                <td>Set Scores</td>
                <td>Game Scores</td>
              </tr>
              <tr>
                <td>Player 1</td>
                <td>{matchP1}</td>
                <td>{setP1}</td>
                <td>{scoreP1}</td>
              </tr>
              <tr>
                <td>Player 1</td>
                <td>{matchP2}</td>
                <td>{setP2}</td>
                <td>{scoreP2}</td>
              </tr>
            </tbody>
          </table>
          {/* <lebel>
            Scores to win <input type="number" />
          </lebel> */}
          <div>
            <button onClick={hangleAddScoreP1}>+Love Score For Player1</button>
            <button onClick={hangleAddScoreP2}>+Love Score For Player2</button>
          </div>
          <div>
            <button onClick={handleScoresReduceP1}>
              -Love Score For Player1
            </button>
            <button onClick={handleScoresReduceP2}>
              -Love Score For Player2
            </button>
          </div>
          {/* <button onClick={handleReset}>Reset</button> */}
        </div>
      </header>
    </div>
  );
}

export default App;
