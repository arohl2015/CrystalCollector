// Beginning of JS code.

// wrote in all vars to remember all the <h> tags entered in the html to track in logic.

var random = 0
var score = 0
var wins = 0
var losses = 0
var crystals = 0

// Start by getting the game to run by calling on the start game function using document.ready
$(document).ready(function () {
    startGame()
})

// Create the function to start the game and call all the random numbers used. 1-12 for the gems
// 19-120 for the match score. since it's JQuery, need to call attributes and not use any = signs
function startGame() {
    var randnum1 = Math.floor(Math.random() * 11) + 1;
    $("#button-1").attr("value", randnum1);
    //used console.log after each button to ensure logic was working in the console
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
    random = Math.floor(Math.random() * 100) + 20;
    $("#random").text("Match Number:" + random);
    console.log(randnum1, random);
}

//does the score win or lose the game? only need if/else for the === and >
// making the gems clickable when user clicks on them
$("button").on("click", function (event) {
    event.preventDefault();
    var gemValue = $(this).attr("value");
    score += parseInt(gemValue);
    console.log(score);
    $("#score").text("Your Total Score:"  + score);
    if (score === random) {
        wins++;
        alert("You Won!");
        $("#wins").text("Wins:"  + wins);
        $("#score").text("Your Total Score:"  + score);
        reset();
    }
    else if (score > random) {
        losses++;
        alert("You Lost :(")
        $("#losses").text("Losses:" + losses);
        reset();
    }
})

// game reset
function reset() {
    alert("Let's Collect More Crystals!");
    score = 0;
    $("#score").text("Your Total Score:" + score);
    startGame();
}

//end of script