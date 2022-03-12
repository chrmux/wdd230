const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4926563&units=Imperial&appid=378a462ce7f02df0fb0046f2aff0551f';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentTemp = document.querySelector('#temp');
    weathericon = document.querySelector('#weathericon');

    currentTemp.textContent = jsObject.main.temp.toFixed(0);

    let imgsrc = `https://api.openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let imgalt = jsObject.weather[0].description;
    weathericon.setAttribute('src', imgsrc);
    weathericon.setAttribute('alt', imgalt);
    
    });
