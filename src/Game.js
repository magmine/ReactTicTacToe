import React from "react";
import "./index.css";
import { Board } from "./Board";

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div className="status">
            <button>btn1</button>
          </div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
