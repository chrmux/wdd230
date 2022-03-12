var today = new Date();

const yearDisplay = document.querySelector('footer h2');
var todayYear = today.getFullYear();
yearDisplay.innerHTML = `&copy; ${todayYear} - Jerry N. Marollano | WDD 230 Project`;

const modDateDisplay = document.getElementById('modDate');
let modDate = document.lastModified;
modDateDisplay.textContent = ("Last modified "+modDate);

let weekday = today.getDay();

const banner = document.getElementById('banner');
if (weekday >=1 && weekday <=2) {banner.style.display = "block";}