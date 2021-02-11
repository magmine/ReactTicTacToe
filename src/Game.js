import React from "react";
import "./index.css";
import { Board } from "./Board";
import { calculateWinner, isDraw } from "./utils";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      status: "X",
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.status;
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      status: this.state.status === "X" ? "O" : "X",
    });
  }

  render() {
    // debugger;
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winner is " + winner;
    } else {
      if (isDraw(current.squares)) {
        status = "Draw";
      } else {
        let value = this.state.status == null ? "X" : this.state.status;
        status = "Next player: " + value;
      }
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
