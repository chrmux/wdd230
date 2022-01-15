const yearDisplay = document.querySelector('footer > span');
var today = new Date();
var todayYear = today.getFullYear();
yearDisplay.textContent = (todayYear +"  There are " + daycount + " days until " + targetEvent + "!");

const modDateDisplay = document.querySelector('footer > p');
let modDate = document.lastModified;
modDateDisplay.textContent = ("Last Modified "+modDate);
