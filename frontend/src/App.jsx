import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import { createNewGame, playMove } from './api';
import './index.css'; // Make sure our CSS is linked!

const App = () => {
  const [game, setGame] = useState(null);

  const handleNewGame = async () => {
    try {
      const res = await createNewGame();
      setGame(res.data);
    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  useEffect(() => {
    handleNewGame();
  }, []);

  const handleSquareClick = async (index) => {
    if (!game || game.isGameOver || game.board[index] !== null) return;
    try {
      const res = await playMove(game._id, index);
      setGame(res.data);
    } catch (error) {
      console.error("Error playing move:", error);
    }
  };

  if (!game) return <div className="status" style={{marginTop: '50px'}}>Loading Game...</div>;

  return (
    <div className="app-container">
      <h1 className="title">TIC-TAC-TOE</h1>
      
      <div className="status">
        {game.isGameOver 
          ? (game.winner === 'Draw' ? "🤝 It's a Draw!" : `🎉 Player ${game.winner} Wins!`) 
          : `Player ${game.turn}'s Turn`}
      </div>

      <Board board={game.board} onSquareClick={handleSquareClick} />

      {game.isGameOver && (
        <button className="reset-btn" onClick={handleNewGame}>
          PLAY AGAIN
        </button>
      )}
    </div>
  );
};

export default App;