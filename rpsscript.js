function getComputerChoice() {
  let choice = Math.random() * 3;

  if (choice <= 1) {
    return "rock";
  } else if (choice <= 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  let result = "";
  if (humanChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    humanChoice.toLowerCase() === "rock" &&
    computerChoice === "paper"
  ) {
    result = "You Lose! Paper beats Rock";
    computerScore = computerScore + 1;
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "scissors"
  ) {
    result = "You Lose! Scissors beats Paper";
    computerScore = computerScore + 1;
  } else if (
    humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "rock"
  ) {
    result = "You Lose! Rock beats Scissors";
    computerScore = computerScore + 1;
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "rock"
  ) {
    result = "You Win! Paper beats Rock";
    humanScore = humanScore + 1;
  } else if (
    humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "paper"
  ) {
    result = "You Win! Scissors beats Paper";
    humanScore = humanScore + 1;
  } else if (
    humanChoice.toLowerCase() === "rock" &&
    computerChoice === "scissors"
  ) {
    result = "You Win! Rock beats Scissors";
    humanScore = humanScore + 1;
  }

  hscore.textContent = humanScore;
  cscore.textContent = computerScore;

  if (humanScore === 5) {
    result = "GAME OVER!! You Win";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    result = "Better Luck Next Time! Computer Wins";
    humanScore = 0;
    computerScore = 0;
  }

  resultDisplay.textContent = result;

}

var humanScore = 0;
var computerScore = 0;

const body = document.querySelector("body");
const head = document.createElement("h1");
const container = document.createElement("div");
const score = document.createElement("div");
const resultDisplay = document.createElement("div");

body.style.cssText = "display: block; text-align: center; font-family: Roboto, sans-serif";

head.textContent = "ROCK PAPER SCISSORS";

body.appendChild(head);
body.appendChild(score);
body.appendChild(resultDisplay);
body.appendChild(container);

const hscore = document.createElement("div");
const cscore = document.createElement("div");

score.style.cssText = "display: flex; justify-content: space-evenly; margin: 1em";

hscore.style.cssText = "border: 5px solid aqua; border-radius: 0.4em; width: 10em; height: 10em; text-align: center; line-height: 10em; font-size: xx-large";
cscore.style.cssText = "border: 5px solid yellow; border-radius: 0.4em; width: 10em; height: 10em; text-align: center; line-height: 10em; font-size: xx-large";

score.appendChild(hscore);
score.appendChild(cscore);

resultDisplay.style.cssText = "background-color: whitesmoke; border-radius: 0.4em; font-size: 2em; margin: 1em";

const rock = document.createElement("button");
rock.textContent = "Rock";
const paper = document.createElement("button");
paper.textContent = "Paper";
const scissors = document.createElement("button");
scissors.textContent = "Scissors";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
