
// Cebu
var CebuRequest = new XMLHttpRequest();
CebuRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 1717512 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
CebuRequest.onload = function () {

    var data = JSON.parse(CebuRequest.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempCebu').innerHTML = temp + "&deg;F";
        document.getElementById('humidityCebu').innerHTML = humid + "&#37;";
        document.getElementById('precipitationCebu').innerHTML = precip + " inches";
        document.getElementById('windCebu').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillCebu').innerHTML = chill;

        var wImg = document.getElementById('wImageCebu');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionCebu').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescCebu').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

CebuRequest.send();


// Colombia WA
var ColumbiaRequest = new XMLHttpRequest();
ColumbiaRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 5815135 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
ColumbiaRequest.onload = function () {

    var data = JSON.parse(ColumbiaRequest.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempColumbia').innerHTML = temp + "&deg;F";
        document.getElementById('humidityColumbia').innerHTML = humid + "&#37;";
        document.getElementById('precipitationColumbia').innerHTML = precip + " inches";
        document.getElementById('windColumbia').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillColumbia').innerHTML = chill;

        var wImg = document.getElementById('wImageColumbia');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionColumbia').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescColumbia').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

ColumbiaRequest.send();


// Manila
var ManilaRequest = new XMLHttpRequest();
ManilaRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 1715507 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
ManilaRequest.onload = function () {

    var data = JSON.parse(ManilaRequest.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempManila').innerHTML = temp + "&deg;F";
        document.getElementById('humidityManila').innerHTML = humid + "&#37;";
        document.getElementById('precipitationManila').innerHTML = precip + " inches";
        document.getElementById('windManila').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillManila').innerHTML = chill;

        var wImg = document.getElementById('wImageManila');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionManila').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescManila').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

ManilaRequest.send();


// Portland
var portlandRequest = new XMLHttpRequest();
portlandRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 4979245 + '&units=imperial&async=true' + '&APPID=44854c54343626da5e75e87135a175f6');
portlandRequest.onload = function () {

    var data = JSON.parse(portlandRequest.responseText);


        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('curTempPort').innerHTML = temp + "&deg;F";
        document.getElementById('humidityPort').innerHTML = humid + "&#37;";
        document.getElementById('precipitationPort').innerHTML = precip + " inches";
        document.getElementById('windPort').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('windChillPort').innerHTML = chill;

        var wImg = document.getElementById('wImagePort');

        var myImage = document.createElement('img');


        myImage.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('imgDescriptionPort').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescPort').innerHTML = "<p>" + data.weather[0].description + "</p>";

};

portlandRequest.send();