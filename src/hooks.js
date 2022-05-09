import { useState } from 'react';

export const useGameStatus = () => {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState(true);
  const [status, setStatus] = useState('Next player: ' + (xIsNext ? 'X': 'O'));

  const updateSquare = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquare(newSquares);

    return newSquares;
  }

  const updateNextTurn = () => {
    const newXIsNext = !xIsNext
    setIsNext(newXIsNext);

    return newXIsNext;
  }

  const isGameEnded = (i) => {
    if (calculateWinner(squares.slice()) || squares.slice()[i]) {
      return;
    }
  }

  const updateGameStatus = (i) => () => {
    if (isGameEnded(i)) {
      return;
    }

    const newSquares = updateSquare(i);
    const newXIsNext = updateNextTurn();

    const winner = calculateWinner(newSquares);
    if (winner) {
      setStatus('Winner: ' + winner);
    } else {
      setStatus('Next player: ' + (newXIsNext ? 'X': 'O'));
    }
  }
  return { squares, status, updateGameStatus };
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
