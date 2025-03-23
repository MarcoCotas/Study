//Ask user for a valid choice
//Generate Random PC Choice
//Create Function with rules of game
// Play game and register results


function getCpuChoice(num){
    let choice =  Math.floor(Math.random() *num)
    if (choice === 0){
        return "Paper"
    } else if (choice === 1){
        return "Rock"
    }else if (choice === 2){
        return "Scissors"}
}

function playGame(){
    const userChoice = prompt("Rock, Paper or Scissors?");
    const cpuChoice = getCpuChoice(3)

    if (userChoice == cpuChoice){
        let result = "Tie"
        console.log(result)

    } else if (userChoice == "Rock" && cpuChoice == "Scissors"||
        userChoice == "Paper" && cpuChoice == "Rock" ||
        userChoice == "Scissors" && cpuChoice == "Paper"){
            let result ="Win"
            console.log(result)
        } else{
            let result ="Lose"
            console.log(result)
            }
}

playGame()