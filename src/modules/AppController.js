import DisplayController from './DisplayController.js';

const AppController = (() => {
  const searchLocationForm = document.getElementById('search-location-form');
  const searchfield = document.getElementById('site-search');

  const processGiphyData = (giphURL) => {
    const giph = giphURL.data.images.original.url;
    DisplayController.displayGiphyData(giph);
  };

  const searchGiphy = async (userSearch) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=stGdFhymjYVkIyM0zb1okf7kudYtznl3&s=${userSearch}`,
      { mode: 'cors' }
    );
    const giphURL = await response.json();
    processGiphyData(giphURL);
  };

  const processWeatherData = (data) => {
    const location = data.location.name;
    const temp = data.current.temp_c;
    const { humidity } = data.current;
    const windSpeed = data.current.wind_mph;
    const description = data.current.condition.text;
    const { icon } = data.current.condition;
    const iconURL = `https:${icon}`;
    DisplayController.displayWeatherData(
      location,
      temp,
      humidity,
      windSpeed,
      description,
      iconURL
    );
    searchGiphy(description);
  };

  const getWeatherData = async (location) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=5b4cd00533fe44fba2d94101233003&q=${location}`,
        { mode: 'cors' }
      );
      const data = await response.json();
      processWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWeatherRequest = (location) => {
    if (location === undefined) {
      getWeatherData('london');
    } else getWeatherData(location);
  };

  searchLocationForm.addEventListener('submit', (e) => {
    const location = searchfield.value;
    handleWeatherRequest(location);
    e.preventDefault();
    searchfield.value = '';
  });

  return { handleWeatherRequest };
})();

export default AppController;
