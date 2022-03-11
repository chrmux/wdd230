const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=3458449&appid=378a462ce7f02df0fb0046f2aff0551f';
const divweather = document.querySelector('.weather');



  function displayWeather(varWeather) {

    let city = document.createElement('h2');
    let icon = document.createElement('img');
    let temp = document.createElement('p');

    auxImage = `http://openweathermap.org/img/wn/${varWeather.weather[0].icon}.png`;

    //(308 K − 273,15) × 9/5 + 32 = ºF
    //<p>Wind Chill:<span id="wind"></span></p>
    
    
    icon.setAttribute('src', auxImage);
    icon.setAttribute('alt', varWeather.main)
    temp.setAttribute('class', 'negrito');

  
    divweather.appendChild(icon);
    divweather.appendChild(temp);
    
  }

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const comp = jsonObject;
    displayWeather(comp);
  });
  
