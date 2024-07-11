let yourPoint = 0;
let compPoint = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".message p");
let yourScore = document.querySelector("#your-score");
let compScore = document.querySelector("#comp-score");

const compChoice = () => {
    let choiceIdx = Math.floor(Math.random()*3);
    let choiceItem = choices[choiceIdx].id;
    return choiceItem;
};

const scoreUpdate = (result) => {
    if (result === "win"){
        yourPoint++;
        yourScore.innerText = yourPoint;
    }else if(result === "lose"){
        compPoint++;
        compScore.innerText = compPoint;
    }
}

const msgUpdate = (compChoice,userChoice,result) => {
    if (result === "win"){
        msg.innerText = `You win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else if (result === "lose"){
        msg.innerText = `You lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    } else {
        msg.innerText = "Game draw play again !";
        msg.style.backgroundColor = "black";
    }
    scoreUpdate(result)
}

const mainGame = (compChoice,userChoice) => {
    if (compChoice === userChoice){
        msgUpdate("draw");
    }else if (compChoice === "rock"){
        userChoice === "paper" ? msgUpdate(compChoice,userChoice,"win") : msgUpdate(compChoice,userChoice,"lose") ;
    }else if (compChoice === "paper"){
        result = userChoice === "scissor" ? msgUpdate(compChoice,userChoice,"win") : msgUpdate(compChoice,userChoice,"lose") ;
    }else if(compChoice === "scissor"){
        result = userChoice === "rock" ? msgUpdate(compChoice,userChoice,"win") : msgUpdate(compChoice,userChoice,"lose") ;
    }
};

for (let choice of choices){
    choice.addEventListener("click", () => {
        let userChoice = choice.id;
        mainGame(compChoice(),userChoice);
    })
}