"use strict";

var forecast = { "coord": { "lon": -81.55, "lat": 30.23 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "base": "stations", "main": { "temp": 284.5, "pressure": 1014, "humidity": 71, "temp_min": 283.15, "temp_max": 285.95 }, "visibility": 16093, "wind": { "speed": 6.7, "deg": 320 }, "clouds": { "all": 75 }, "dt": 1543290960, "sys": { "type": 1, "id": 667, "message": 0.0035, "country": "US", "sunrise": 1543320111, "sunset": 1543357548 }, "id": 4153840, "name": "Jacksonville", "cod": 200 };

var weatherWrapper = document.getElementById('span');

var currentWeather = document.createTextNode();