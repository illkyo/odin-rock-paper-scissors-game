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

// whole game logic
function playGame(humanChoice, computerChoice) {

  // score trackers
  let humanScore = 0;
  let computerScore = 0;
  const outcome = document.querySelector('.outcome');
  const score = document.querySelector('.score');

  // rounds played
  let roundCounter = 1;
  const roundNum = document.querySelector('.round');

  // single round logic, takes in the functions that return user choice and computer choice
  function playRound(humanChoice, computerChoice, outcome, score) {

    // how this function runs depends on the choices
    if (humanChoice == 'EXIT') { // if user chooses to exit
      return humanChoice;
    } else if (humanChoice == computerChoice) { // if both choices are the same it's a draw
      // score unchanged
      outcome.textContent = "Draw!";
      score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    } else if (humanChoice == 'Rock') { // condition if user chooses rock
        if (computerChoice == 'Paper') {
          // condition if user loses, computer wins
          // decrement human score
          // increment computer score
          outcome.textContent = "Rock gets covered up by Paper! You lose a point.";
          score.textContent = `Human: ${(humanScore != 0) ? --humanScore : humanScore} Computer: ${++computerScore}`;
        } else {
          // condition if user wins, computer loses
          // increment human score
          // decrement computer score
          outcome.textContent = "Rock crushes Scissors! You win a point.";
          score.textContent = `Human: ${++humanScore} Computer: ${(computerScore != 0) ? --computerScore : computerScore}`;
        }
    } else if (humanChoice == 'Paper') { // condition if user chooses paper
        if (computerChoice == 'Scissors') {
          // condition if user loses, computer wins
          // decrement human score
          // increment computer score
          outcome.textContent = "Paper gets cut by Scissors! You lose a point.";
          score.textContent = `Human: ${(humanScore != 0) ? --humanScore : humanScore} Computer: ${++computerScore}`;
        } else {
          // condition if user wins, computer loses
          // increment human score
          // decrement computer score
          outcome.textContent = "Paper covers up Rock! You win a point.";
          score.textContent = `Human: ${++humanScore} Computer: ${(computerScore != 0) ? --computerScore : computerScore}`;
        }
    } else { // otherwise it will be scissors
        if (computerChoice == 'Rock'){
          // condition if user loses, computer wins
          // decrement human score
          // increment computer score
          outcome.textContent = "Scissors gets crushed by Rock! You lose a point.";
          score.textContent = `Human: ${(humanScore != 0) ? --humanScore : humanScore} Computer: ${++computerScore}`;
        } else {
          // condition if user wins, computer loses
          // increment human score
          // decrement computer score
          outcome.textContent = "Scissors cuts up Paper! You win a point.";
          score.textContent = `Human: ${++humanScore} Computer: ${(computerScore != 0) ? --computerScore : computerScore}`;
        }
    }
  }
  
  roundNum.textContent = `ROUND ${roundCounter++}`;
  playRound(humanChoice, computerChoice, outcome, score);

  // declaring the winner by comparing scores
  (humanScore == computerScore) ? outcome.textContent = "It's a Draw. Try to win next time." :
  (humanScore > computerScore) ? outcome.textContent = "You win the game! Congratulations." : outcome.textContent = "Computer wins the game! Try again.";

}

const btnGroup = document.querySelector('.btn-group');

btnGroup.addEventListener('click', (event) => {
  let humanChoice;

  switch(event.target.id) {
      case 'rock':
          humanChoice = 'Rock'
          break
      case 'paper':
          humanChoice = 'Paper'
          break
      case 'scissors':
          humanChoice = 'Scissors'
          break
  }

  playGame(humanChoice, getComputerChoice());

});