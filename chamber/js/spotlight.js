const requestURL = 'https://byui-cit230.github.io/directory/js/data.json';
const directorys = document.querySelector('.spotlight');
let cspot = 0;
let axpot = 0;
let num = []

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const comp = jsonObject['directorys'];
    comp.forEach(displaySpotlight);
    sort();

  });

function displaySpotlight(directorys) {
  if (directorys.level == "Silver" || directorys.level == "Gold") {

    let div = document.createElement('div')
    let message = document.createElement('p')
    let name = document.createElement('h2')
    let img = document.createElement('img')
    let Wsite = document.createElement('a')

    Wsite.textContent = directorys.website
    message.textContent = directorys.message

    div.setAttribute('id', "spotlight-" + cspot)

    img.setAttribute('src', directorys.imageurl);
    img.setAttribute('alt', directorys.name);
    img.setAttribute('loading', 'lazy');

    Wsite.setAttribute('href', directorys.website);
    Wsite.setAttribute('target', 'blank');

    div.appendChild(img);
    div.appendChild(message);
    div.appendChild(Wsite);

    spotlight.appendChild(div);
    cspot += 1;
  }

}

function sort() {
  let random = "";

  for (j = 0; j < cspot; j++) {
    document.getElementById('spotlight-' + j).style.display = "none";
  }

  sorted(cspot, 3)

}

function sorted(max, quant) {

  let axR = 0;
  while (num.length < quant) {
    axR = 0;
    e = Math.floor(Math.random() * max);
    for (a = 0; a < num.length; a++) {
      if (num[a] == e) {
        axR = 1;
      }
    }

    if (axR == 0) {
      num.push(e)
    }
    document.getElementById('spotlight-' + e).style.display = "";
  }

}