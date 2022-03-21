
//Call game function to run
game();

function game() {

    //Win counter
    let win = 0;

    //Loop through game 5 times
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("What do you want to play (rock, paper, or scissors)?");

        const computerSelection = computerPlay();

        const round = playRound(playerSelection, computerSelection);

        console.log(round)

        //Add to counter if they win
        if (round.includes("win")) {
            win++;
        }
    
    }

    //Ending message
    console.log("You won " + win + "/5 times.")
}

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];

    //Pick a random number to decide what the computer plays
    let random = Math.floor(Math.random() * choices.length);
    console.log("Random number = " + random);
    console.log("Random choice = " +choices[random]);

    return choices[random];
}

function playRound(playerSelection, computerSelection) {

    //Determine the winner. Also looks out for ties and if the user inputs anything other than a valid option
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "Tie! Try again."
    }else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You lose! Paper beats rocks."
    }else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You win! Rock beats scissors."
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You win! Paper beats rock."
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You lose! Scissors beats paper."
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You lose! Rock beats scissors."
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You win! Scissors beats paper."
    } else {
        return "That's not an option."
    }

}
