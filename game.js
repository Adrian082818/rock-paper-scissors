function computerPlay() {
    let items = ["Rock", "Paper", "Scissors"]
    let random = items[Math.floor(Math.random() * items.length)]
    return random
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock".toLowerCase() && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } 
}

// function caseInsensitive(playerSelection, computerSelection) {
//     return playerSelection.localeCompare(computerSelection, undefined, {sensitivity: 'accent' }) === 0
// }

const playerSelection = "rocK".toLowerCase()
const computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection))