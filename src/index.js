import React from 'react';
import ReactDOM from 'react-dom';
import { useGameStatus } from "./hooks";
import './index.css';


function Square(props) {
  return (
    <button className="square" onClick={props.onClick} >
      {props.value}
    </button>
  )
}

function Board(props) {
  const { squares, status, updateGameStatus } = useGameStatus();
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={updateGameStatus(i)}
      />
    );
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

