function computerPlay() {
    let items = ["Rock", "Paper", "Scissors"]
    let random = items[Math.floor(Math.random() * 3)]
    return random.toLowerCase()
}

const prompt = require("prompt-sync")({sigint: true});

// let playerSelection = prompt("Choose your weapon: ").toLowerCase()
// const computerSelection = computerPlay()


let humanScore = 0
let computerScore = 0
let scoreLimit = 5
let gameOver = false 

// create variables to keep track of scoring  done
// set a limit to the score of 5   done 
// check for gameover to be false then continue the game 
// once a player has reached the score limit of 5 its game over 
// set gameover to true end game
// compare player score if equal to scorelimit if it does that player has won


function playRound() {
    let playerSelection = prompt("Choose your weapon: ").toLowerCase()
    const computerSelection = computerPlay()

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1
        return `You Lose! Paper beats Rock. computer score: ${computerScore}`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        humanScore += 1
        return `You Win! Rock beats Scissors. human score: ${humanScore}`
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1
        return `You Lose! scissors beats paper. computer score: ${computerScore}`
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        humanScore += 1
        return `You Win! paper beats rocks. human score: ${humanScore}`
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1
        return `You Lose! rock beats scissors. computer score: ${computerScore}`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        humanScore += 1
        return `You Win! scissors beats paper. human score: ${humanScore}`
    } else if (playerSelection === computerSelection) {
        return "Draw! Both the same"
    } 
}

function game() {
    console.log(playRound())
    if (humanScore < 5 && computerScore < 5) {
        game()
    } else {
        endGame()
    }
}
 console.log(game())
// game()

 function endGame() {
     if (humanScore === scoreLimit) {
         console.log("winner humans")
         gameOver = true 
     } else if (computerScore === scoreLimit) {
         console.log("computerrrs winss")
         gameOver = true 
     }
 }
// console.log(playRound(playerSelection, computerSelection))