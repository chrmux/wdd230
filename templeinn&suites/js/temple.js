

var myRequest = new XMLHttpRequest();
myRequest.open('GET', '/templeinn&suites/js/data.json');



myRequest.onload = function () {
    var data = JSON.parse(myRequest.responseText);

    showCebuClosures(data);
    showManilaClosures(data);
    showColumbiaClosures(data);
    showPortlandClosures(data);

    // Cebu
    function showCebuClosures(jsonObj) {
        var closureDate = jsonObj.temple[0].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('CebuClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Columbia
    function showColumbiaClosures(jsonObj) {
        var closureDate = jsonObj.temple[1].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('columbiaClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Manila
    function showManilaClosures(jsonObj) {
        var closureDate = jsonObj.temple[3].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('manilaClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Portland
    function showPortlandClosures(jsonObj) {
        var closureDate = jsonObj.temple[3].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('portlandClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }
}

myRequest.send();