const data = 'https://chrmux.github.io/wdd230/directory/directory.html/directory/js/data.json';
const cards = document.querySelector('.cards');

fetch(data)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    let directory = jsonObject['directory'];
      directory.forEach(displayProphets);
  });

function displayProphets(directory) {
  // Create elements to add to the document
  let card = document.createElement('d2');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');
  


  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = 'Albay directory';
  

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', directory.imageurl);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}







