// Beginning of JS code.

// add in variables

var random = []
var score = []
var wins = 0
var losses = 0
var crystals = []

// Start by assigning a math floor function to all variables
$(document).ready (function() {
    
}


//does the score win or lose the game
function winorlose() {
    if (score === random) {
    wins ++;
    alert("You Won!");

} 
    else {
        if (score > random) {
        losses ++;
        alert("You Lost :(")
    }

}



}


// making the gems clickable when user clicks on them
$(".button").on("click", function () {


}



// game reset
function reset ()   {



}

//end of script