

let count = 0;
let countDisplay = document.getElementById("count-display");

function onBtnClick() {
    count++;
    countDisplay.innerText = count;
    console.log(count); 
}