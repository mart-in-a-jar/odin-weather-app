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
};

function displayLoading() {
    const spinner = document.querySelector(".loading");
    spinner.classList.toggle("active");
}

function searchError(text) {
    const warning = document.querySelector(".error");
    warning.textContent = capitalize(text + "!");
}

export { displayLoading, searchError };


// veksle mellom error message og vær-data
// knapp for hent min posisjon
// styling