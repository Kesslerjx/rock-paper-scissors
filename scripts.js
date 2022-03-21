
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];

    let random = Math.floor(Math.random() * choices.length);
    console.log("Random number = " + random);
    console.log("Random choice = " +choices[random]);

    return choices[random]
}