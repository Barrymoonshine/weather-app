const DisplayController = (() => {
  const container = document.getElementById('container');

  const displayWeatherData = (
    location,
    temp,
    humidity,
    windSpeed,
    description,
    iconURL
  ) => {
    container.innerHTML = String.raw`
    <div>
    ${location}
        <ul>
            <li>Temperature: ${temp} </li>
            <li>Humidity: ${humidity} </li>
            <li>Wind speed: ${windSpeed} </li>
            <li> ${description} </li>
        </ul>
        <img id="weather-icon" src="${iconURL}" />
    </div>
    `;
  };

  return { displayWeatherData };
})();

export default DisplayController;
