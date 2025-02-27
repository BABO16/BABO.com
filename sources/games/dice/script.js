function roll() {
    event.preventDefault();
    const numOfDices = document.getElementById('numOfDices').value;
    let output = document.getElementById('output');
    let outputImages = document.getElementById('images');
    let values = [];
    let images = [];
    let total = 0;
    
    
    if(numOfDices === ""){
        output.textContent = "Please Enter a Number.";
    }else if(numOfDices < 1 || numOfDices > 20) {
        output.textContent = "Please Enter a Valid Number.";
    }else{
    for(let i=0;i<numOfDices;i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="Images/${value}.svg" alt="${value}">`);
        total += value;
    }
    outputImages.innerHTML = images.join("");
    output.innerHTML = `<h2>Total: ${total}</h2><br><h3>Dices: ${values.join(", ")}</h3>`;
    }
}