/* const users = [
  {username: 'BABO', email: 'mustansar37@email.com', password: 'BABO-KING', pin: '21215', info: 'Website Owner! Show Some Respect!'},
  {username: 'null', email: 'null@email.com', password: 'null', pin: '1234', info: 'null'},
  {username: 'null', email: 'null@email.com', password: 'null', pin: '1234', info: 'null'}
];

document.getElementById('create').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPass").value;
    const phone = document.getElementById("phone").value;
    const pin = document.getElementById("pin").value;

    if (password !== confirmPass) {
        alert('Passwords do not match!');
        return;
    }

    const newUser = {
        username: username,
        email: email,
        password: password,
        pin: pin,
        info: 'New User'
    };

    users.push(newUser);
    localStorage.setItem('babocomUser1', JSON.stringify(newUser));
    alert('Account created successfully!');
});

function displayInfo(user) {
    const output = document.getElementById("profileInfo");
    output.textContent = `Logged In as '${user.username}'`;
}

const storedUser = localStorage.getItem('babocomUser1');
if (storedUser) {
    displayInfo(JSON.parse(storedUser));
} */





           let eyeicon = document.getElementById("pass-icon");
           let pass = document.getElementById("password");
           let confirmPass = document.getElementById("confirmPass");
           
          eyeicon.addEventListener("click", function passeye() {
               if(password.type === "password"){
                   password.type = "text";
                   confirmPass.type = "text";
                   eyeicon.src = "../sources/hide-pass.png"
               }else if(password.type === "text"){
                   password.type = "password";
                   confirmPass.type = "password";
                   eyeicon.src = "../sources/show-pass.png";
               }else{
                    alert("There's some error")
               }
           });
