const DisplayController = (() => {
  const locationTitle = document.getElementById('location-title');
  const tempTextContainer = document.getElementById('temp-text-container');
  const weatherDetails = document.getElementById('weather-details');
  const locationWarningMessage = document.getElementById(
    'location-warning-message'
  );
  const siteSearch = document.getElementById('site-search');

  const displayWarningMessage = () => {
    locationWarningMessage.style.visibility = 'visible';
  };

  const hideWarningMessage = () => {
    locationWarningMessage.style.visibility = 'hidden';
  };

  const displayWeatherData = (
    location,
    temp,
    humidity,
    windSpeed,
    description,
    iconURL
  ) => {
    locationTitle.innerHTML = String.raw`
    ${location} <img id="weather-icon" src="${iconURL}" />
    `;
    tempTextContainer.innerHTML = String.raw`${temp}`;
    weatherDetails.innerHTML = String.raw`
    <li>Humidity: ${humidity} % </li>
    <li>Wind speed: ${windSpeed} Mph </li>
    <li> ${description} </li>
    `;
  };

  const displayGiphyData = (giphURL) => {
    const img = document.getElementById('giph');
    img.src = giphURL;
  };

  siteSearch.addEventListener('click', () => {
    hideWarningMessage();
  });

  return { displayWeatherData, displayGiphyData, displayWarningMessage };
})();

export default DisplayController;
