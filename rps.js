let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const resultDisplay = document.getElementById("result");
    
    const emojiMap = {
        'rock': '👊',
        'paper': '✋',
        'scissors': '✌️'
    };

    let resultText = "";
    let color = "#f8fafc"; // Default white

    if (playerChoice === computerChoice) {
        resultText = "IT'S A DRAW!";
        color = "#94a3b8"; // Grey
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText = "YOU WIN! 🔥";
        playerScore++;
        color = "#4ade80"; // Green
    } else {
        resultText = "COMPUTER WINS 💀";
        computerScore++;
        color = "#f87171"; // Red
    }

    resultDisplay.style.color = color;
    resultDisplay.innerText = resultText;

    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;

    const resultDisplay = document.getElementById("result");
    resultDisplay.innerText = "READY?";
    resultDisplay.style.color = "#f8fafc"; 

    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
}
