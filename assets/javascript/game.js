// Beginning of JS code.

// add in variables

var random = 0
var score = 0
var wins = 0
var losses = 0
var crystals = 0

// Start by assigning a math floor function to all variables
$(document).ready(function () {
    startGame()
})

function startGame() {
    var randnum1 = Math.floor(Math.random() * 11) + 1;
    $("#button-1").attr("value", randnum1);
    console.log(randnum1);
    var randnum1 = Math.floor(Math.random() * 11) + 1;
    $("#button-2").attr("value", randnum1);
    console.log(randnum1);
    var randnum1 = Math.floor(Math.random() * 11) + 1;
    $("#button-3").attr("value", randnum1);
    console.log(randnum1);
    var randnum1 = Math.floor(Math.random() * 11) + 1;
    $("#button-4").attr("value", randnum1);
    console.log(randnum1);
    random = Math.floor(Math.random() * 100) + 19;
    $("#random").text("Match Number:" + random);
    console.log(randnum1, random);
}




//does the score win or lose the game
// making the gems clickable when user clicks on them
$("button").on("click", function (event) {
    event.preventDefault();
    var gemValue = $(this).attr("value");
    score += parseInt(gemValue);
    console.log(score);
    $("#score").text("Your Total Score: " + score);
    if (score === random) {
        wins++;
        alert("You Won!");
        $("#wins").text("Wins" + wins);
        $("#score").text("Your Total Score: " + score);
        reset();
    }
    else if (score > random) {
        losses++;
        alert("You Lost :(")
        $("#losses").text("Losses" + losses);
        reset();
    }
})

// game reset
function reset() {
    alert("Another Game?");
    score = 0;
    $("#score").text("Your Total Score: " + score);
    startGame();
}

//end of script