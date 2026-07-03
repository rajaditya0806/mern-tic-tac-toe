const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  // The board is an array of 9 strings. 
  // It will hold 'X', 'O', or null for empty spaces.
  board: {
    type: [String],
    default: Array(9).fill(null)
  },
  // Tracks whose turn it is ('X' or 'O')
  turn: {
    type: String,
    default: 'X'
  },
  // Tracks the winner ('X', 'O', 'Draw', or null if still playing)
  winner: {
    type: String,
    default: null
  },
  // Boolean to easily check if the game has ended
  isGameOver: {
    type: Boolean,
    default: false
  }
}, { timestamps: true }); 
// timestamps automatically adds createdAt and updatedAt fields
module.exports = mongoose.model('Game', gameSchema);