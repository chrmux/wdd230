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

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

document.getElementById("currentdate").textContent = fulldate;

const date2 = document.querySelector("currentdate2");


/* navbar */

const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    toggle.querySelector("a").innerHTML = "";
  } else {
    navbar.classList.add("active");
    toggle.querySelector("a").innerHTML = "";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("subnavbar-active")) {
    this.classList.remove("subnavbar-active");
  } else if (navbar.querySelector(".subnavbar-active")) {
    navbar.querySelector(".subnavbar-active").classList.remove("subnavbar-active");
    this.classList.add("subnavbar-active");
  } else {
    this.classList.add("subnavbar-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = navbar.contains(e.target);

  if (!isClickInside && navbar.querySelector(".subnavbar-active")) {
    navbar.querySelector(".subnavbar-active").classList.remove("subnavbar-active");
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".subnavbar")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);