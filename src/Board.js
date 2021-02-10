import React from "react";
import "./index.css";
import { Square, calculateWinner } from "./utils";

export class Board extends React.Component {
  constructor(props) {
    //debugger;
    super(props);
    this.state = { squares: Array(9).fill(null), status: "Next player: X" };
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    ); /** Is this how we create props */
  }

  isClicked(i) {
    return this.state.squares[i] == null ? false : true;
  }

  handleClick(i) {
    if (this.isClicked(i) || calculateWinner(this.state.squares)) return;
    const squares = this.state.squares.slice();
    squares[i] = this.state.value;
    this.setState({
      value:
        this.state.value === "X"
          ? "O"
          : "X" /** In case I want to switch between the state of the current component */,
    });
    this.setState({ squares: squares });
  }

  render() {
    const isWin = calculateWinner(this.state.squares);
    let status;
    if (isWin) {
      status = "Winner is " + isWin;
    } else {
      let value = this.state.value == null ? "X" : this.state.value;
      status = "Next player: " + value;
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
