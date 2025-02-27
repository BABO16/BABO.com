let countLabel = document.getElementById("countlabel");
let target = document.getElementById("target");
let count = 0;
let fool = 0;

function increase() {
    count++;
    countLabel.textContent = count;
if (count >= 1000000 && fool === 0){
     alert("Congrats! You have successfully wasted your time on This!");
     fool = 1
     target.textContent = "Target Completed!"
};
}

function decrease() {
    count--;
    countLabel.textContent = count;
    if(count <= -1000000 && fool === 0){
     fool = 1
     alert("I think you Just Pressed the wrong button. Everything Else is fine.")
}
}

function reset() {
    count = 0;
    countLabel.textContent = count;
}
