import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button 
      // This applies the "square" class, and either "X" or "O" for coloring
      className={`square ${value || ''}`} 
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;