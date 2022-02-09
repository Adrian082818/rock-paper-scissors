
// let random = items[Math.floor(Math.random() * items.length)]

function computerPlay() {
    let items = ["Rock", "Paper", "Scissors"]
    let random = items[Math.floor(Math.random() * items.length)]
    return random
}
console.log(computerPlay())