import { users } from './../Sources/data/accounts.js'; // Importing users from accounts.js

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('accountsContainer');

    users.forEach(user => {
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = user.username;
        details.appendChild(summary);

        // Add profile picture
        const profilePic = document.createElement('img');
        profilePic.src = `../Sources/ProfilePics/${user.id}.png`; // Use user's ID for the image source
        profilePic.classList.add('profilepics'); // Ensure CSS is applied
        details.appendChild(profilePic);
        
        const info = document.createElement('p');
        info.innerHTML = `
            <strong>Name:</strong> ${user.username}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>ID:</strong> ${user.id}<br>
            <strong>Password:</strong> ${user.password}<br>
            <strong>PIN:</strong> ${user.pin}<br>
            <strong>INFO:</strong> ${user.info}<br>
        `;
        details.appendChild(info);

        // Fun Game Button
        const funGameButton = document.createElement('button');
        funGameButton.textContent = 'Game';
        funGameButton.addEventListener('click', () => {
            window.location.href = `../sources/eastergames/${user.id}/index.html`; // Redirect to the user's game page
        });
        details.appendChild(funGameButton);

        // Add login button
        const loginButton = document.createElement('button');
        loginButton.textContent = 'Log In';
        loginButton.addEventListener('click', () => {
            localStorage.setItem('babocomUser1', JSON.stringify(user));
            alert(`Logged in as ${user.username}`);
            window.location.href = "";
        });
        details.appendChild(loginButton);

        container.appendChild(details);
    });
    document.getElementById('total').textContent = users.length;
});


const setAdmin = document.getElementById('setAdmin');
const clearAdmin = document.getElementById('clearAdmin');
const isAdmin = localStorage.getItem('isAdmin');
if(isAdmin){
    clearAdmin.classList.add('active');
    setAdmin.classList.add('active');
}
clearAdmin.addEventListener("click", function clearAdminf(user) {
    localStorage.removeItem('isAdmin');
    window.location.href = "";
});
setAdmin.addEventListener('click', function setAdminf(user){
    localStorage.setItem('isAdmin', true);
    window.location.href = "";
});
const loggedIn = localStorage.getItem('babocomUser1');
if(loggedIn) {
    backactive();
    info(JSON.parse(loggedIn));
}
function backactive() {
    document.getElementById('back').href = "../login/profile.html";
}
function info(user) {
    const infodiv = document.getElementById('info');
    const infoh = document.getElementById('infoh');
    infodiv.classList.add('active');
    infoh.innerHTML = `Logged In as: <span class="name">${user.username}</span>`;
}
document.getElementById('logout').addEventListener("click", () => {
  localStorage.removeItem('babocomUser1');
});
