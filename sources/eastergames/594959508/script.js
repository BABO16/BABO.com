let count = 1;
let scorevalue = 0;
const appleimg = document.getElementById("appleimg");
const finished = document.getElementById("finished");
const score = document.getElementById("score");


function countplus() {
if(count < 9) {
    count++;
    appleimg.src = `Images/${count}.png`;
    }else if(count == 9){
        appleimg.classList.add("active");
        finished.classList.add("active");
        scorevalue++;
        score.textContent = scorevalue < 10 ? `You ate only ${scorevalue} apple${scorevalue > 1 ? 's':''}!🍎`:`You ate ${scorevalue} apples!🍎`;
    }
}
function reset() {
    count = 1;
    appleimg.src = `Images/${count}.png`;
      appleimg.classList.remove("active");
      finished.classList.remove("active");
}
