const DisplayController = (() => {
  const locationTitle = document.getElementById('location-title');
  const tempTextContainer = document.getElementById('temp-text-container');
  const weatherDetails = document.getElementById('weather-details');

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

  return { displayWeatherData, displayGiphyData };
})();

export default DisplayController;
