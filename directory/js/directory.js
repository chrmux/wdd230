const requestURL = 'https://chrmux.github.io/wdd230/directory/js/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const directorys = jsonObject['directorys'];
        directorys.forEach(displayDirectory);
    });

function displayDirectory(directory) {
    const card = document.createElement('li');
    const GBname = document.createElement('h2');
    const image = document.createElement('img');
    const Gaddress = document.createElement('p');
    const Gphone = document.createElement('p');
    const Gwebsite = document.createElement('a');

    
    image.src = directory.imageurl;
    GBname.textContent = directory.name;
    Gaddress.textContent = directory.Address;
    Gphone.textContent = directory.phone;
    Gwebsite.textContent = directory.website;

    image.alt = 'comp-logo';
    Gwebsite.href = directory.website;
    card.className = 'list-vew';
    GBname.className = 'GBname';
    
    card.appendChild(image);
    card.appendChild(GBname);
    card.appendChild(Gaddress);
    card.appendChild(Gphone);
    card.appendChild(Gwebsite);

    cards.appendChild(card);
}


var galleryWidgetElements = document.querySelectorAll('.gallery');

for (var i = 0, controlViewElement; i < galleryWidgetElements.length; i++)
{
	controlViewElement = galleryWidgetElements[i].querySelector('.control-view');
	controlViewElement.galleryWidgetElement = galleryWidgetElements[i];
	
	controlViewElement.addEventListener('click', function ()
	{
		toggleView(this.galleryWidgetElement);
	});
}

function toggleView(galleryWidgetElement)
{
	galleryWidgetElement.classList.toggle('list-view');
}


function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("head-date").classList.toggle("open");
}