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
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for (const combination of winningCombinations) {
        const[a,b,c] = combination;
        if (
            buttons[a].textContent&&
            buttons[a].textContent===buttons[b].textContent &&
            buttons[a].textContent===buttons[c].textContent
        ) {
            gameOver = true;
            message.textContent = `Player ${buttons[a].textContent} won 🎉`;
            resetButton.disabled = false;
            return;
        }
    }

    if (moves===buttons.length) {
        gameOver = true;
        message.textContent = "It's a draw!";
        resetButton.disabled = false;
        return;
    }
}

function resetGame() {
    buttons.forEach((button) => {
        button.textContent = "";
        button.disabled = false;
    });

    currentPlayer = "X";
    moves = 0;
    gameOver = false;
    message.textContent = "Player X turn";
    //message.textContent = "";
    resetButton.disabled = true;
}

buttons.forEach((button) => {
    button.addEventListener("click",()=> {
        handleMove(button);
    });
});

resetButton.addEventListener("click",()=> {
    resetGame();
});
