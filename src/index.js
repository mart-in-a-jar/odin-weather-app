import { getLocation } from "./position";
import { getIcon, getWeatherData } from "./weatherdata";
import { displayLoading, guiElements } from "./gui";
import * as util from "./utils";

let coords = {};

async function loadWeatherData(searchString, coords) {
    displayLoading();
    if (!searchString && (!coords.latitude || !coords.longitude)) {
        searchString = "Oslo";
    }
    const weatherdata = await getWeatherData(
        searchString,
        coords.latitude || null,
        coords.longitude || null
    );

    guiElements.weatherIcon.src = getIcon(weatherdata.weather[0].icon, true);
    guiElements.city.textContent = weatherdata.name;
    guiElements.description.textContent = util.capitalize(
        weatherdata.weather[0].description
    );
    guiElements.currentTemp.textContent = util.round(weatherdata.main.temp);
    guiElements.feelsLike.textContent = util.round(weatherdata.main.feels_like);
    guiElements.minTemp.textContent = util.round(weatherdata.main.temp_min);
    guiElements.maxTemp.textContent = util.round(weatherdata.main.temp_max);
    guiElements.pressure.textContent = weatherdata.main.pressure;
    guiElements.humidity.textContent = weatherdata.main.humidity;
    guiElements.windSpeed.textContent = weatherdata.wind.speed;
    guiElements.sunrise.textContent = util.formatDate(weatherdata.sys.sunrise);
    guiElements.sunset.textContent = util.formatDate(weatherdata.sys.sunset);
    guiElements.timestamp.textContent = util.formatDate(weatherdata.dt);

    displayLoading();
}

document.addEventListener("DOMContentLoaded", () => {
    getLocation()
        .then((data) => {
            coords = data;
            loadWeatherData(null, coords);
        })
        .catch(() => {
            // Do nothing if user do not give location permission
        });
});

loadWeatherData(null, coords);
