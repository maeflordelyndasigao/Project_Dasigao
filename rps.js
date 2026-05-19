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

    let roundVerdict = "";
    let color = "#f8fafc"; 

    if (playerChoice === computerChoice) {
        roundVerdict = "IT'S A DRAW!";
        color = "#94a3b8"; 
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        roundVerdict = "YOU WIN! 🔥";
        playerScore++;
        color = "#4ade80"; 
    } else {
        roundVerdict = "YOU LOSE! 💀";
        computerScore++;
        color = "#f87171";
    }

    resultDisplay.innerHTML = `
        <div class="matchup-visual">
            <span>${emojiMap[playerChoice]}</span> 
            <span class="vs-small">vs</span> 
            <span>${emojiMap[computerChoice]}</span>
        </div>
        <div style="color: ${color}; margin-top: 8px;">${roundVerdict}</div>
    `;

    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    const resultDisplay = document.getElementById("result");

    resultDisplay.innerHTML = "READY?";
    resultDisplay.style.color = "#f8fafc";
    
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
}