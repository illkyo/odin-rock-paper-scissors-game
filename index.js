console.log("This is a test");

// computer logic
// create a function
function getComputerChoice() {

  // generate random number between 0, 1, 2 and store in variable
  const randomNum =  Math.floor(Math.random() * 3);

  // random number decides the computer's play and stores the choice in a variable
  let computerChoice;

  // 0 denotes 'rock'
  // 1 denotes 'paper'
  // 2 denotes 'scissors'
  switch(randomNum) {
    case 0:
      computerChoice = 'Rock';
      break
    case 1:
      computerChoice = 'Paper';
      break
    case 2:
      computerChoice = 'Scissors';
      break
  }

  // return the variable containing choice
  return computerChoice;

}

// user logic
// create a function
function getHumanChoice() {

  // create a variable storing user input
  let promptInput;
  // create a variable that translates it into rock, paper or scissors
  let humanChoice;

  // keep asking user until their input evaluates to rock, paper or scissors
  while (humanChoice === undefined) {
    // ask user to input a value of either 0, 1 or 2
    promptInput = prompt("Rock = 0, Paper = 1, Scissors = 2", "");

    // user input conversion
    // 0 denotes 'rock'
    // 1 denotes 'paper'
    // 2 denotes 'scissors'
    // if cancel is clicked in prompt window game is exited
    switch(promptInput) {
      case '0':
        humanChoice = 'Rock';
        break
      case '1':
        humanChoice = 'Paper';
        break
      case '2':
        humanChoice = 'Scissors';
        break
      case null:
        humanChoice = 'EXIT'
        break
      default:
        humanChoice = undefined;
        alert("Only values 0, 1 or 2 are accepted. Please enter either 0, 1 or 2");
        break
    }
  }

  // return the variable containing choice
  return humanChoice;
}

// score tracker
let humanScore = 0;
let computerScore = 0;

// single round logic, takes in the functions that return user choice and computer choice
function playRound(humanChoice, computerChoice) {

  // how this function runs depends on the choices
  if (humanChoice == 'EXIT') { // if user chooses to exit 
    console.log("Game Exited."); // console outputs exit message
    alert("You have exited the game.");
  } else if (humanChoice == computerChoice) { // if both choices are the same it's a draw
    console.log("Draw!");
    // score unchanged
  } else if (humanChoice == 'Rock') { // condition if user chooses rock
      if (computerChoice == 'Paper') {
        console.log("Rock gets covered up by Paper! You lose a point."); // condition if user loses, computer wins
        // decrement human score
        // increment computer score
      } else {
        console.log("Rock crushes Scissors! You win a point."); // condition if user wins, computer loses
        // increment human score
        // decrement computer score
      }
  } else if (humanChoice == 'Paper') { // condition if user chooses paper
      if (computerChoice == 'Scissors') {
        console.log("Paper gets cut by Scissors! You lose a point."); // condition if user loses, computer wins
        // decrement human score
        // increment computer score
      } else {
        console.log("Paper covers up Rock! You win a point."); // condition if user wins, computer loses
        // increment human score
        // decrement computer score
      }
  } else { // otherwise it will be scissors
      if (computerChoice == 'Rock'){
        console.log("Scissors gets crushed by Rock! You lose a point."); // condition if user loses, computer wins
        // decrement human score
        // increment computer score
      } else {
        console.log("Scissors cuts up Paper! You win a point."); // condition if user wins, computer loses
        // increment human score
        // decrement computer score
      }
  }
}

playRound(getHumanChoice(), getComputerChoice());


// whole game logic