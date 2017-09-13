//NIM- The Game
//step 1: define the state - what your program needs to know
//    -number of dots
//    -who's turn it is
//    -how many players (can be more than 2)
//    -how many dots you can pick up
var numberOfDots = 16;
var isPlayerOnesTurn = true;

//step 2: Actions - what your program needs to do (these are fncs that mess w/ the state)
//    -print a bunch of dots
//    -remove dots
//    -change a player's turn
//    -print the board
//    -check for a winner
//

function printBoard () {
  //should print numberOfDots *'s to the screen
  var star = "*";
  console.log(star.repeat(numberOfDots));
}

function gameIsInProgress() {
  //if the number of dots is more than 0, then the game is still in PROGRESS

    if (numberOfDots > 0){
      return true;
    } else {
      return false;
    }
}
//return numberOfDots > 0;  <-- if else can be summarized here   ">" will turn into formula

function promptUserForDots() {
  //we get input from a user by doing var input = prompt ()
  //we can turn stringd into integers by using the parseInt() function
  //we'll need to make sure that the user enters a number
  //        that number needs to be 1, 2, 3,
  //keep asking for input until they finnally enter a number

  var userInput = parseInt(prompt("Enter a number between 1 and 3."));
    // if (userInput <= 3 userInput >0) {
    //   return userInput;
    // } else {
    //
    // }

    while (userInput !=1 && userInput !=2 && userInput !=3)  { //we should only enter the loop if they didn't enter a valid number
    userInput= parseInt(prompt("Enter a number between 1 and 3"))
    }

  return userInput; //shuld return a number representing how many dots to remove
}

function removeDots(dotsToRemove) {
  //need to remove dotsToRemove from the number of dots
  numberOfDots -= dotsToRemove; // same as numberOfdots = numberOfDots - dotsToRemove
}

function switchPlayers() {
   isPlayerOnesTurn = !isPlayerOnesTurn;
}


//step 3: kicking everything off
//    X Show the board right away
//    X prompt the user for how many dots they want to removeDots
//    X Actually remove those dots
//    X print new result
//    X Switch players
//    X Check for winner
//    -if no winner, prompt for next player's dots
//    -keep looping above ^^^ until someone wins



printBoard(); //show the board right away

while (gameIsInProgress() ) {   //check for winner, needs to return true if the game is still in progress
                                //false if someone has Won  SO WHILE GAME IS IN PROGRESS< keep looping


                                var dotsToRemove = promptUserForDots(); //remove dots needs var dotsToRemove
                                removeDots(dotsToRemove); //so we just add the variable into removeDots
                                printBoard(); //printing new result
                                switchPlayers();
}



//we need to alert either "player1 wins" or "player 2 wins"
if (isPlayerOnesTurn) {
  alert('Game Over! Player 2 wins');
} else {
    alert('Game Over! Player 1 wins');
}
