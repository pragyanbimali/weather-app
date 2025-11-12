import './style.css'

import { fetch_weather } from './fetch.js';
import { decryptWeatherJSON } from './decryptWeatherJSON.js'
import { displayWeather } from './decryptWeatherJSON.js';

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const result = await fetch_weather();
    console.log(result);

    const weatherObj = decryptWeatherJSON(result);

    displayWeather(weatherObj);
});