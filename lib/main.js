"use strict";

var forecast = { "coord": { "lon": -81.55, "lat": 30.23 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "base": "stations", "main": { "temp": 283.77, "pressure": 1015, "humidity": 68, "temp_min": 283.05, "temp_max": 284.85 }, "visibility": 16093, "wind": { "speed": 3.6, "deg": 310 }, "clouds": { "all": 75 }, "dt": 1543294560, "sys": { "type": 1, "id": 667, "message": 0.0036, "country": "US", "sunrise": 1543320114, "sunset": 1543357547 }, "id": 4153840, "name": "Jacksonville", "cod": 200 };

var weatherWrapper = document.getElementById('span');

var currentWeather = document.createTextNode(forecast.weather[0].description);

console.log(forecast.weather[0].description);

weatherWrapper.appendChild(currentWeather);