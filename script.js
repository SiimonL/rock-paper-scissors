
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
        return 1;
    } else if (computerScore.textContent == '5') {
        return 2;
    } else {
        return 0;
    } 
}

// 0: tie
// 1: player won
// 2: computer won
function displayRound(winner) {
    let player = 'tie';
    let computer = 'tie';

    if (winner === 1) {
        playerScore.textContent = parseInt(playerScore.textContent)+1;
        player = 'winner';
        computer = 'loser';
    } else if (winner === 2) {
        computerScore.textContent = parseInt(computerScore.textContent)+1;
        player = 'loser';
        computer = 'winner';
    }
    playerArea.classList.toggle(player);
    computerArea.classList.toggle(computer);

    setTimeout(() => {
        playerArea.classList.toggle(player);
        computerArea.classList.toggle(computer);
        playerChoice.textContent = '-';
        computerChoice.textContent = '-';
    }, 1500);
    
}

function playRound(playerSelection) {
    buttons.forEach(button => button.disabled = true);
    
    let compChoice = getComputerChoice();
    var winner = getWinner(playerSelection, compChoice);

    playerChoice.textContent = playerSelection[0].toUpperCase() + playerSelection.substring(1);
    
    // 500ms delay between entering your choice and reavealing the computer's choice
    setTimeout(() => {
        computerChoice.textContent = compChoice;
        
        if (winner === 'player') {
            console.log('You won!');
            displayRound(1);
            
        } else if (winner === 'computer') {
            console.log('You lost!');
            displayRound(2);

        } else {
            console.log('Tie!');
            displayRound(0);
        }

        let gameStatus = getGameStatus();

        if (gameStatus == 1) {
            endGame('You Win!');
            playAgain.hidden = false;
        } else if (gameStatus == 2) {
            endGame('Computer Wins!');
            playAgain.hidden = false;
        } else {
            setTimeout(() => {
                buttons.forEach(button => button.disabled = false);
            }, 1500);
        }
    }, 500);
}


function toClipboard(text) {
    navigator.clipboard.writeText(text);
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

document.querySelector('.discord').addEventListener('click', () => {
    toClipboard('LendKaru#5029')
    document.querySelector('.tooltip').classList.add('tooltip-show');
});

document.querySelector('.discord').addEventListener('mouseout', () => {
    document.querySelector('.tooltip').classList.remove('tooltip-show');
});
