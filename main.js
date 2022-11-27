const playerSelection = getPlayerSelection()
const computerSelection = getComputerChoice()

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

function getPlayerSelection() {
    let text = prompt("Make a selection!","spock").toLowerCase()
    return text
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie")
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("You Lose! Paper covers Rock.")
        } else if (computerSelection === "spock") {
            console.log("You Lose! Spock vaporizes Rock.")
        } else if (computerSelection === "scissor") {
            console.log("You Win! Rock crushes Scissor.")
        } else {
            console.log("You Win! Rock crushes Lizard.")
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissor") {
            console.log("You Lose! Scissor cuts Paper.")
        } else if (computerSelection === "lizard") {
            console.log("You Lose! Lizard eats Paper.") 
        } else if (computerSelection === "spock") {
            console.log("You Win! Paper disproves Spock.")
        } else {
            console.log("You Win! Paper covers Rock.")
        }
    } else if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            console.log("You Lose! Rock crushes Scissor.")
        } else if (computerSelection === "spock") {
            console.log("You Lose! Spock smashes Scissor.")
        } else if (computerSelection === "paper") {
            console.log("You Win! Scissor cuts Paper.")
        } else {
            console.log("You Win! Scissors decapitates Lizard.")
        }
    } else if (playerSelection === "lizard") {
        if (computerSelection === "scissor") {
            console.log("You Lose! Scissors decapitates Lizard.")
        } else if (computerSelection === "rock") {
            console.log("You Lose! Rock crushes Lizard.")
        } else if (computerSelection === "spock") {
            console.log("You Win! Lizard poisons Spock.")
        } else {
            console.log("You Win! Lizard eats Paper.")
        }
    } else {
        if (computerSelection === "paper") {
            console.log("You Lose. Paper disproves Spock.")
        } else if (computerSelection === "lizard") {
            console.log("You Lose. Lizard poisons Spock.")
        } else if (computerSelection === "scissor") {
            console.log("You Win. Spock smashes Scissor")
        } else {
            console.log("You Win. Spock vaporizes Rock")
        }
    }
}

//playRound(playerSelection, computerSelection)

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    }
}

playGame()