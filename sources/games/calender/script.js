function setdate() {
const rawdate = new Date();

const year = rawdate.getFullYear();
const rawmonth = rawdate.getMonth();
let month;
const date = rawdate.getDate();
const rawday = rawdate.getDay();
let day;

function a(v) {
    month = v;
}
function b(v) {
    day = v;
}

switch(rawmonth){
    case 0:
        a("January");
        break;
    case 1:
        a("February");
        break;
    case 2:
        a("March");
        break;
    case 3:
        a("April");
        break;
    case 4:
        a("May");
        break;
    case 5:
        a("June");
        break;
    case 6:
        a("July");
        break;
    case 7:
        a("August");
        break;
    case 8:
        a("September");
        break;
    case 9:
        a("October");
        break;
    case 10:
        a("November");
        break;
    case 11:
        a("December");
        break;
    default:
        a("There's Some Error!");
        
};

switch(rawday){
    case 0:
        b('Sunday');
        break;
    case 1:
        b("Monday");
        break;
    case 2:
        b("Tuesday");
        break;
    case 3:
        b("Wednesday");
        break;
    case 4:
        b("Thursday");
        break;
    case 5:
        b("Friday");
        break;
    case 6:
        b("Saturday");
        break;
}
document.getElementById("date").innerHTML = `${day},<br> ${date} ${month} ${year}`;
};
function settime() {
let rawtime = new Date();
let hour = rawtime.getHours();
const meridian = hour >= 12 ? "PM" : "AM";
hour = hour % 12 || 12;
hour = String(hour).padStart(2, "0");
let min = rawtime.getMinutes();
min = String(min).padStart(2, "0");
let sec = rawtime.getSeconds();
sec = String(sec).padStart(2, "0");
document.getElementById("time").textContent = `${hour}:${min}:${sec} ${meridian}`;
};
function set() {
    setdate();
    settime();
    };
    set();
setInterval(set, 1000);