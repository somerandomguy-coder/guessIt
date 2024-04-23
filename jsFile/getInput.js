const btn = document.querySelector("button");
const userInput = document.querySelector("input");
let guess = document.querySelector("#guess");
let guessCount = 3;
export default function checkWinLose(){
    let children = container.childNodes
    let win = true;
    for (let child of children) {
        if (child.textContent=="*"){
            win = false
        }
    }
    return win;
}

function checkAndUpdate(value){
    let count = 0;
    let flag = false;
    for (let i=0; i<answer.length; i++){
        if (value.toUpperCase() == answer[i]){
            flag = true;
            let child = container.childNodes[i];
            child.textContent = answer[i];
            count++;
        } 
    }
    const status = document.querySelector("#status");
    if (flag){
        status.textContent = `Correct! There are ${count} letter(s) ${value.toUpperCase()} in the word`;
    } else {
        status.textContent = `woe woe! There is ${count} letter ${value.toUpperCase()} in the word`;
        guess.textContent = `You have ${--guessCount} guess(es) remaining`;
    }
    userInput.value = "";
    if (checkWinLose()==true){
        status.textContent = `Congratulation!!! You won the game!!!`;
    }
    
}



let values = [];
btn.addEventListener("click", (e) => {checkAndUpdate(userInput.value)})
userInput.addEventListener("keydown", (e)=>{
    (e.key == 'Enter' ||e.key == 'Backspace') ? userInput.value = "" : userInput.value = e.key;
    values.push(e.key);
    if (values[values.length-1] == 'Enter'){
        e.preventDefault();
        checkAndUpdate(values[values.length-2]); //not the "enter" but the previous key
        values = [];
    }
})