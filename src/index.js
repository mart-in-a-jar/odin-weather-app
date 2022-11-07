import { getLocation } from "./position";
import { getIcon, getWeatherData } from "./weatherdata";

async function loadWeatherData(searchString) {
    const coords = await getLocation();
    const weatherdata = await getWeatherData(searchString, coords.latitude, coords.longitude);

    const icon = document.createElement("img");
    icon.src = getIcon(weatherdata.weather[0].icon, true);
    document.body.appendChild(icon);
}

loadWeatherData();
