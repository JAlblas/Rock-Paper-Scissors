function computerGuess() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playerGuess() {
    let anwer = "";

    do {
        answer = prompt("Rock, Paper, or Scissors?").toLowerCase();
    } while (answer !== "rock" && answer !== "paper" && answer !== "scissors");
    
    return answer;
}
  
function playRound(playerSelection) {
    const computerSelection = computerGuess();
    let result = "";

    if (playerSelection === computerSelection) {
        result = "draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "lost";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "win";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "lost";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "lost";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "win";
    }

    if (result === "win") {
        playerScore++; 
    } else if (result === "lost") {
        computerScore++;
    }

    playerScoreText.textContent = playerScore.toString();
    computerScoreText.textContent = computerScore.toString();

    if (playerScore === 5) {
        alert("You win!");
        resetGame();
    } else if (computerScore === 5) {
        alert("You lost!");
        resetGame();
    }

    
}

function setupUI() {
    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', () => {
        playRound("rock");
    });

    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', () => {
        playRound("paper");
    });

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', () => {
        playRound("scissors");
    });
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreText.textContent = playerScore.toString();
    computerScoreText.textContent = computerScore.toString();
}

let playerScoreText = document.querySelector('#playerScore');
let computerScoreText = document.querySelector('#computerScore');

let playerScore = 0;
let computerScore = 0;

setupUI();
//playGame();
