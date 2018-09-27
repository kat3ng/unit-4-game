
$(document).ready(function () {
    //variables to hold game values
    var wins = 0;
    var losses = 0;
    var myNumber = 0;


    //wrapping a startGame option aroud functions -- call start game

    function startGame() {
        //create randomly generated number
        var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#target-number").text(targetNumber);
        console.log(targetNumber);

        // assign random number to crystals
        var gem1 = Math.floor(Math.random() * 11 + 1);
        $("#gem1-btn").on("click", function () {
            console.log(gem1);
            //add crystal value to myNumber
            gem1Value = parseInt(gem1);
            gem1Value += myNumber;
        })

        var gem2 = Math.floor(Math.random() * 11 + 1); console.log(gem2);
        $("#gem2-btn").on("click", function () {
            console.log(gem2);
            //add crystal value to myNumber
            gem1Value = parseInt(gem2);
            gem1Value += myNumber;
        })

        var gem3 = Math.floor(Math.random() * 11 + 1); console.log(gem3);
        $("#gem3-btn").on("click", function () {
            console.log(gem3);
            //add crystal value to myNumber
            gem1Value = parseInt(gem3);
            gem1Value += myNumber;
        })

        var gem4 = Math.floor(Math.random() * 11 + 1); console.log(gem4);
        $("#gem4-btn").on("click", function () {
            console.log(gem4);
            //add crystal value to myNumber
            gem1Value = parseInt(gem4);
            gem1Value += myNumber;
        })

        $("#myNumber").text(myNumber);
    }
    startGame();
}
);

//Game Logic

