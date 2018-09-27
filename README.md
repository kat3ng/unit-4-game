
# unit-4-game

This game was completed as a week 4 homework assignment in my bootcamp. We were made to adhere to the following guidelines:

# jQuery Assignment

### Overview

In this assignment, we were required to create another fun and interactive game for web browsers. This time, our app was required to dynamically update our HTML pages with the jQuery library.


I chose the CrystalsCollector game, which was the recommended option.

### CrystalsCollector Game

![Crystal Collector](Images/1-CrystalCollector.jpg)

1. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

2. Here's how the app works:

   * Four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * The game hides this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. 
     * Also, all the crystals will have four new hidden values. 
     * Of course, the user's score (and score counter) will reset to zero.

  
##### Design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.





