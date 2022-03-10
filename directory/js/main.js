const requestURL = '/directory/js/data.json';
const cards = document.querySelector('#cards');

fetch(requestURL)
  .then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);
    const directorys = jsonObject['directorys'];
    directorys.forEach(displayCards);
    directorys.forEach(displayListings);
  });


function displayCards(directorys) {
  let card = document.createElement('picture');
  let image = document.createElement('img');

  image.src = directorys.imageurl;

  card.appendChild(image);
  cards.appendChild(card);
}
