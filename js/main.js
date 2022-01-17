const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
// using getElementById
document.getElementById("currentdate").textContent = fulldate;
// ****************************
// using querySelector
const date2 = document.querySelector('#currentdate2');
I hope it works on yours.

const yearDisplay = document.querySelector('footer > span');
var today = new Date();
var todayYear = today.getFullYear();
yearDisplay.textContent = (todayYear +"  There are " + daycount + " days until " + targetEvent + "!");

const modDateDisplay = document.querySelector('footer > p');
let modDate = document.lastModified;
modDateDisplay.textContent = ("Last Modified "+modDate);
