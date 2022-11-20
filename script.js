
function getComputerChoice() {

    const OPTIONS = ['Rock', 'Paper', 'Scissors'];

    return OPTIONS[Math.floor(Math.random()*3)];
}

function getPlayerChoice() {

    var chosen = prompt('Choose what to play (paper/rock/scissors): ').toLowerCase();

    if (['rock', 'paper', 'scissors'].includes(chosen)) {
        return chosen;
    } else {
        return null;
    }
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

function game() {
    var playerScore = 0;
    var computerScore = 0;

    for (var i = 0; i < 5; i++) {
        var winner = getWinner(getPlayerChoice(), getComputerChoice());

        if (winner === 'player') { 
            console.log('You won!');
            playerScore++;
        } else if (winner === 'computer') {
            console.log('You lost!');
            computerScore++;
        } else {
            console.log('Tie!');
        }
    }

    console.log(`Game finished!\nYou ${playerScore} - ${computerScore} Computer`);
    if (playerScore > computerScore) {
        console.log('You won the game!!');
    } else {
        console.log("You lost the game!");
    }
}

game()