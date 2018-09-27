
$(document).ready(function () {
    //variables to hold game values
    var wins = 0;
    var losses = 0;
    var myNumber = 0;

    $('#wins-counter').text(wins);
    $('#losses-counter').text(losses);
    $("#my-number").text(myNumber);

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
            var gem1Value = parseInt(gem1);
            myNumber += gem1Value;
        })

        var gem2 = Math.floor(Math.random() * 11 + 1);
        $("#gem2-btn").on("click", function () {
            console.log(gem2);
            //add crystal value to myNumber
            var gem2Value = parseInt(gem2);
            myNumber += gem2Value;
        })

        var gem3 = Math.floor(Math.random() * 11 + 1);
        $("#gem3-btn").on("click", function () {
            console.log(gem3);
            //add crystal value to myNumber
            var gem3Value = parseInt(gem3);
            myNumber += gem3Value;
        })

        var gem4 = Math.floor(Math.random() * 11 + 1);
        $("#gem4-btn").on("click", function () {
            console.log(gem4);
            //add crystal value to myNumber
            var gem4Value = parseInt(gem4);
            myNumber += gem4Value;
        })

        $("#myNumber").text(myNumber);
    }
    startGame();
}
);

//Game Logic

