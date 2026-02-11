const apiKey = 'YOUR_API_KEY_HERE';

const windowHTML = document.querySelector('.window-container')

const cityInput = document.querySelector('.city-input');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherType = document.querySelector('.weather-name');
const locationName = document.querySelector('.location');

const deviceLocationButton = document.querySelector('.device-location-button');

const tempFeel = document.querySelector('.feel');
const humidity = document.querySelector('.humidity-percent');
const noPlace = document.querySelector('.invalid-weather');

const noInput = document.querySelector('.no-input');

cityInput.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    getCityName();
    cityInput.value = '';
  }
})

function getCityName() {
  const city = cityInput.value;
  if (city == '') {
    setTimeout(() => {
      noInput.classList.add('hidden');
    }, 2000);
    noInput.classList.remove('hidden');
  } else {
    getWeather(city);
  }

}

async function getWeather(city) {
  console.log(city);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  if (response.ok) {
    renderWeather(data);
  } else {
    setTimeout(() => {
      noPlace.classList.add("hidden");
    }, 2000);
    noPlace.classList.remove('hidden');
  }
}

function renderWeather(data) {
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  temperature.innerHTML = Math.round(data.main.temp);
  weatherType.innerHTML = `${data.weather[0].main}, ${data.weather[0].description}`;
  locationName.innerHTML = `${data.name}, ${data.sys.country}`;
  tempFeel.innerHTML = `${Math.round(data.main.feels_like)} &deg`;
  humidity.innerHTML = `${data.main.humidity} %`;
}

deviceLocationButton.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    getWeatherGeo(lat, lon);
  })

})

async function getWeatherGeo(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  renderWeather(data);
}