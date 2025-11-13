import { getLocationFromUser } from './getLocationFromUser.js'

const  fetch_weather = async function() {
    const location = getLocationFromUser();
    
    const apiKey = 'LYXRQ73KS7WH5K96L6VSA8GZ3';    
    const fetchURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}`;
    
    const response = await fetch(fetchURL);
    
    const result = await response.json();

    return result;
}
    
export { fetch_weather };