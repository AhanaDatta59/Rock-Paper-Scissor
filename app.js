let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
}
const drawGame = () => {
    msg.innerHTML = "Game was draw. Play again"
    msg.style.backgroundColor = "yellow"
}

const showWinner = (userWin) => {
    if( userWin === true){
        userScore++;
        userScorePara.innerHTML=userScore;
        msg.innerHTML = "You Win!!"
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerHTML=compScore;
        msg.innerHTML = "You Lost!!"
        msg.style.backgroundColor = "red"
      }
    };

const playGame = (userChoice) => {
    //console.log("User Choice is: ",userChoice);

    //Generate computer choice 
    const compChoice = getCompChoice();
    //console.log("Computer Choice is: ",compChoice);

    //Game is Draw
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "rock"? true : false;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock"? true : false;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
   // console.log(choice)
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    //console.log("Choice was clicked",userChoice);
    playGame(userChoice);
    })
})
