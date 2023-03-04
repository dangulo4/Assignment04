const computerChoice = () => {
  let compChoice = Math.floor(Math.random() * 3) + 1;
  if (compChoice === 1) {
    compChoice = 'Rock';
  } else if (compChoice === 2) {
    compChoice = 'Paper';
  } else if (compChoice === 3) {
    compChoice = 'Scissors';
  }
  return compChoice;
};

const getChoice = () => {
  let choice = String(prompt('Choose r, p, s(Rock, Papper, Scissors)')).toLowerCase();
  if (choice === 'r') {
    choice = 'Rock';
  } else if (choice === 'p') {
    choice = 'Paper';
  } else if (choice === 's') {
    choice = 'Scissors';
  } else {
    alert('You have entered an invalid choice, please try again.');
  }
  return choice;
};

const getWinner = () => {
  let compChoice = computerChoice();
  let userChoice = getChoice();
  let winner = '';
  // CHECK CONDITIONAL
  if (compChoice == 'Rock' && userChoice == 'Scissors') {
    winner = 'Computer';
  } else if (compChoice == 'Scissors' && userChoice == 'Paper') {
    winner = 'Computer';
  } else if (compChoice == 'Papper' && userChoice == 'Rock') {
    winner = 'Computer';
  } else if (compChoice == userChoice) {
    winner = 'Tie';
  } else {
    winner = 'User';
  }
  console.log(`Computer selected: ${compChoice}`); // CHECK COMPUTER CHOICE
  console.log(`User selected: ${userChoice}`); // CHECK USER CHOICE
  console.log(`The winner is: ${winner}`); // CONSOLE LOG WINNER
};

const init = () => {
  getWinner();
};

init();
