
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var winSpan = document.getElementById("wins");
var losses = 0;
var lossesSpan = document.getElementById("losses");
var Left = 9;
var LeftSpan = document.getElementById("guessesLeft");
var guessesSoFar = [];
var guessesSoFarSpan = document.getElementById("guessesSoFar");

function incrementScoreWin() {
    wins++;
    winSpan.textContent = wins;
}
function incrementScoreLose() {
    losses++;
    lossesSpan.textContent = losses;
}

function oneLess() {
    Left--;
    LeftSpan.textContent = Left;
}



document.onkeyup = function () {

    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);

    var userGuess = event.key.toLowerCase();
    console.log(userGuess);



    if (userGuess === computerGuess) {
        incrementScoreWin();
        Left = 9;
        LeftSpan.textContent = 9;
        guessesSoFar = [];
        alert("You Win I was thinking " + computerGuess + " too.");

    }

    if (Left === 1) {
        incrementScoreLose();
        Left = 9;
        LeftSpan.textContent = 9;
        guessesSoFar = [];
        alert("You Lose because " + userGuess + " was your last guess and I was thinking " + computerGuess)

    }
    else if (userGuess !== computerGuess) {
        oneLess();
        guessesSoFar.push(userGuess + "");
        guessesSoFarSpan.textContent = guessesSoFar;

    }


}
