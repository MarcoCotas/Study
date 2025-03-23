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

function getHumanChoice(){
    let humanChoice = prompt("Enter: Rock - Paper -Scissors").toLowerCase()
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
}


function playRound(userChoice, cpuChoice, scores){


    if (userChoice == cpuChoice){
        let result = "Tie"
        console.log(result)

    } else if (userChoice == "Rock" && cpuChoice == "Scissors"||
        userChoice == "Paper" && cpuChoice == "Rock" ||
        userChoice == "Scissors" && cpuChoice == "Paper"){
            scores.human++
            console.log("Nice One. You `Rock`")
            console.log(`The current score is You: ${scores.human} vs Machine ${scores.cpu}`)
            
        } else{
            scores.cpu++
            console.log("Ups. The machine got you :) ")
            console.log(`The current score is You: ${scores.human} vs Machine ${scores.cpu}`)
            }

            
}


function playGame(){
    let scores = {human: 0, cpu: 0}
  
    for (let i=0; i<5; i++){
        const userChoice = getHumanChoice();
        const cpuChoice = getCpuChoice(3)

        playRound(userChoice,cpuChoice, scores)
    }
    if (scores.human > scores.cpu){
        console.log(`Wow you just beat the machine by ${scores.human} to ${scores.cpu}`)
    } else if (scores.cpu > scores.human){
        console.log(`Ahaha don´t tell your mom but the result was: You: ${scores.human} vs Machine ${scores.cpu}`)
    }
}

playGame()