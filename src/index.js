import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Square(props) {
  return (
    <button
      className="square"
      onClick={() => props.onClick()}
      // onClick={() => {
      //   this.props.on_Click();
      // this.setState({
      //   value:
      //     this.state.value === "X"
      //       ? "O"
      //       : "X" /** In case I want to switch between the state of the current component */,
      // });
      //alert("click " + this.state.value);
      //this.state.value = this.state.value === "X" ? "O" : "X";
      // }}
    >
      {props.value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {
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
      status = "Next player: " + (this.state.value === "X" ? "O" : "X");
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
ReactDOM.render(<Game />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
