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

// whole game logic
function playGame() {

  // score tracker
  let humanScore = 0;
  let computerScore = 0;

  // rounds played
  let roundCounter = 1;

  // output message to console
  let result;

  // single round logic, takes in the functions that return user choice and computer choice
  function playRound(humanChoice, computerChoice) {

    // how this function runs depends on the choices
    if (humanChoice == 'EXIT') { // if user chooses to exit
      return humanChoice;
    } else if (humanChoice == computerChoice) { // if both choices are the same it's a draw
      return (`Draw!\n\nScore\nHuman: ${humanScore}\nComputer: ${computerScore}`);
      // score unchanged
    } else if (humanChoice == 'Rock') { // condition if user chooses rock
        if (computerChoice == 'Paper') {
          // condition if user loses, computer wins
          // decrement human score
          // increment computer score
          return (`Rock gets covered up by Paper! You lose a point.\n\nScore\nHuman: ${(humanScore != 0) ? --humanScore : humanScore}\nComputer: ${++computerScore}`);
        } else {
          // condition if user wins, computer loses
          // increment human score
          // decrement computer score
          return (`Rock crushes Scissors! You win a point.\n\nScore\nHuman: ${++humanScore}\nComputer: ${(computerScore != 0) ? --computerScore : computerScore}`);
        }
    } else if (humanChoice == 'Paper') { // condition if user chooses paper
        if (computerChoice == 'Scissors') {
          // condition if user loses, computer wins
          // decrement human score
          // increment computer score
          return (`Paper gets cut by Scissors! You lose a point.\n\nScore\nHuman: ${(humanScore != 0) ? --humanScore : humanScore}\nComputer: ${++computerScore}`);
        } else {
          // condition if user wins, computer loses
          // increment human score
          // decrement computer score
          return (`Paper covers up Rock! You win a point.\n\nScore\nHuman: ${++humanScore}\nComputer: ${(computerScore != 0) ? --computerScore : computerScore}`);
        }
    } else { // otherwise it will be scissors
        if (computerChoice == 'Rock'){
          // condition if user loses, computer wins
          // decrement human score
          // increment computer score
          return (`Scissors gets crushed by Rock! You lose a point.\n\nScore\nHuman: ${(humanScore != 0) ? --humanScore : humanScore}\nComputer: ${++computerScore}`);
        } else {
          // condition if user wins, computer loses
          // increment human score
          // decrement computer score
          return (`Scissors cuts up Paper! You win a point.\n\nScore\nHuman: ${++humanScore}\nComputer: ${(computerScore != 0) ? --computerScore : computerScore}`);
        }
    }
  }

  // play game for 5 rounds
  while (roundCounter < 6) {
    console.log(`ROUND ${roundCounter++}`); // show current round number and increments after
    result = playRound(getHumanChoice(), getComputerChoice()); // returns a string
    if (result == 'EXIT') { 
      console.log(`Game Exited. \nScore\nHuman: ${humanScore}\nComputer: ${computerScore}`);
      alert("You have exited the game.");
      break // if user chooses to exit (cancels the prompt) the game is exited and program stops
    } else {
      console.log(result); // result contains a string that is outputed to console
    }
  }

  // declaring the winner by comparing scores
  (humanScore == computerScore) ? console.log("It's a Draw. Try to win next time.") :
  (humanScore > computerScore) ? console.log("You win the game! Congratulations.") : console.log("Computer wins the game! Try again.");

}

playGame();