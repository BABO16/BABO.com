import { users } from "./../Sources/data/accounts.js";

document.getElementById('login').addEventListener('submit', function(event) {

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const pin = document.getElementById("pin").value.trim();

    const user = users.find(u => u.email === email && u.password === password && u.pin === pin);

    if (user) {
        localStorage.setItem('babocomUser1', JSON.stringify(user));
        displayInfo(user);
    } else {
        alert('Invalid Username or Password!');
    }
});

function displayInfo(user) {
    const output = document.getElementById("profileInfo");
    output.textContent = `Logged In as "${user.username}"`;
}

const storedUser = localStorage.getItem('babocomUser1');
if (storedUser) {
    displayInfo(JSON.parse(storedUser));
    setback(JSON.parse(storedUser));
}
function setback(user) {
const back = document.getElementById("back");
back.href = "profile.html"
}


let eyeicon = document.getElementById("pass-icon");
let pass = document.getElementById("password");

eyeicon.addEventListener("click", function passeye() {
     if(password.type === "password"){
         password.type = "text";
         eyeicon.width = "25";
         eyeicon.src = "../sources/imgs/hide-pass.png"
}else if(password.type === "text"){
    password.type = "password";
         eyeicon.width = "22";
    eyeicon.src = "../sources/imgs/show-pass.png";
}
});

function devInfo2(user) {
    document.getElementById("devinfo").classList.add("active");
}
const isAdmin = localStorage.getItem('isAdmin');
if(isAdmin){
    devInfo2(JSON.parse(storedUser));
}
