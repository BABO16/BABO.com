const loggedIn = localStorage.getItem('babocomUser1');
if(loggedIn) {
    setUser(JSON.parse(loggedIn));
}
function setUser(user) {
    const accountimg = document.getElementById('accountimg');
    const accountname = document.getElementById('accountname');
    const sendp = document.getElementById('sendp');
    accountimg.src = `../Sources/profilepics/${user.id}.png`;
    accountname.textContent = user.username;
    sendp.href = "../login/profile.html";
}
