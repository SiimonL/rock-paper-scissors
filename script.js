
// document.querySelector('.player').style.width = document.querySelector('.computer').style.width


const buttons = document.querySelectorAll('.selection');
const playAgain = document.querySelector('.play-again');


const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');

const playerArea = document.querySelector('.choices .player');
const computerArea = document.querySelector('.choices .computer');

const resultField = document.querySelector('.results');

function getComputerChoice() {

    const OPTIONS = ['Rock', 'Paper', 'Scissors'];

    return OPTIONS[Math.floor(Math.random()*3)];
}

function getWinner(playerChoice, computerChoice) {

    if (playerChoice.toLowerCase() === 'paper') {
        if (computerChoice.toLowerCase() === 'rock') {
            return 'player';
        } else if (computerChoice.toLowerCase() === 'scissors')  {
            return 'computer';
        } else { // paper
            return 'tie';
        }
    } else if (playerChoice.toLowerCase() === 'rock') {
        if (computerChoice.toLowerCase() === 'scissors') {
            return 'player';
        } else if (computerChoice.toLowerCase() === 'paper')  {
            return 'computer';
        } else { // rock
            return 'tie';
        }
    } else { // scissors
        if (computerChoice.toLowerCase() === 'paper') {
            return 'player';
        } else if (computerChoice.toLowerCase() === 'rock')  {
            return 'computer';
        } else { // scissors
            return 'tie';
        }
    }
}

function endGame(message) {
    resultField.textContent = message;
    document.querySelector('.play-again').hidden = false;
}

// Returns 0 if game is still going
// 1 if player won
// 2 if computer won
function getGameStatus() {
    if (playerScore.textContent == '5') {
        playAgain.hidden = false;
        return 1;
    } else if (computerScore.textContent == '5') {
        playAgain.hidden = false;
        return 2;
    } else {
        return 0;
    } 
}


function playRound(playerSelection) {
    buttons.forEach(button => button.disabled = true);
    
    let compChoice = getComputerChoice();
    var winner = getWinner(playerSelection, compChoice);

    playerChoice.textContent = playerSelection[0].toUpperCase() + playerSelection.substring(1);
    
    computerChoice.textContent = compChoice;

    if (winner === 'player') {
        console.log('You won!');
        playerArea.classList.toggle('winner');
        computerArea.classList.toggle('loser');
        setTimeout(() => {
            playerArea.classList.toggle('winner');
            computerArea.classList.toggle('loser');
        }, 1500);
        playerScore.textContent = parseInt(playerScore.textContent)+1;

    } else if (winner === 'computer') {
        console.log('You lost!');
        computerArea.classList.toggle('winner');
        playerArea.classList.toggle('loser');
        setTimeout(() => {
            computerArea.classList.toggle('winner');
            playerArea.classList.toggle('loser');
        }, 1500);
        computerScore.textContent = parseInt(computerScore.textContent)+1;

    } else {
        console.log('Tie!');

        playerArea.classList.toggle('tie');
        computerArea.classList.toggle('tie');
        setTimeout(() => {
            playerArea.classList.toggle('tie');
            computerArea.classList.toggle('tie');
        }, 1500);
    }

    let gameStatus = getGameStatus();

    if (gameStatus == 1) {
        endGame('You Win!');
    } else if (gameStatus == 2) {
        endGame('Computer Wins!');
    } else {
        setTimeout(() => {
            buttons.forEach(button => button.disabled = false);
        }, 1500);
    }
}


buttons.forEach(button => button.addEventListener('click', (e) => {
    let sel = e.target.id;
    playRound(sel);

}));

playAgain.addEventListener('click', (e) => {
    buttons.forEach(button => button.disabled = false);
    playAgain.hidden = true;
    playerScore.textContent = '0';
    computerScore.textContent = '0';
    resultField.textContent = '';
});
