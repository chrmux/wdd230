const requestURL = 'https://chrmux.github.io/wdd230/directory/js/data.json';
const cards = document.querySelector('.cards');
const companies = document.querySelector('.spotlight');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const directorys = jsonObject['directorys'];
        directorys.forEach(displayDirectory);
    });

function displayDirectory(directorys) {
    const card = document.createElement('section');
    const businessNm = document.createElement('p');
    const image = document.createElement('img');
    const address = document.createElement('p');
    const phoneNumber = document.createElement('p');
    const website = document.createElement('a');

    businessNm.textContent = directorys.name;
    image.src = directorys.imageurl;
    address.textContent = directorys.Address;
    phoneNumber.textContent = directorys.phone;
    website.textContent = directorys.website;

    image.alt = 'comp-logo';
    website.href = directorys.website;
    card.className = 'card-items';
    businessNm.className = 'Bname';

    card.appendChild(businessNm);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);

    cards.appendChild(card);
}


const act = 0;
const ancho = innerWidth;

if (innerWidth > 560 && innerWidth < 1024) {
    document.querySelector(".cards").classList.toggle("change");
    document.querySelector("#list").classList.toggle("change");
    document.querySelector("#grid").classList.toggle("change");
    act = 1;
}

function toggleGrid() {
    if (act === 0) {

    } else {
        document.querySelector(".cards").classList.toggle("change");
        document.querySelector("#grid").classList.toggle("change");
        document.querySelector("#list").classList.toggle("change");
        act = 0;
    }
}

function toggleList() {
    if (act === 1) {

    } else {
        document.querySelector(".cards").classList.toggle("change");
        document.querySelector("#list").classList.toggle("change");
        document.querySelector("#grid").classList.toggle("change");
        act = 1;
    }
}

const grid = document.getElementById("grid");
const list = document.getElementById("list");

grid.onclick = toggleGrid;
list.onclick = toggleList;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("head-date").classList.toggle("open");
}