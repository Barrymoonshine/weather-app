const DisplayController = (() => {
  const weatherDataContainer = document.getElementById(
    'weather-data-container'
  );

  const displayWeatherData = (
    location,
    temp,
    humidity,
    windSpeed,
    description,
    iconURL
  ) => {
    weatherDataContainer.innerHTML = String.raw`
    <div class="location-title">${location} <img id="weather-icon" src="${iconURL}" /> </div>
    <div class="temperature-box"> ${temp}<span class="unit-measure">&#8451</span></div>
      <ul class="weather-details">
          <li>Humidity: ${humidity} % </li>
          <li>Wind speed: ${windSpeed} Mph </li>
          <li> ${description} </li>
      </ul>
     <div class="giphy-box><img src="#" /></div> 
    `;
  };

  const displayGiphyData = (giphURL) => {
    const img = document.querySelector('img');
    img.src = giphURL;
  };

  return { displayWeatherData, displayGiphyData };
})();

export default DisplayController;
