#  Weather App (In Progress)

A simple weather application built using vanilla JavaScript and the OpenWeather API.

##  Features

- Search weather by city name
- Get weather using current location
- Displays:
  - Temperature
  - Feels like
  - Humidity
  - Wind speed
  - Weather condition icon
- Dynamic UI updates based on API response



##  Tech Stack

- HTML
- CSS
- JavaScript (ES6+)
- Fetch API
- OpenWeather API


##  API Key Setup

This project requires an OpenWeather API key.

Open `index.js` and replace:

```js
const apiKey = "YOUR_API_KEY_HERE";
```

with your own API key from:
https://openweathermap.org/api

---

##  Planned Improvements

- Add proper `try/catch` error handling for failed API requests
- Handle geolocation permission denial
- Improve invalid city input validation
- Implement secure API key handling (environment variable or backend proxy)
- Add loading state indicator
- Ui fixes and better mobile responsiveness

---



This project is currently a work in progress and will continue to be improved.
