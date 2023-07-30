const btn = document.querySelectorAll(".btn");
const myScore = document.querySelector(".yourScore")
const myScore2 = document.querySelector(".comp-score")
const game = document.querySelector(".game")
const comment = document.querySelector(".comment")
let gameOver = document.querySelector(".gameover")
let content = document.querySelector(".content")
let tryAgainBtn = document.querySelector(".disappear")
let playerScore = 0;
let compScore = 0;
let counter = 0;



// function endGame(items){   

// }
// }


btn.forEach(function(item){

    item.addEventListener("click", function(e){
        
        console.log(counter)
        const img = item.querySelector("img");
        playerSelection = img.alt.toLowerCase();
        let computer =computerChoice()
        console.log(`player ${playerSelection}`);
        
        // this calls the play game function.
        playGame(playerSelection, computer);
    })
})



function playGame(playerSelection, computer){    
    if(playerSelection === computer){
       comment.textContent = "It is a tie"   
    }
    else if((playerSelection =="rock"   && computer == "scissor") || 
      (playerSelection == "paper"   && computer == "rock")||
      (playerSelection == "scissor" && computer == "paper")
    ){
    playerScore = ++playerScore;
    displayMyScore();
    
    whenPlayerWins(computer)// this displays a comment when the player wins
}
    else{
        compScore = ++compScore;
        displayCompScore()
        whenComputerWins(computer)// this displays a comment when the computer wins.
    }
    
   
}     

//This displays My Score
function displayMyScore(){
        myScore.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          fill: "forwards",
          iterations: 1,
          delay: 0,
          easing: "ease-out",
        });
        myScore.textContent = `You: ${playerScore}`;         
}

//This displays the Computer Score
function displayCompScore(){
    myScore2.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
    myScore2.textContent = `Computer: ${compScore}`;     
}


// we are creating computer game option.
let array = ["rock", "paper","scissor"]
function computerChoice(){

    let compChoice = Math.floor(Math.random() * array.length);
    console.log(`comp ${array[compChoice]}`)
    return (array[compChoice])
}

function whenComputerWins(computer){
    if(compScore==1){
        comment.textContent = `Dont let them win ${computer} beats ${playerSelection}`
    }
    else if(compScore == 2){
        comment.textContent = `Please try harder you can do this ${computer} beats ${playerSelection}`
    }
    else if(compScore == 3){
        comment.textContent = `Please try much harder you can do this ${computer} beats ${playerSelection}`
    }
    else if(compScore == 4){
        comment.textContent = `You lost this game ${computer} beats ${playerSelection}`
        if(compScore > playerScore){
            declareWinner();
            comment.textContent = "You lost this game"
        }
    }
}

function whenPlayerWins(computer){
    if(playerScore === 1){
        comment.textContent = `Good one ${playerSelection} beats ${computer}`
    }
    else if(playerScore === 2){
        comment.textContent = `You are doing well ${playerSelection} beats ${computer}`
    }
    else if(playerScore === 3){
        comment.textContent = `If you continue like this you will save the world ${playerSelection} beats ${computer}`
    }

    else if(playerScore === 4){
        comment.textContent = `Excellent Performance ${playerSelection} beats ${computer}`
        if(playerScore > compScore){
            declareWinner();
            comment.textContent = "You won this Game"
        }
    }
}

function declareWinner(){
    content.classList.add("disappear")
    tryAgainBtn.classList.add("appear")
    // tryAgainBtn.addEventListener("click", function(){
    //     location.reload()
    // })
    
}