console.log("HELLO WORLD");

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
  if (humanChoice === computerChoice) {
    console.log("It's a Draw!");
  } else if (
    humanChoice.toLowerCase() === "rock" &&
    computerChoice === "paper"
  ) {
    console.log("You Lose! Paper beats Rock");
    computerScore = computerScore + 1;
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "scissors"
  ) {
    console.log("You Lose! Scissors beats Paper");
    computerScore = computerScore + 1;
  } else if (
    humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "rock"
  ) {
    console.log("You Lose! Rock beats Scissors");
    computerScore = computerScore + 1;
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "rock"
  ) {
    console.log("You Win! Paper beats Rock");
    humanScore = humanScore + 1;
  } else if (
    humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "paper"
  ) {
    console.log("You Win! Scissors beats Paper");
    humanScore = humanScore + 1;
  } else if (
    humanChoice.toLowerCase() === "rock" &&
    computerChoice === "scissors"
  ) {
    console.log("You Win! Rock beats Scissors");
    humanScore = humanScore + 1;
  }
}

var humanScore = 0;
var computerScore = 0;

const body = document.querySelector("body");
const container = document.createElement("div");
const score = document.createElement("div");

body.style.cssText = "display: block; text-align: center";
body.appendChild(score);
body.appendChild(container);

const hscore = document.createElement("div");
const cscore = document.createElement("div");

score.style.cssText = "display: flex; justify-content: space-evenly";

hscore.textContent = humanScore;
hscore.style.cssText = "border-radius: 0.4em; width: 10em; height: 10em; text-align: center";
cscore.textContent = computerScore;
cscore.style.cssText = "border-radius: 0.4em; width: 10em; height: 10em; text-align: center";

score.appendChild(hscore);
score.appendChild(cscore);

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
