let playerScore = 0;
let computerScore = 0;

let computerChoice ;
let playerChoice ;



const output = document.querySelector('#output');
output.textContent = "i have feat on you";


const player = document.querySelector('#playerScore');
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector('#computerScore');
computer.textContent = `Computer Score: ${computerScore}`;


let buttons = document.querySelectorAll('.weapon');
buttons.forEach((button) => {button.addEventListener('click', () => {

    playerChoice = button.id;
    computerChoice = getComputerChoice();
    playGame();
    })
})




function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    
}
function playRound(userChoice, computerChoic) {
    playerChoice = userChoice.toLowerCase();
    compChoice = computerChoic.toLowerCase();
    const winner = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    if (playerChoice === compChoice) {
        output.textContent = `It's a tie! You chose ${playerChoice} and The computer chose ${compChoice}`;
    } else if (winner[playerChoice] === compChoice) {
        playerScore++;
        output.textContent = `You won this round! You chose ${playerChoice} and The computer chose ${compChoice}`;

    } else {
        computerScore++;
        output.textContent = `The computer won this round! You chose ${playerChoice} and The computer chose ${compChoice}`; 
    }
}





function playGame(){
    playRound(playerChoice, computerChoice);
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5 || computerScore == 5){
        if (playerScore > computerScore){
            output.textContent = "You won the game!";
        }
        else if (computerScore > playerScore){
            output.textContent = "The computer won the game!";
        }
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }





}

    


