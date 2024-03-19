let container = document.createElement("div");
container.style.display= "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.gap = "4px";
let guess = document.querySelector("#guess");

document.querySelector("body").insertBefore(container, guess);

for (let i = 0; i<answer.length; i++){
    const para = document.createElement("p");
    para.textContent = "*";
    para.style.fontSize = "50px";
    para.style.width = "100px";
    para.style.height = "100px";
    para.style.border = "6px solid #A6c9c8";
    para.style.borderRadius = "10px";
    para.style.display = "flex";
    para.style.justifyContent = "center";
    para.style.alignItems = "center";
    container.appendChild(para);
}

let hint = document.createElement("div");
hint.style.marginTop = "25px";
hint.style.fontWeight = "1000";
hint.textContent = "hint: " + question;
document.querySelector("body").insertBefore(hint, guess);


