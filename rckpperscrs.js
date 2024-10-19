console.log("HELLO WORLD");

function getComputerChoice() {
    var choice = Math.random()*3;
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

    switch (answer) {
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

console.log(getHumanChoice());