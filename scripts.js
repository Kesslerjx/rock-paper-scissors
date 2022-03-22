
//Call game function to run
//game();

let userScore = 0;
let compScore = 0;

//Get container
const container = document.querySelector('#container');

//Get all buttons
const buttons = document.querySelectorAll('button');

//Get results div
const results = document.querySelector('#results');

//Get user and comp score paragraph
const userScoreParagraph = document.querySelector('#user-score');
const compScoreParagraph = document.querySelector('#comp-score');

//Add event listener to each button
buttons.forEach( button => button.addEventListener('click', userPlay));

//Runs everytime a user presses a button
function userPlay(event) {

    const playerSelection = this.textContent; //Get what the user played
    const computerSelection = computerPlay(); //Have the computer choose an option
    const result = playRound(playerSelection, computerSelection); //Get the result

    //Create p element for the result and append to results div
    const p = document.createElement('p');
    p.textContent = result;
    results.prepend(p); //Add to the top of the results to show the most recent first

    determinePoints(result);

    determineWinner();

}


//Determines who gets a point based on the result
function determinePoints(result) {
    if (result.includes('win')) {
        userScore += 1;
        userScoreParagraph.textContent = "User Score: " + userScore;
    } else if (result.includes('lose')) {
        compScore += 1;
        compScoreParagraph.textContent = "Comp Score: " + compScore;
    }
}

//Determines who the winner is
function determineWinner() {
    if (userScore == 5 || compScore == 5) {
        //Disable buttons
        buttons.forEach(button => button.disabled = true);

        //Announce the winner
        if (userScore == 5) {
            userScoreParagraph.textContent += " Winner!";
        } else {
            compScoreParagraph.textContent += " Winner!";
        }

        //Create button to try again
        const tryAgain = document.createElement('button');
        tryAgain.textContent = "Try again";
        tryAgain.addEventListener('click', function(event) {
            //Reset scores
            userScore = 0;
            compScore = 0;
            userScoreParagraph.textContent = "User Score: 0";
            compScoreParagraph.textContent = "Comp Score: 0";

            //Clear results
            while(results.firstChild){
                results.lastChild.remove();
            }

            //Enable buttons
            buttons.forEach(button => button.disabled = false);

            //Remove self from container
            container.removeChild(tryAgain);
        });
        container.append(tryAgain); //Add to container

    }
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
