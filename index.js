const outcomes = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}
let playerScore = 0;
let computerScore = 0;
const btnIDs = ["rockBtn", "paperBtn", "scissorBtn"];

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        playerScore += 1;
        computerScore +=1;
        return "It's a tie";
    } else if(outcomes[playerSelection] === computerSelection){
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore +=1;
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}

const gameChoices = document.querySelector("#gameChoices");
const resultDisplay = document.querySelector("#result");
const roundsPlayed = document.querySelector("#rounds");
const restart = document.querySelector("#restart");
const playerScores = document.querySelector("#playerScore");
const computerScores = document.querySelector("#computerScore");
const scoreEnd = document.createElement("h2");
let numberofrounds = 0;
gameChoices.addEventListener('click', (event) => {
    if(numberofrounds < 5){
        if (event.target.tagName === 'BUTTON'){
            const playerSelection = event.target.textContent.toLowerCase();
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            roundsPlayed.textContent = `ROUND: ${++numberofrounds}`
            resultDisplay.textContent = result;
            console.log(numberofrounds);
            playerScores.textContent = `Player: ${playerScore}`;
            computerScores.textContent = `Computer: ${computerScore}`;
            const winMessage = playerScore === 3 ? "Player Wins" : "Computer Wins";
            scoreEnd.textContent = winMessage;
            computerScores.insertAdjacentElement('afterend', scoreEnd);
            console.log(`Player Score: ${playerScore}`);
            console.log(`Computer Score: ${computerScore}`);
                if (playerScore === 3 || computerScore === 3) {
                    disableBtn();
                    roundEnd();
                    console.log(playerScore === 3 ? "Player Wins" : "Computer Wins");
                }
        } 
    }  
    
});


function getComputerChoice (){
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
const gameEnd = document.createElement("h2");
const restartBtn = document.createElement("button");
function roundEnd(){
    if(numberofrounds >= 5){
        gameEnd.textContent = "GAME END"
        gameChoices.appendChild(gameEnd);
        const restartBtn = restartGame();
        restart.appendChild(restartBtn);
    } 
}

function toggleBtnState(disable) {
    btnIDs.forEach((id) => {
        const gameBtns = document.getElementById(id);
        if (gameBtns) {
            gameBtns.disabled = disable;
        }
    });
}

function disableBtn() {
    toggleBtnState(true);
}

function enableBtn(){
    toggleBtnState(false);
}

function restartGame(){
    restartBtn.setAttribute("id", "restartBtn");
    restartBtn.textContent = "RESTART";
    restartBtn.addEventListener("click", () =>{
        enableBtn();
        restartBtn.remove(); 
        gameEnd.remove();
        numberofrounds = 0;  
        roundsPlayed.textContent = `ROUND:`
        console.log(numberofrounds);
    });
   
  
    
    return restartBtn;
   
}