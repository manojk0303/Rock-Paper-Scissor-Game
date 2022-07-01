
//UI VARIABLES
let UI_userWin = document.querySelector("#user-win"),
    UI_botWin = document.querySelector("#bot-win");
const    
    UI_choices = document.querySelector("#choices"),
    UI_showChoices = document.querySelector("#show-choices"),
    UI_result = document.querySelector("#result"),
    UI_rock = document.getElementById("rock"),
    UI_paper = document.getElementById("paper"),
    UI_scissor = document.getElementById("scissor"), 
    UI_p = document.getElementById("p"), 
    UI_container = document.querySelector(".container"), 
    UI_points = document.querySelector("#points"), 
    UI_output = document.getElementById("output"); 



UI_botWin.textContent=0;
UI_userWin.textContent=0;

//VARIABLES
let userWin = 0,
    botWin = 0,
    currentGame = 0;
const noOfGames = 5,
      choices =['rock','paper','scissors'],
      gameFinished = false ;

UI_userWin.innerHTML = `User : ${userWin}`;     
UI_botWin.innerHTML = `Bot : ${botWin}`;     

UI_p.innerText = `Total Matches : ${noOfGames}  |   Current Match : ${currentGame}`;
init();

UI_choices.addEventListener("click",function(e){
    console.log(e.target.parentElement.id)
    if(e.target.id === "rock" && !gameFinished){
    getInputs("rock")}
    else if(e.target.id === "paper" && !gameFinished){
        getInputs("paper")}
    else if(e.target.id === "scissor" && !gameFinished){
        getInputs("scissors")

    }
});


function init(){
    UI_choices.innerHTML = `
    <a href="#"id="rock" title="rock" class="far fa-hand-rock"></a>
    <a href="#"id="paper" title="paper" class="far fa-hand-paper"></a>
    <a href="#"id="scissor" title="scissor" class="far fa-hand-scissors"></a>
    
    `;
    
}

function getInputs(userChoice){
    //gets choice of user and bot
    UI_showChoices.innerHTML = "";
    console.log("getInputs")
    currentGame += 1;
    UI_p.innerText = `Total Matches : ${noOfGames}  |   Current Match : ${currentGame}`;
    
    let botChoice = choices[Math.floor(Math.random()*3)];
    console.log(userChoice , botChoice);
    
    checkWin(userChoice,botChoice);

}


function checkWin(u,b){
    //check whether the user wins
    console.log("check win")
    switch(u){
        case "rock":
            if(b === 'scissors'){
                incrementor("user",u,b);
            }else if(b === 'paper'){
                incrementor("bot",u,b);
            }else{
                incrementor("tie",u,b);
            }
            break;
    
        case "paper":
            if(b === 'rock'){
                incrementor("user",u,b);
            }else if(b === 'scissors'){
                incrementor("bot",u,b);
            }else{
                incrementor("tie",u,b);
            }
            break;

        case "scissors":
            if(b === 'paper'){
                incrementor("user",u,b);
            }else if(b === 'rock'){
                incrementor("bot",u,b);
            }else{
                incrementor("tie",u,b);
            }
            break;

    };


}


function incrementor(winner,u,b){
    //increments the winner points
    let word ;
    if(winner === 'user'){
        userWin += 1;
        word = "You Won";
        UI_output.style.backgroundColor = "rgb(134, 250, 81)";
        UI_container.style.border = " 0.5rem solid rgb(134, 250, 81)";
        UI_points.style.backgroundColor = "rgb(134, 250, 81)";
    }else if(winner === "bot"){
        botWin += 1;
        word = "You Lose";
        UI_output.style.backgroundColor = "rgb(255, 71, 71)";
        UI_container.style.border = " 0.5rem solid rgb(255, 71, 71)";
        UI_points.style.backgroundColor = "rgb(255, 71, 71)";



    }else{
        word = "Its a Tie";
        UI_output.style.backgroundColor ="rgb(91, 19, 158)";
        UI_container.style.border = " 0.5rem solid rgb(91, 19, 158)";
        UI_points.style.backgroundColor ="rgb(91, 19, 158)";


    }
    
    UI_showChoices.innerHTML =`
    <div id="vs-img">
        <i class="far fa-hand-${u}" title="your choice"></i>
        
        <p>VS</p>

        <i class="far fa-hand-${b}" title="bot choice"></i>

        
    </div>
        <h1><strong>${word}</strong></h1>
   
    
    `;
    console.log(userWin)
    console.log(botWin)

   
    UI_userWin.innerHTML = `User : ${userWin}`;     
    UI_botWin.innerHTML = `Bot : ${botWin}`;  
    

    if(isGameEnded()){
        console.log("if")
        document.getElementById("rock").classList.add("inactiveLink");
        document.getElementById("paper").classList.add("inactiveLink");
        document.getElementById("scissor").classList.add("inactiveLink");
        setTimeout(() => {
            endGame();

        },2000);
    }else{
        console.log("else")
       init();
        
    }
     
}


function isGameEnded(){
    //checks the game is ended
    
    if(currentGame === noOfGames){
        return true;
    }
    return false;
}


function endGame(){
    //ende the game and shows result
    UI_showChoices.innerHTML = ""; 
    let word;
    console.log(`user  : ${userWin}`);
    console.log(`bot  : ${botWin}`);
    if(userWin > botWin){
        startConfetti();
        console.log("User wins")
        word = "You won the championship";
        UI_output.style.backgroundColor = "rgb(134, 250, 81)";
        UI_container.style.border = " 0.5rem solid rgb(134, 250, 81)";
        UI_points.style.backgroundColor = "rgb(134, 250, 81)";

    }else if(userWin < botWin){
        console.log("Bot wins")
        word = "You lose the championship";
        UI_output.style.backgroundColor = "rgb(255, 71, 71)";
        UI_container.style.border = " 0.5rem solid rgb(255, 71, 71)";
        UI_points.style.backgroundColor = "rgb(255, 71, 71)";

    }else{
        console.log("Its a tie")
        word = "championship is a Tie";
        UI_output.style.backgroundColor = "rgb(91, 19, 158)";
        UI_container.style.border = " 0.5rem solid rgb(91, 19, 158)";
        UI_points.style.backgroundColor = "rgb(91, 19, 158)";

    }
    UI_choices.innerHTML = `
    <h1>${word}</h1>
    `;
    console.log("finished")
    setTimeout(() => {
        stopConfetti();
        reload();
    },2000)
}

function reload(){
document.location.reload()
}