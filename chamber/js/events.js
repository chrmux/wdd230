const date = new Date();
const dayOfWeekNumber = date.getDay();
const nameOfDay;
const quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Monday';
        quote = 'Time to chillax!';
        break;

    case 1:
        nameOfDay = 'Tuesday';
        quote = 'Chamber';
        break;
        
    case 2:
        nameOfDay = 'Wednesday';
        quote = 'Join Chamber';
        break;

    case 3:
        nameOfDay = 'Thursday';
        quote = 'the Chamber';
        break;

    case 4:
        nameOfDay = 'Friday';
        quote = 'Join Chamber';
        break;
        
    case 5:
        nameOfDay = 'Saturday';
        quote = 'Join the Chamber';
        break;
    case 6:
        nameOfDay = 'Sunday';
        quote = 'Join the Chamber';
        break;
    
}
//Display the day of the week
const weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
const quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`

function nextweek(){
    var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
    return nextweek;
}