import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const styles = {
  width: "200px",
  margin: "20px auto",
};

export default function Game() {
  // we need to destructure  because it would be less convenient
  // to work with
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  // the i is the currently clicked square
  function handleClick(i) {
    // make a copy of the array because you dont want to modify
    // the props directly in case you pass them down elsewhere
    const boardCopy = [...board];
    // if user clicks an occupied square or the game is over, return
    if (winner || boardCopy[i]) return;

    if (boardCopy[i] === xIsNext) {
      boardCopy[i] = "X";
    } else {
      boardCopy[i] = "O";
    }
    setBoard(boardCopy);
    // opposite of what it was
    setXIsNext(!xIsNext);
  }

  function renderMoves() {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
    );
  }
  return (
    <>
      <Board squares={board} onclick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}
