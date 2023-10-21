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
            
            console.log(`Player Score: ${playerScore}`);
            console.log(`Computer Score: ${computerScore}`);

                if((playerScore > computerScore ) && numberofrounds === 5){
                    disableBtn();
                    roundEnd();
                    const winMessage = "PLAYER WINS";
                    scoreEnd.textContent = winMessage;
                    computerScores.insertAdjacentElement('afterend', scoreEnd);
                } else if ((playerScore < computerScore ) && numberofrounds === 5){
                    disableBtn();
                    roundEnd();
                    const winMessage = "COMPUTER WINS";
                    scoreEnd.textContent = winMessage;
                    computerScores.insertAdjacentElement('afterend', scoreEnd);
                } else if ((playerScore === computerScore ) && numberofrounds === 5){
                    disableBtn();
                    roundEnd();
                    const winMessage = "ITS A TIE";
                    scoreEnd.textContent = winMessage;
                    computerScores.insertAdjacentElement('afterend', scoreEnd);
                } else if (playerScore === 3 || computerScore === 3) {
                    disableBtn();
                    roundEnd();
                    const winMessage = playerScore === 3 ? "Player Wins" : "Computer Wins";
                    scoreEnd.textContent = winMessage;
                    computerScores.insertAdjacentElement('afterend', scoreEnd);
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
    
        gameEnd.textContent = "GAME END"
        gameChoices.appendChild(gameEnd);
        const restartBtn = restartGame();
        restart.appendChild(restartBtn);
    
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
        scoreEnd.remove();
        resultDisplay.textContent = "";
        numberofrounds = 0;  
        playerScore = 0;
        computerScore = 0;
        playerScores.textContent = `Player: ${playerScore}`;
        computerScores.textContent = `Computer: ${computerScore}`;
        roundsPlayed.textContent = `ROUND:`
        console.log(numberofrounds);
    });
   
  
    
    return restartBtn;
   
}

