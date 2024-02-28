import React, { useState } from "react";
import "./Home.css";
function home() {
  const [userToken, setUserToken] = useState("");
  const [ComputerToken, setComputerToken] = useState("");
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const tokens = ["rock", "paper", "scissor"];

  const chooseUser = (token) => {
    const computerChoose = tokens[Math.floor(Math.random() * tokens.length)];
    setComputerToken(computerChoose);
    setUserToken(token);
    checkWinner(token, computerChoose, userScore, computerScore);
  };
  const checkWinner = (user, computer, userPoints, computerPoints) => {
    if (
      (user === "rock" && computer === "scissor") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissor" && computer === "paper")
    ) {
      setResult(`You win! ${user} beats ${computer}`);
      setUserScore(userPoints + 1);
    } else if (user === computer) {
      setResult("It's a tie!");
    } else {
      setResult(`You lose! ${computer} beats ${user}`);
      setComputerScore(computerPoints + 1);
    }
  };
  return (
    <div id="container">
      <h1>Rock Paper Scissors Game</h1>
      <h2>Choose your move:</h2>
      <div id="btns-container">
        <span
          onClick={() => {
            chooseUser("rock");
          }}
        >
          👊
        </span>
        <span
          onClick={() => {
            chooseUser("paper");
          }}
        >
          🖐️
        </span>
        <span
          onClick={() => {
            chooseUser("scissor");
          }}
        >
          ✌️
        </span>
      </div>
      <p>{result}</p>
      <p>
        Your score: <span>{userScore}</span> Computer score:{" "}
        <span>{computerScore}</span>
      </p>
    </div>
  );
}

export default home;
