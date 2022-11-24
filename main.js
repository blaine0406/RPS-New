function getComputerChoice() {
    let randomNumber = Math.floor( Math.random()*5 ) + 1
    if (randomNumber === 1) {
        return("rock")
    } else if (randomNumber === 2) {
        return("paper")
    } else if (randomNumber === 3) {
        return("scissor")
    } else if (randomNumber === 4) {
        return("lizard")
    } else {
        return("spock")
    }
}

console.log( getComputerChoice() );