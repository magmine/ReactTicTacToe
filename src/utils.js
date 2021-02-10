export function Square(props) {
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

export function calculateWinner(squares) {
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
