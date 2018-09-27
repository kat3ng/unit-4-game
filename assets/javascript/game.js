
$(document).ready(function () {
    //variables to hold game values
    var wins = 0;
    var losses = 0;
    var myNumber = 0;

    var gem1 = 0;
    var gem2 = 0;
    var gem3 = 0;
    var gem4 = 0;

    //wrapping a startGame option aroud functions -- call start game

    function startGame() {
        //create randomly generated number
        var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#random-number").text(randomNumber);
        console.log(randomNumber);

        // assign random number to crystals
        var gemRandomValues = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
        ];
        //increment upon button clicks
        var gemValue = gemRandomValues[Math.round(gemRandomValues.length * Math.random())];

        $("#gem1-btn").on("click", function () {
            gem1 += gemValue;
            console.log(gemValue);
        })
        $("#gem2-btn").on("click", function () {
            myNumber += gemValue;
            console.log(gemValue);
        })

        $("#gem3-btn").on("click", function () {
            myNumber += gemValue;
            console.log(gemValue);
        })

        $("#gem4-btn").on("click", function () {
            myNumber += gemValue;
            console.log(gemValue);
        })
        //Game Logic
        if (myNumber === randomNumber) {
            alert("You win!");
        } else if (myNumber >= randomNumber) {
            alert("You lose!")
        }
    }
    startGame();
});







//Game Logic

