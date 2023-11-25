var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var countries = JSON.parse(xhr.responseText);
    displayCountryInfo(countries);
  } else {
    console.error('Failed to fetch data');
  }
};

xhr.send();

function displayCountryInfo(countries) {
  var countryListContainer = document.getElementById('country-list');

  countries.forEach(function (country) {
    var countryCard = document.createElement('div');
    countryCard.classList.add('country-card');

    var countryName = document.createElement('div');
    countryName.classList.add('country-name');
    countryName.textContent = country.name.common;

    var countryFlag = document.createElement('img');
    countryFlag.classList.add('country-flag');
    countryFlag.src = country.flags.png;

    var countryGoogleMaps = document.createElement('div');
    countryGoogleMaps.classList.add('country-google-maps');
    countryGoogleMaps.textContent = `Google Maps: ${country.maps.googleMaps}`;

    countryCard.appendChild(countryName);
    countryCard.appendChild(countryFlag);
    countryCard.appendChild(countryGoogleMaps);

    countryListContainer.appendChild(countryCard);
  });
}
