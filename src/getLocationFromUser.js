export const getLocationFromUser = function() {
    const locationInput = document.querySelector('#location')
    console.log(locationInput.value);
    return locationInput.value;
}