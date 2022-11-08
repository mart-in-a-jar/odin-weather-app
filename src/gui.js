export const guiElements = {
    weatherIcon: document.querySelector(".icon"),
    city: document.querySelector(".place"),
    description: document.querySelector(".weather-description"),
    currentTemp: document.querySelector(".current-temp"),
    feelsLike: document.querySelector(".feels-like-temp"),
    minTemp: document.querySelector(".temp-min"),
    maxTemp: document.querySelector(".temp-max"),
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

export { displayLoading };
