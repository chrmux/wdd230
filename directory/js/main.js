const requestURL = 'https://chrmux.github.io/wdd230/directory/js/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    let directorys = jsonObject['directorys'];
      directorys.forEach(displayBusiness);
  });

function displayBusiness(directory) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h3 = document.createElement('h3');
  let portrait = document.createElement('img');
  


  // Change the textContent property of the h2 element to contain the prophet's full name
  h3.textContent = directory.name;
  
  portrait.setAttribute('src', directory.url);
  portrait.setAttribute('loading', 'lazy');
  

  // Add/append the section(card) with the h2 element
  card.appendChild(h3);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}