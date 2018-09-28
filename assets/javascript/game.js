
$(document).ready(function () {
    //variables to hold game values
    var wins = 0;
    var losses = 0;
    var myNumber = 0;

    $('#wins-counter').text(wins);
    $('#losses-counter').text(losses);


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

            $("#my-number").val("myNumber");
        })

        var gem2 = Math.floor(Math.random() * 11 + 1);
        $("#gem2-btn").on("click", function () {
            console.log(gem2);
        })

        var gem3 = Math.floor(Math.random() * 11 + 1);
        $("#gem3-btn").on("click", function () {
            console.log(gem3);
        })


        var gem4 = Math.floor(Math.random() * 11 + 1);
        $("#gem4-btn").on("click", function () {
            console.log(gem4);
        })

        //game logic
        $(".gem").on("click", function () {
            // parseInt(($(this).attr(“data - gemvalue”));
            console.log(gemValue);
            console.log(myNumber);
            myNumber += gemValue;



            //compare the two numbers
            //if the number is equal to the target number increase wins
            if (myNumber === targetNumber) {
                wins++;
                //if the number is greater than the target number losses
            }
            else if (myNumber >= targetNumber) {
                losses++;
            }

        })
    }
    startGame();
});

//Reset Game

// function resetGame {

// }

