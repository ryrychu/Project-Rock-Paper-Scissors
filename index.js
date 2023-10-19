const outcomes = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "It's a tie";
    } else if(outcomes[playerSelection] === computerSelection){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}

const gameChoices = document.querySelector("#gameChoices");

gameChoices.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON'){
        const playerSelection = event.target.textContent.toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
});


function getComputerChoice (){
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

