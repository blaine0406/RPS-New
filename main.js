function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 5) + 1
    switch (randomNumber) {
        case 1:
            randomNumber === 1
            return ("rock")
            break;
        case 2:
            randomNumber === 2
            return ("paper")
            break;
        case 3:
            randomNumber === 3
            return ("scissor")
            break;
        case 4:
            randomNumber === 4
            return ("lizard")
            break;
        case 5:
            randomNumber === 5
            return ("spock")
            break;
        default:
            console.log("something is broke chris")
    }
}

function playRound() {
    const computerSelection = getComputerChoice()
    const playerSelection = prompt("Pick your selection!","rock").toLowerCase()
    let result = (playerSelection === computerSelection) ? "Tie!"
    :   (playerSelection == "rock" && computerSelection == "paper") ? "You Lose! Paper covers Rock."
    :   (playerSelection == "rock" && computerSelection == "spock") ? "You Lose! Spock vaporizes Rock."
    :   (playerSelection == "" && computerSelection == "scissor") ? "You Win! Rock crushes Scissor."
    :   (playerSelection == "rock" && computerSelection == "lizard") ? "You Win! Rock crushes Lizard." 
    :   (playerSelection == "paper" && computerSelection == "scissor") ? "You Lose! Scissor cuts Paper."
    :   (playerSelection == "paper" && computerSelection == "lizard") ? "You Lose! Lizard eats Paper."
    :   (playerSelection == "paper" && computerSelection == "spock") ? "You Win! Paper disproves Spock."
    :   (playerSelection == "paper" && computerSelection == "rock") ? "You Win! Paper covers Rock."
    :   (playerSelection == "scissor" && computerSelection == "rock") ? "You Lose! Rock crushes Scissor."
    :   (playerSelection == "scissor" && computerSelection == "spock") ? "You Lose! Spock smashes Scissor."
    :   (playerSelection == "scissor" && computerSelection == "paper") ? "You Win! Scissor cuts Paper."
    :   (playerSelection == "scissor" && computerSelection == "lizard") ? "You Win! Scissors decapitates Lizard."
    :   (playerSelection == "lizard" && computerSelection == "scissor") ? "You Lose! Scissors decapitates Lizard."
    :   (playerSelection == "lizard" && computerSelection == "rock") ? "You Lose! Rock crushes Lizard."
    :   (playerSelection == "lizard" && computerSelection == "spock") ? "You Win! Lizard poisons Spock."
    :   (playerSelection == "lizard" && computerSelection == "paper") ? "You Win! Lizard eats Paper."
    :   (playerSelection == "spock" && computerSelection == "paper") ? "You Lose. Paper disproves Spock."
    :   (playerSelection == "spock" && computerSelection == "lizard") ? "You Lose. Lizard poisons Spock."
    :   (playerSelection == "spock" && computerSelection == "scissor") ? "You Win. Spock smashes Scissor"
    :   (playerSelection == "spock" && computerSelection == "rock") ? "You Win. Spock vaporizes Rock" : "Something is wrong Chris!!!" ;
    console.log(`Player selected: ${playerSelection}`)
    console.log(`Computer selected: ${computerSelection}`)
    console.log("Round Outcome: " + result)

}


function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

playGame()
//playRound()