import DisplayController from "./DisplayController.js";

const AppController = (() => {
  const getWeatherData = async () => {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=5b4cd00533fe44fba2d94101233003&q=london",
      { mode: "cors" }
    );
    const weatherData = await response.json();
    DisplayController.displayWeatherData(weatherData);
  };
  return { getWeatherData };
})();

export default AppController;
