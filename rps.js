let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = "";

  if (playerChoice === computerChoice) {
    resultText = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultText = "You win!";
    playerScore++;
  } else {
    resultText = "You lose!";
    computerScore++;
  }

  document.getElementById("result").innerText =
    `You choose ${playerChoice}, computer choose ${computerChoice}. ${resultText}`;

  document.getElementById("score").innerText =
    `PLAYER: ${playerScore} | COMPUTER: ${computerScore}`;
}
