
//const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
//const myList = document.querySelector('ul');

//fetch('requestURL')
//  .then(function (response) {
//    return response.json();
//  })
//  .then(function (json) {
//    for (var i = 0; i < json.prophets.length; i++) {
//      var listItem = document.createElement('li');
//      listItem.innerHTML = json.prophets[i].name + ' ' + json.prophets[i].lastname + ' <br>';
//     listItem.innerHTML += 'Place of Birth:' + json.prophets[i].birthplace + ' <br>';
//     listItem.innerHTML += json.prophets[i].imageurl;
//     myList.appendChild(listItem);
//    }
    
//  });

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  });
  
const prophets = jsonObject('phrophets');
prophets.forEach(displayProphets);

function displayProphets(prophet) {  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
    // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}


