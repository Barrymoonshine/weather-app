const DisplayController = (() => {
  const container = document.getElementById('container');

  const displayWeatherData = (data) => {
    const location = data.location.name;
    const temp = data.current.temp_c;
    const { humidity } = data.current;
    const windSpeed = data.current.wind_mph;
    const description = data.current.condition.text;

    container.innerHTML = String.raw`
    <div>
    ${location}
        <ul>
            <li>Temperature: ${temp} </li>
            <li>Humidity: ${humidity} </li>
            <li>Wind speed: ${windSpeed} </li>
            <li> ${description} </li>
        </ul>
    </div>
    `;
    console.log(data);
  };

  return { displayWeatherData };
})();

export default DisplayController;
