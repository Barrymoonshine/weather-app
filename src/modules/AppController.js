import DisplayController from './DisplayController.js';

const AppController = (() => {
  const searchLocationForm = document.getElementById('search-location-form');
  const searchfield = document.getElementById('site-search');
  const tempSwitch = document.getElementById('temp-switch');
  let tempMode = 'Metric';

  const getCurrentLocation = () => {
    const locationDiv = document.getElementById('location-title');
    const currentLocation = locationDiv.textContent;
    return currentLocation;
  };

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

  const handleTempData = (data) => {
    if (tempMode === 'Metric') {
      return `${data.current.temp_c}°C`;
    }
    if (tempMode === 'Imperial') {
      return `${data.current.temp_f}°F`;
    }
  };

  const handleWeatherData = (data) => {
    const location = data.location.name;
    const temp = handleTempData(data);
    console.log(`temp: ${temp}`);
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
      handleWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTempMode = (checkboxValue) => {
    if (checkboxValue === 'on') {
      tempMode = 'Imperial';
    } else {
      tempMode = 'Metric';
    }
    getWeatherData(getCurrentLocation());
  };

  const handlePageLoad = () => {
    getWeatherData('london');
  };

  searchLocationForm.addEventListener('submit', (e) => {
    const location = searchfield.value;
    getWeatherData(location);
    e.preventDefault();
    searchfield.value = '';
  });

  tempSwitch.addEventListener('change', (e) => {
    const checkboxValue = e.target.checked ? 'on' : 'off';
    toggleTempMode(checkboxValue);
  });

  return { handlePageLoad };
})();

export default AppController;
