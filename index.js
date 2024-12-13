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
  console.log(getComputerChoice());

// user logic

// score tracker 

// single round logic

// whole game logic