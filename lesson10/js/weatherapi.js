const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=735d9a597ef22a51c2b271ac8cf9d39b"';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
  });
