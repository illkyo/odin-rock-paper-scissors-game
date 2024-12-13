console.log("This is a test");

// computer logic
  // create a function
  function getComputerChoice() {

    // generate random number between 0, 1, 2 and store in variable
    let randomNum =  Math.floor(Math.random() * 3);

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
  // output resulting choice to console
  console.log(`Computer chooses ${getComputerChoice()}!`);

// user logic
  // create a function
  function getHumanChoice() {

    // create a variable storing user input
    let promptInput;
    // create a variable that translates it into rock, paper or scissors
    let userChoice;

    // keep asking user until their input evaluates to rock, paper or scissors
    while (userChoice === undefined) {
      // ask user to input a value of either 0, 1 or 2
      promptInput = prompt("Rock = 0, Paper = 1, Scissors = 2", "");

      // user input conversion
      // 0 denotes 'rock'
      // 1 denotes 'paper'
      // 2 denotes 'scissors'
      // if cancel is clicked in prompt window game is exited
      switch(promptInput) {
        case '0':
          userChoice = 'Rock';
          break
        case '1':
          userChoice = 'Paper';
          break
        case '2':
          userChoice = 'Scissors';
          break
        case null:
          userChoice = 'EXIT'
          alert("Game Exited.")
          break
        default:
          userChoice = undefined;
          alert("Only values 0, 1 or 2 are accepted. Please enter either 0, 1 or 2");
          break
      }
    }

    // return the variable containing choice
    return userChoice;
  }

  // output resulting choice to console
  console.log(`Human chooses ${getHumanChoice()}!`);

// score tracker 

// single round logic

// whole game logic