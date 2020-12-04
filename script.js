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
  
function playRound() {
    const playerSelection = playerGuess();
    const computerSelection = computerGuess();

    if (playerSelection === computerSelection) {
        return "draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "lost";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "lost";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "lost";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "win";
    }
}

function playGame() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        const result = playRound();
        if (result === "win") {
            score++; 
        }
        console.log(score);
    }

    console.log("Final score: " + score);
}

playGame();
