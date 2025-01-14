// this is for testing the connection
//set choices = ["Rock", "Paper", "Scissor"];
//Get a choice from the user
//Determine computer selection
//Determine Who wins
//Print the result

const choices = ["ROCK", "PAPER", "SCISSOR"];
const userChoice = GetUserChoice();

if (userChoice === "Invalid") {
    console.log("Input is invalid!");
    return;
}
const computerChoice = GetComputerChoice();
const winner = GetWinner(userChoice, computerChoice);
console.log(`Computer choice: ${computerChoice} ***     Winner: ${winner} ***`);

function GetUserChoice() {
    const arges = process.argv.slice(2);
    let result = "Invalid";
    console.log(arges);
    const userInput = arges[0].toUpperCase();
    const isInputValid = choices.some((x) => x === userInput);
    if (isInputValid) {
        result = arges[0];
    }

    return result;
}

function GetComputerChoice() {
    const rndIndex = Math.floor(3 * Math.random()); /* 0 ≤ Math.random()<1 */
    return choices[rndIndex];
}

function GetWinner(user, computer) {
    let result = "";
    const userChoice = user.toUpperCase();
    const computerChoice = computer.toUpperCase();
    if (userChoice === computerChoice) {
        result = "draw";
    } else if ((userChoice === "ROCK" && computerChoice === "SCISSOR") || (userChoice === "SCISSOR" && computerChoice === "PAPER") || (userChoice === "PAPER" && computerChoice === "ROCK")) {
        result = "user";
    } else {
        result = "Computer";
    }
    return result;
}
