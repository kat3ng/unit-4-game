
$(document).ready(function () {
    //variables to hold game values
    var wins = 0;
    var losses = 0;
    var targetNumber;
    var myNumber;
    var newNumber;



    //wrapping a startGame option aroud functions -- call start game

    function startGame() {
        var targetNumber = 0;
        var myNumber = 0;
        var wins = 0;
        var losses = 0;
        $('#wins-counter').text(wins);
        $('#losses-counter').text(losses);


        //create randomly generated number
        var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#target-number").text(targetNumber);
        console.log(targetNumber);

        // assign random number to crystals
        var gem1 = Math.floor(Math.random() * 11 + 1);
        $("#gem1-btn").on("click", function () {
            console.log("Gem 1 Value: " + gem1);
            myNumber = myNumber + gem1;
            // console.log("newNumber = " + myNumber);
            $("#my-number").text(myNumber);

            if (myNumber === targetNumber) {
                alert("You win!");
                wins++;
            }
            else if (myNumber > targetNumber) {
                alert("Looks like you're going to have to try again")
                losses++;
            }

        })


        var gem2 = Math.floor(Math.random() * 11 + 1);
        $("#gem2-btn").on("click", function () {
            console.log("Gem 2 Value: " + gem2);
            myNumber = myNumber + gem2;
            console.log("newNumber = " + myNumber);
            $("#my-number").text(myNumber);
            if (myNumber === targetNumber) {
                alert("You win!");
                wins++;
            }
            else if (myNumber > targetNumber) {
                alert("Looks like you're going to have to try again")
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
                alert("You win!");
                wins++;
            }
            else if (myNumber > targetNumber) {
                alert("Looks like you're going to have to try again")
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
                alert("You win!");
                wins++;
                startGame();
            }
            else if (myNumber >= targetNumber) {
                alert("Looks like you're going to have to try again!")
                losses++;
                startGame();
            }
        })
    }
    startGame();
    //reset function
    $("#start-btn").on("click", function () {
        startGame();
    })
});


// }

