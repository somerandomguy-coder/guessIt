import checkWinLose from "/jsFile/getInput.js";

const btn = document.querySelector("button");
const userInput = document.querySelector("input");
const timer = document.querySelector("#time");
let guess = document.querySelector("#guess");

let timeLeft = 60;

function updateEverySec(){
    timer.textContent = `Time left: ${--timeLeft}s`;
    losingGame();
}

function losingGame(){
    if ((timeLeft==0 && checkWinLose()==false) || guess.textContent == "You have 0 guess(es) remaining"){
        btn.disabled = true;
        userInput.disabled = true;
        clearInterval(interval);
        const status = document.querySelector("#status");
        status.textContent = `Too bad! You lose`;
    }else if (timeLeft==0){
        clearInterval(interval);
        btn.disabled = true;
        userInput.disabled = true;
    }
}

let interval = setInterval(updateEverySec, 1000);

