function computerPlay() {
    let items = ["Rock", "Paper", "Scissors"]
    let random = items[Math.floor(Math.random() * items.length)]
    return random
}

const prompt = require("prompt-sync")();

const playerSelection = prompt("Choose your weapon: ")
const computerSelection = computerPlay()

function playRound(playerSelection, computerSelection) {
    let humanPlayer = playerSelection.toLowerCase()
    let t1000 = computerSelection.toLowerCase()

    let humanScore = 0
    let computerScore = 0

    if (humanPlayer === "Rock".toLowerCase() && t1000 === "Paper".toLowerCase()) {
        computerScore = 1
        console.log(computerScore)
        return "You Lose! Paper beats Rock. Computer Wins!"
    } else if (humanPlayer === "Scissors".toLowerCase() && t1000 === "Paper".toLowerCase()) {
        humanScore = 1
        console.log(humanScore)
        return "You Win! Scissors beats Paper. Humans Win!"
    }

}

function game() {
    // let score = 0
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection))
    }
}
 console.log(game())

// console.log(playerSelection, computerSelection)

// console.log(playRound(playerSelection, computerSelection))