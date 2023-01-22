let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate new targer number
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// Determines which guess is closes to the target number
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanTarget = Math.abs(targetGuess - humanGuess);
    const computerTarget = Math.abs(targetGuess -computerGuess);
    return humanTarget <= computerTarget;
};

// Increase winners score correctly after each round
const updateScore = winner => {
    if(winner === 'human') {
       humanScore ++;
    } else if (winner === 'computer') {
       computerScore ++;
    } else {
        return 'Error 101'
    }
};

// Updates the round number after each round
const advanceRound = () => {
    currentRoundNumber ++;
};