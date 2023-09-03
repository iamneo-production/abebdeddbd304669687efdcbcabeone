const buttons = document.querySelectorAll(".btn");
const message = document.querySelector(".message");
const resultText = document.querySelector(".result-text");
const resetButton = document.querySelector(".reset-btn");

let currentPlayer = "X";
let moves = 0;
let gameOver = false;

function handleMove(button) {
    if (!button.textContent && !gameOver) {
        button.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X"?"O":"X";
        message.textContent = `Player ${currentPlayer} turn`;
        moves++;
        checkForWinOrDraw();
    }
}

function checkForWinOrDraw() {
    const winningCombinations = [
        
    ]
}
