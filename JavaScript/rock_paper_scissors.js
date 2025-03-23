//Ask user for a valid choice
//Generate Random PC Choice
//Create Function with rules of game
// Play game and register results

const userChoice = prompt("Rock, Paper or Scissors?");
const cpuChoice = getCpuChoice(3)
console.log (userChoice)
console.log (cpuChoice)

function getCpuChoice(num){
    let choice =  Math.floor(Math.random() *num)
    if (choice === 0){
        return "Paper"
    } else if (choice === 1){
        return "Rock"
    }else if (choice === 2){
        return "Scissors"}
}