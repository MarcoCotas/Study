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

function playRound(userChoice, cpuChoice){


    if (userChoice == cpuChoice){
        let result = "Tie"
        console.log(result)

    } else if (userChoice == "Rock" && cpuChoice == "Scissors"||
        userChoice == "Paper" && cpuChoice == "Rock" ||
        userChoice == "Scissors" && cpuChoice == "Paper"){
            console.log("Nice One. You `Rock`")
            return humanScore++
        } else{
            console.log("Ups. The machine got you :) ")
            return cpuScore++
            }

            
}


function playGame(){
const userChoice = prompt("Rock, Paper or Scissors?");
const cpuChoice = getCpuChoice(3)
let humanScore = 0
let cpuScore = 0
    for (let i=0; i<5; i++){
        playRound(userChoice,cpuChoice)
    }
    if (humanScore > cpuScore){
        console.log(`Wow you just beat the machine by ${humanScore} to ${cpuScore}`)
    } else if (cpuScore > humanScore){
        console.log(`Ahaha don´t tell your mom but the result was: You: ${humanScore} vs Machine ${cpuScore}`)
    }
}

playGame()