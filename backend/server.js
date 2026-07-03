const express = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

//middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected Successfully!");
    })
    .catch((err) => {
        console.log("❌ MongoDB Connection Error:");
        console.log(err);
    });

//Basic test
app.get('/', (req, res) => {
    res.send('Tic Tac Toe Backend is running!');

});

// Import Routes
const gameRoutes = require('./routes/gameRoutes');
app.use('/api/game', gameRoutes); // Connects the routes to the /api/game path

//start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})