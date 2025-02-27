let minNum = 1;
let maxNum = 100;
let Num = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let guess;
let slook;
let attempts = 0;

// Check the user's guess
function check() {
    event.preventDefault();
    guess = Number(document.getElementById("guess").value);

    if (guess == "") {
    }else if(guess < minNum || guess > maxNum){
        document.getElementById("output").textContent="Please Enter a Valid Number!";
    } else {
        attempts++;
        if (guess < Num) {
            document.getElementById("output").textContent = "TOO LOW!";
        } else if (guess > Num) {
            document.getElementById("output").textContent = "TOO HIGH!";
        } else if (guess === Num) {
            slook = attempts === 1 ? "It took you only 1 attempt!" : `It took you ${attempts} attempts!`;
            document.getElementById("output").textContent = `Correct! ${slook}`;
            document.getElementById("reset").classList.add("active");
            document.getElementById("enter").classList.add('active');
        }
    }
}

// Show or hide the settings menu
function settings() {
    document.getElementById("guessarea").classList.toggle("active");
    document.getElementById("settings").classList.toggle("active");
}

// Update the min and max range when "Set!" is clicked
function update(event) {
    event.preventDefault(); // Prevent page refresh

    let minInput = Number(document.getElementById("minNum").value);
    let maxInput = Number(document.getElementById("maxNum").value);

    if (minInput >= maxInput) {
        window.alert("Please Enter Valid Info! (Min < Max)");
    } else {
        minNum = minInput;
        maxNum = maxInput;
        Num = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
        document.getElementById("hint").textContent = `${minNum} - ${maxNum}`;
        settings(); // Return to the game area
    }
    resetf();
}

// Reset the game
function resetf() {
    attempts = 0;
    document.getElementById("reset").classList.remove("active");
    document.getElementById("output").textContent = "";
    Num = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}
