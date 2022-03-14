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



let temp = parseFloat(document.querySelector("#temp").textContent);
let speed = parseFloat(document.querySelector("#speed").textContent);
let windchill = "";

if (temp <= 50 && speed > 3) {
  windchill = windChill(temp, speed);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}

document.querySelector("#chill").innerHTML = windchill;

function windChill(temp, speed) {
  let answer = (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
  return Math.round((answer + Number.EPSILON) * 100) / 100;;
}