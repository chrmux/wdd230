const yearDisplay = document.querySelector('span');
var today = new Date();
var todayYear = today.getFullYear();
yearDisplay.textContent = (todayYear+"  | Jerry N. Marollano | - Philippines");

const modDateDisplay = document.querySelector('footer #currentdate2');
let modDate = document.lastModified;
modDateDisplay.textContent = (""+modDate);

