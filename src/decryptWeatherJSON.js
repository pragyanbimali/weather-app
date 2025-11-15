import sunnyImg from '../assets/images/sunny.jpg';
import overcastImg from '../assets/images/overcast.jpg';
import rainImg from '../assets/images/rain.jpg';

export const decryptWeatherJSON = function(weatherJSON) {
    return {
        address: weatherJSON.address,
        currentCondition: weatherJSON.currentConditions.conditions,
        feelsLike: weatherJSON.currentConditions.feelslike,
        humidity: weatherJSON.currentConditions.humidity,
        temperature: weatherJSON.currentConditions.temp,
        description: weatherJSON.description
    }
}

export const displayWeather = function(weatherObj) {
    const mainContainer = document.querySelector(".main-container");
    const body = document.querySelector("body")
    
    // Remove previous weather result
    const oldWeather = document.querySelector(".weather-details-container");
    if (oldWeather) oldWeather.remove();

    const weatherContainer = document.createElement("div");
    weatherContainer.classList.add("weather-details-container")

    
    const tempDiv = document.createElement("div");
    tempDiv.classList.add("temp-div");
    tempDiv.textContent = `${weatherObj.temperature}°C`;

    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location-div");
    locationDiv.textContent = weatherObj.address.toUpperCase();

    const descDiv = document.createElement("div");
    descDiv.classList.add("desc-div");
    descDiv.textContent = weatherObj.description;

    const humidityDiv = document.createElement("div");
    humidityDiv.classList.add("humidity-div");
    humidityDiv.textContent = `Humidity: ${weatherObj.humidity}%`;

    const currentConditionDiv = document.createElement("div");
    currentConditionDiv.classList.add("currentCondition-div");
    currentConditionDiv.textContent = `Current Condition: ${weatherObj.currentCondition}`;

    const feelsLikeDiv = document.createElement("div");
    feelsLikeDiv.classList.add("feelsLike-div");
    feelsLikeDiv.textContent = `Feels like ${weatherObj.feelsLike}°C`;

    const condition = weatherObj.currentCondition.toLowerCase();

    
    if (condition.includes('sunny') || condition.includes('clear')) {
        body.style.backgroundImage = `url(${sunnyImg})`;
    } else if (condition.includes('cloudy') || condition.includes('overcast') || condition.includes('Partially cloudy')) {
        body.style.backgroundImage = `url(${overcastImg})`;
    } else if (condition.includes('rainy') || condition.includes('rain')) {
        body.style.backgroundImage = `url(${rainImg})`;
    }

    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    
    weatherContainer.appendChild(tempDiv);
    weatherContainer.appendChild(locationDiv);
    weatherContainer.appendChild(descDiv);
    weatherContainer.appendChild(humidityDiv);
    weatherContainer.appendChild(currentConditionDiv);
    weatherContainer.appendChild(feelsLikeDiv);
    
    console.log(mainContainer.children)

    mainContainer.appendChild(weatherContainer);

}