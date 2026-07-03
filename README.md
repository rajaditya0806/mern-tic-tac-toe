# 🎮 Neon MERN Tic-Tac-Toe

A full-stack, responsive Tic-Tac-Toe web application built with the MERN (MongoDB, Express, React, Node.js) stack. This project features a modern, mobile-first dark theme UI with persistent game state tracking via a MongoDB database.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

* **Full-Stack Architecture:** RESTful API backend handling game logic and state persistence.
* **Database Integration:** Every move is instantly saved to MongoDB, allowing games to be paused and resumed.
* **Modern UI/UX:** A custom-built, responsive "neon dark mode" interface using pure CSS (no external styling libraries required).
* **Responsive Design:** Optimized to look like a native app on mobile devices while remaining perfectly centered and usable on large desktop monitors.
* **Live Scoreboard:** Tracks Player X wins, Player O wins, and Draws across rounds.

## 🛠️ Technologies Used

### Frontend
* **React.js** (Bootstrapped with Vite for maximum performance)
* **Axios** (For API communication)
* **Pure CSS** (CSS Variables, Flexbox, and CSS Grid for layout)

### Backend
* **Node.js & Express.js** (REST API routing and server logic)
* **MongoDB & Mongoose** (Database and schema modeling)
* **CORS & Dotenv** (Security and environment variable management)

## 🚀 Getting Started

Follow these instructions to run a copy of the project on your local machine for development and testing.

### Prerequisites
* Node.js installed on your local machine.
* A running instance of MongoDB (either locally or a MongoDB Atlas cloud URI).

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/rajaditya0806/mern-tic-tac-toe.git
cd tic-tac-toe-mern
\`\`\`

### 2. Backend Setup
Navigate to the backend directory, install dependencies, and configure your environment variables.
\`\`\`bash
cd backend
npm install
\`\`\`
Create a `.env` file in the `backend` directory and add the following:
\`\`\`env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
\`\`\`
Start the backend server:
\`\`\`bash
npm run dev
\`\`\`

### 3. Frontend Setup
Open a new terminal tab, navigate to the frontend directory, and install the dependencies.
\`\`\`bash
cd frontend
npm install
\`\`\`
Start the Vite development server:
\`\`\`bash
npm run dev
\`\`\`

### 4. Play
Open your browser and navigate to `http://localhost:5173` to play the game!

## 📂 Folder Structure

\`\`\`text
tic-tac-toe-mern/
├── backend/
│   ├── models/
│   │   └── Game.js         # Mongoose schema for game state
│   ├── routes/
│   │   └── gameRoutes.js   # API endpoints for creating/updating games
│   ├── .env                # Backend environment variables
│   └── server.js           # Express server entry point
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Board.jsx   # Grid rendering logic
    │   │   └── Square.jsx  # Individual button component
    │   ├── api.js          # Axios configuration and API calls
    │   ├── App.jsx         # Main application state and layout
    │   └── index.css       # Custom dark theme and responsive styling
    └── vite.config.js
\`\`\`

## 👨‍💻 Author


**Aditya Raj**
* GitHub: [@rajaditya0806](https://github.com/rajaditya0806)
