const express = require('express');
const router = express.Router();
const Game = require('../models/Game.js');

//helper function to check the winner

const calculateWinner = (board) =>{
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],    //rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],    //columns
        [0, 4, 8], [2, 4, 6]                //diagonals
    ];

    for(let i=0;i<lines.length;i++){
        const [a, b, c] = lines[i];
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            return board[a];
        }
    }
    return null;

};

// 1. Create a new game
router.post('/new', async(req, res)=>{
    try{
        const newGame = new Game();
        await newGame.save();
        res.status(201).json(newGame);
    } catch (error){
        res.status(500).json({message: 'Error creating game', Error});

    }
});

// 2. Fetch an existing game by ID
router.get('/:id', async(req, res) =>{
    try{
        const game = await Game.findById(req.params.id);
        if(!game) return res.status(404).json({message: "Game not found"});
        res.json(game);
    } catch (error){
        res.status(500).json({message: 'Error fetching game', error});
    }
});

//3. Making a move
router.put('/:id/move', async(req, res) =>{
    try{
        const {index}= req.body; // the sq the player clicked into
        const game = await Game.findById(req.params.id);

        if(!game) return res.status(404).json({message: 'Game not found'});
        if(game.isGameOver) return res.status(400).json({message: 'Game is already over'});
        if(game.board[index] !== null) return res.status(400).json({message: 'Square is already taken'});

        //update board with the current player's symbol
        game.board[index]= game.turn;

        //check for winner or a draw
        const winner = calculateWinner(game.board);
        if(winner){
            game.winner = winner;
            game.isGameOver = true;
        } else if(!game.board.includes(null)){
            game.winner = 'Draw';
            game.isGameOver = true;
        }else{
            // switch turns if the game is not over
            game.turn = game.turn === 'X'? 'O':'X';
        }
        await game.save();
        res.json(game);

    } catch (error) {
        res.status(500).json({message : 'error making move', error});
    }
});

module.exports = router;