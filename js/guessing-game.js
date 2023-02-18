/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/
const errorMessage = document.getElementById("errorMessage");
const inputBox = document.getElementById("inputBox");
const guessButton = document.getElementById("guessButton");
const guess1 = document.getElementsByClassName("guessNumber1");
const guess2 = document.getElementsByClassName("guessNumber2");
const guess3 = document.getElementsByClassName("guessNumber3");
const guess4 = document.getElementsByClassName("guessNumber4");
const guess5 = document.getElementsByClassName("guessNumber5");
const generateWinningNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};
const newGame = () => {
  return {
    playersGuess: null,
    pastGuesses: [],
    winningNumber: generateWinningNumber(),
    difference: function () {
      return Math.abs(this.playersGuess - this.winningNumber);
    },
    isLower: function () {
      if (this.playersGuess < this.winningNumber) {
        return true;
      } else {
        return false;
      }
    },
    checkGuess: (num) => {
      if (num === this.winningNumber) {
        return "You Win";
      }
      if (
        this.pastGuesses.indexOf(num) === -1 &&
        this.pastGuesses.length !== 0
      ) {
        this.pastGuesses.push(num);
      } else {
        return "You have already guessed that number.";
      }
    },
    playersGuessSubmission: function (num) {
      if (typeof num === "number" && num <= 100 && num >= 1) {
        this.playersGuess = num;
        return this.checkGuess(this.playersGuess);
      } else {
        // errorMessage.innerText = "Not a valid number";
        throw "That is an invalid guess.";
      }
    },
  };
};
function shuffle(array) {
  let m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

const checkGuess = (obj) => {
  if ((obj.playersGuess = obj.winningNumber)) {
    return "You Win";
  }
};

// let game = newGame();
