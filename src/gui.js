import { capitalize } from "./utils";

export const guiElements = {
    weatherIcon: document.querySelector(".icon"),
    city: document.querySelector(".place"),
    description: document.querySelector(".weather-description"),
    currentTemp: document.querySelector(".current-temp"),
    feelsLike: document.querySelector(".feels-like-temp"),
    pressure: document.querySelector(".pressure"),
    humidity: document.querySelector(".humidity"),
    windSpeed: document.querySelector(".wind-speed"),
    sunrise: document.querySelector(".sunrise"),
    sunset: document.querySelector(".sunset"),
    timestamp: document.querySelector(".timestamp"),
    country: document.querySelector(".country"),
    locator: document.querySelector(".locator")
};

function displayLoading() {
    const spinner = document.querySelector(".loading");
    spinner.classList.toggle("active");
}

function searchError(text) {
    const warning = document.querySelector(".error");
    warning.textContent = capitalize(text + "!");
}

function styleTemperature(elements) {
    for (let ele of elements) {
        ele.parentNode.style.color = ele.textContent > 0 ? "red" : "blue";
    }
}

export { displayLoading, searchError, styleTemperature };

// veksle mellom error message og vær-data
// knapp for hent min posisjon
// styling
