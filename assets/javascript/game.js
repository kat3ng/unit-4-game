
$(document).ready(function () {
    //variables to hold game values
    var wins = 0;
    var losses = 0;
    var myNumber = 0;
    var targetNumber = 0;

    $('#wins-counter').text(wins);
    $('#losses-counter').text(losses);


    //wrapping a startGame option aroud functions -- call start game

    function startGame() {

        //create randomly generated number
        targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#target-number").text(targetNumber);
        console.log(targetNumber);

        // assign random number to crystals
        var gem1 = Math.floor(Math.random() * 11 + 1);
        $("#gem1-btn").on("click", function () {
            console.log(gem1);
            myNumber = myNumber + gem1;
            console.log("newNumber = " + myNumber);
            $("#my-number").text(myNumber);
            if (myNumber === targetNumber) {
                wins++;
                //if the number is greater than the target number losses
            }
            else if (myNumber >= targetNumber) {
                losses++;
            }

        })
    }

    var gem2 = Math.floor(Math.random() * 11 + 1);
    $("#gem2-btn").on("click", function () {
        console.log(gem2);
        myNumber = myNumber + gem2;
        console.log("newNumber = " + myNumber);
        $("#my-number").text(myNumber);
        if (myNumber === targetNumber) {
            wins++;
            //if the number is greater than the target number losses
        }
        else if (myNumber >= targetNumber) {
            losses++;
        }

    })


    var gem3 = Math.floor(Math.random() * 11 + 1);
    $("#gem3-btn").on("click", function () {
        console.log(gem3);
        myNumber = myNumber + gem3;
        console.log("newNumber = " + myNumber);
        $("#my-number").text(myNumber);
        if (myNumber === targetNumber) {
            wins++;
            //if the number is greater than the target number losses
        }
        else if (myNumber >= targetNumber) {
            losses++;
        }

    })


    var gem4 = Math.floor(Math.random() * 11 + 1);
    $("#gem4-btn").on("click", function () {
        console.log(gem4);
        myNumber = myNumber + gem4;
        console.log("newNumber = " + myNumber);
        $("#my-number").text(myNumber);
        if (myNumber === targetNumber) {
            wins++;
            //if the number is greater than the target number losses
        }
        else if (myNumber >= targetNumber) {
            losses++;
        }
    })
    startGame();
});

//Reset Game

// function resetGame {

// }

