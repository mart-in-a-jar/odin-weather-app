import { getLocation } from "./position";
import { getIcon, getWeatherData } from "./weatherdata";
import {
    displayLoading,
    guiElements,
    searchError,
    styleTemperature,
} from "./gui";
import * as util from "./utils";

let coords = {};

async function loadWeatherData(searchString, coords) {
    document.querySelector(".error").textContent = "";
    displayLoading();
    if (!coords) {
        coords = {};
    }
    if (!searchString && (!coords.latitude || !coords.longitude)) {
        searchString = "Oslo";
    }
    const weatherdata = await getWeatherData(
        searchString,
        coords.latitude || null,
        coords.longitude || null
    ).catch((e) => {
        if (e.message === "city not found") {
            searchError(e.message);
            displayLoading();
            throw new Error(e.message);
        }
    });

    guiElements.weatherIcon.src = getIcon(weatherdata.weather[0].icon, true);
    guiElements.city.textContent = weatherdata.name;
    guiElements.description.textContent = util.capitalize(
        weatherdata.weather[0].description
    );
    guiElements.currentTemp.textContent = util.round(weatherdata.main.temp);
    guiElements.feelsLike.textContent = util.round(weatherdata.main.feels_like);
    guiElements.pressure.textContent = weatherdata.main.pressure;
    guiElements.humidity.textContent = weatherdata.main.humidity;
    guiElements.windSpeed.textContent = weatherdata.wind.speed;
    guiElements.sunrise.textContent = util.formatDate(weatherdata.sys.sunrise);
    guiElements.sunset.textContent = util.formatDate(weatherdata.sys.sunset);
    guiElements.timestamp.textContent = util.formatDate(weatherdata.dt);
    guiElements.country.textContent = weatherdata.sys.country;

    styleTemperature([guiElements.currentTemp, guiElements.feelsLike]);

    displayLoading();
}

guiElements.locator.addEventListener("click", () => {
    document.querySelector("#search").value = "";
    getLocation()
        .then((data) => {
            coords = data;
            loadWeatherData(null, coords);
        })
        .catch(() => {
            // Do nothing if user do not give location permission
        });
});

const searchField = document.querySelector("#search");
searchField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        loadWeatherData(searchField.value);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    loadWeatherData(null, coords);
});