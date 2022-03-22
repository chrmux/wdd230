var today = new Date();

const yearDisplay = document.querySelector('footer h2');
var todayYear = today.getFullYear();
yearDisplay.innerHTML = `&copy; ${todayYear} - Jerry N. Marollano | WDD 230 Project`;

const modDateDisplay = document.getElementById('modDate');
let modDate = document.lastModified;
modDateDisplay.textContent = ("Last modified "+modDate);


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('responsive')
}, false);


window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove('responsive')
};