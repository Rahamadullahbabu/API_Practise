fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    displayCountryInfo(data);
  })
  .catch(error => console.error(error));

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

    var countryGoogleMaps = document.createElement('a');
    countryGoogleMaps.classList.add('country-google-maps');
    countryGoogleMaps.textContent = `Google Maps: ${country.maps.googleMaps}`;
    countryGoogleMaps.href = `https://www.google.com/maps/place/${country.maps.googleMaps}`;
    countryGoogleMaps.target = "_blank";

    countryCard.appendChild(countryName);
    countryCard.appendChild(countryFlag);
    countryCard.appendChild(countryGoogleMaps);

    countryListContainer.appendChild(countryCard);
  });
}
