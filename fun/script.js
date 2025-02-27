const loggedIn = localStorage.getItem('babocomUser1');
if(loggedIn) {
    easterActive(JSON.parse(loggedIn));
};
function easterActive(user) {
    const easterdiv = document.getElementById('easterdiv');
    const easterBtn = document.getElementById('easter');
    const easterf = document.getElementById('easterf');
    easterf.href = `../Sources/eastergames/${user.id}/index.html`;
    easterdiv.classList.add("active");
    easterBtn.textContent = `${user.username}'s Game`;
};