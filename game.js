function computerPlay() {
    let items = ["Rock", "Paper", "Scissors"]
    let random = items[Math.floor(Math.random() * items.length)]
    return random
}
function playRound(playerSelection, computerSelection) {
    let humanPlayer = playerSelection.toLowerCase()
    let t1000 = computerSelection.toLowerCase()
    if (humanPlayer === "Rock".toLowerCase() && t1000 === "Paper".toLowerCase()) {
        return "You Lose! Paper beats Rock"
    } 
}

// function caseInsensitive(playerSelection, computerSelection) {
//     return playerSelection.localeCompare(computerSelection, undefined, {sensitivity: 'accent' }) === 0
// }

const playerSelection = "RoCk"
const computerSelection = computerPlay()
// console.log(playerSelection, computerSelection)

console.log(playRound(playerSelection, computerSelection))