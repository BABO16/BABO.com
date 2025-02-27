const storedUser = localStorage.getItem("babocomUser1");
if (storedUser) {
  document.getElementById("profile").classList.add("active");
  document.getElementById("login").classList.add("active");
  displayInfo(JSON.parse(storedUser));
  devInfo(JSON.parse(storedUser));
}
const isAdmin = localStorage.getItem('isAdmin');
if(isAdmin){
    devInfo2(JSON.parse(storedUser));
}
function displayInfo(user) {
  const profilePic = document.getElementById('profilePic');
  const eastergame = document.getElementById('eastergame');
  const name = document.getElementById('name');
  const email = document.getElementById("email")
  const info = document.getElementById('info');
  profilePic.src = `../sources/ProfilePics/${user.id}.png`;
  eastergame.href = `../Sources/eastergames/${user.id}/index.html`
  name.textContent = user.username;
  email.textContent = user.email;
  info.textContent = user.info;
}
function logout() {
  localStorage.removeItem('babocomUser1');
}
function devInfo(user) {
if(user.isAdmin){
    localStorage.setItem('isAdmin', true);
}
}
function devInfo2(user) {
    document.getElementById("devinfo").classList.add("active");
}
function easterclick() {
    localStorage.setItem('backfun', true)
};
