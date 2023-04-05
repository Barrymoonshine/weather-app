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
    <div class="temperature-box"> 
      ${temp}<span class="unit-measure">&#8451</span>
      <div class="temp-switch-container">
        <label class="switch">
          <input type="checkbox" id="temp-switch">
          <span class="slider round"></span>
        </label>
      </div>
    </div>
      <ul class="weather-details">
          <li>Humidity: ${humidity} % </li>
          <li>Wind speed: ${windSpeed} Mph </li>
          <li> ${description} </li>
      </ul>
     <div class="giphy-box"><img id="giph" src="#" /></div> 
    `;
  };

  const displayGiphyData = (giphURL) => {
    const img = document.getElementById('giph');
    img.src = giphURL;
  };

  return { displayWeatherData, displayGiphyData };
})();

export default DisplayController;
