const display = document.getElementById('display');
let nums = '0';

function atd(input) {
    nums += input
        if(input == '/'){
            display.value += '÷';
        }else if(input == '*'){
            display.value += 'x';
        }else{
            display.value += input;
        }
}
function clearDisplay() {
    display.value = "";
    nums = "0";
}
function equal() {
    try{
        display.value = eval(nums)
        }
        catch(error){
            display.value = "Error";
        }
}
