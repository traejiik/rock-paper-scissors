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
const subcont = document.createElement("div");

body.style.cssText = "display: block; text-align: center; font-family: Roboto, sans-serif";

head.textContent = "ROCK PAPER SCISSORS";

body.appendChild(head);
body.appendChild(subcont);
body.appendChild(resultDisplay);
body.appendChild(container);

subcont.appendChild(score);

const player = document.createElement("div");
const comp = document.createElement("div");
const hscore = document.createElement("div");
const cscore = document.createElement("div");
const playerName = document.createElement("div");
const compName = document.createElement("div");

score.style.cssText = "display: flex; justify-content: space-evenly; margin: 1em";

hscore.style.cssText = "border: 5px solid aqua; border-radius: 0.4em; width: 10em; height: 10em; text-align: center; line-height: 10em; font-size: xx-large; margin-bottom: 0.3em";
cscore.style.cssText = "border: 5px solid yellow; border-radius: 0.4em; width: 10em; height: 10em; text-align: center; line-height: 10em; font-size: xx-large; margin-bottom: 0.3em";

score.appendChild(player);
score.appendChild(comp);

player.appendChild(hscore);
player.appendChild(playerName);
playerName.textContent = prompt("Enter Your Name").toUpperCase();
playerName.style.cssText = "font-size: 2em; font-weight: bold";

comp.appendChild(cscore);
comp.appendChild(compName);
compName.textContent = "COMPUTER";
compName.style.cssText = "font-size: 2em; font-weight: bold";

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

buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.style.cssText = "padding: 0.125em;";
});

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
