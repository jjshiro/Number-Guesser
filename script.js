let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Generate the target value
const generateTarget = () => Math.round(Math.random()*10);

//Calculate the distance between the human & computer guesses & the target value
const getAbsoluteDistance = (n1, n2) => Math.abs(n2-n1);

const compareGuesses = (human, computer, target) => {
  let humanDiff = getAbsoluteDistance(human, target);
  let computerDiff = getAbsoluteDistance(computer, target);
  if (humanDiff <= computerDiff) {
    return true;
  } else {
    return false;
  }
}

//Update the correct score 
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else { 
    computerScore++;
  }
}

//Increase the round number 
const advanceRound = () => currentRoundNumber++;

