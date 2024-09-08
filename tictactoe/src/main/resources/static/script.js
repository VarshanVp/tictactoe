const board = document.getElementById('board');
const playerForm = document.getElementById('playerForm');
const gameContainer = document.getElementById('gameContainer');
const currentPlayerDisplay = document.getElementById('currentPlayerDisplay');
const winnerMessage = document.getElementById('winnerMessage');
let player1Name, player2Name, currentPlayerName;

function startGame() {
    player1Name = document.getElementById('player1').value || 'Player 1';
    player2Name = document.getElementById('player2').value || 'Player 2';
    currentPlayerName = player1Name;
    playerForm.style.display = 'none';
    gameContainer.style.display = 'block';
    resetGame();
}

function createBoard() {
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('button');
        cell.classList.add('cell');
        cell.onclick = () => makeMove(Math.floor(i / 3), i % 3);
        board.appendChild(cell);
    }
}

async function makeMove(row, col) {
    const response = await fetch(`/api/tictactoe/move?row=${row}&col=${col}`, {method: 'POST'});
    const result = await response.text();
    if (result.includes("wins")) {
        showWinnerMessage(`${currentPlayerName} wins!`);
    } else if (result.includes("draw")) {
        showWinnerMessage("It's a draw!");
    } else {
        currentPlayerName = currentPlayerName === player1Name ? player2Name : player1Name;
        updateCurrentPlayerDisplay();
    }
    updateBoard();
}

async function updateBoard() {
    const response = await fetch('/api/tictactoe/board');
    const boardState = await response.json();
    const cells = board.getElementsByClassName('cell');
    boardState.forEach((row, i) => {
        for (let j = 0; j < row.length; j++) {
            cells[i * 3 + j].textContent = row[j] === '-' ? '' : row[j];
        }
    });
}

async function resetGame() {
    await fetch('/api/tictactoe/reset', {method: 'POST'});
    createBoard();
    currentPlayerName = player1Name;
    updateCurrentPlayerDisplay();
    winnerMessage.style.display = 'none';
}

function updateCurrentPlayerDisplay() {
    currentPlayerDisplay.textContent = `${currentPlayerName}'s turn!`;
}

function showWinnerMessage(message) {
    const winnerText = document.createElement('div');
    winnerText.id = 'winnerText';
    winnerText.innerHTML = message.split('').map(char => 
        char === ' ' ? '&nbsp;' : `<span>${char}</span>`
    ).join('');
    
    winnerMessage.innerHTML = '';
    winnerMessage.appendChild(winnerText);
    winnerMessage.innerHTML += '<button id="resetButton" onclick="resetGame()">Play Again!</button>';
    winnerMessage.style.display = 'flex';
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Initialize the game
createBoard();
updateBoard();
