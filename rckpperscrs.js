console.log("HELLO WORLD");

function getComputerChoice() {
    let choice = Math.random()*3;
    console.log(choice);

    if (choice <= 1) {
        return "rock";
    } else if (choice <= 2) {
        return "paper";
    } else {
        return "scissors";
    }

}

function getHumanChoice() {
    let answer = prompt("Please enter either Rock, Paper or Scissors: ");

    switch (answer.toLowerCase()) {
        case "rock":
            return answer;
            break;
        case "paper":
            return answer;
            break;
        case "scissors":
            return answer;
            break;
        default:
            console.log("Not a valid choice");
            break;
    }
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a Draw!");
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock");
        computerScore = computerScore + 1;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beats Paper");
        computerScore = computerScore + 1;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore = computerScore + 1;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock");
        humanScore = humanScore + 1;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper");
        humanScore = humanScore + 1;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore = humanScore + 1;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);