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
    const weatherContainer = document.querySelector(".weather-details-container");

    const tempDiv = document.createElement("div");
    tempDiv.classList.add("temp-div");
    tempDiv.textContent = weatherObj.temperature;

    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location-div");
    locationDiv.textContent = weatherObj.address;

    const descDiv = document.createElement("div");
    descDiv.classList.add("desc-div");
    descDiv.textContent = weatherObj.description;

    const humidityDiv = document.createElement("div");
    humidityDiv.classList.add("humidity-div");
    humidityDiv.textContent = weatherObj.humidity;

    const currentConditionDiv = document.createElement("div");
    currentConditionDiv.classList.add("currentCondition-div");
    currentConditionDiv.textContent = weatherObj.currenConditions;

    const feelsLikeDiv = document.createElement("div");
    feelsLikeDiv.classList.add("feelsLike-div");
    feelsLikeDiv.textContent = weatherObj.feelsLike;

    weatherContainer.appendChild(tempDiv);
    weatherContainer.appendChild(locationDiv);
    weatherContainer.appendChild(descDiv);
    weatherContainer.appendChild(humidityDiv);
    weatherContainer.appendChild(currentConditionDiv);
    weatherContainer.appendChild(feelsLikeDiv);

    
}