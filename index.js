const gameChoices = document.querySelector("#gameChoices");

gameChoices.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const userChoice = event.target.textContent.toLowerCase();
        const computerChoice = getComputerChoice();

        const outcomes = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper",
        }
        
        if (userChoice === computerChoice){
            console.log("tie");
        } else if(outcomes[userChoice] === computerChoice){
            console.log(`You chose ${userChoice}`);
            console.log(`Computer chose ${computerChoice}`);
            console.log(`You win`);
        } else{
            console.log(`You chose ${userChoice}`);
            console.log(`Computer chose ${computerChoice}`);
            console.log(`Computer Wins`);
        } 
    }
});

function getComputerChoice (){
    let randomChoice = Math.floor((Math.random() * 3) + 1);
    
    switch(randomChoice){
        case 1: 
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissors";
    }
}