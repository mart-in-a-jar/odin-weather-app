const url = "https://api.openweathermap.org";
const apiKey = "da08fae1c22e3a4e3c68411cf31f626c";

async function getWeatherData(searchString, latitude, longitude) {
    const params = new URLSearchParams({
        APPID: apiKey,
        lat: latitude || "",
        lon: longitude || "",
        q: searchString || "",
    });

    const req = new Request(`${url}/data/2.5/weather?` + params);
    console.log(req.url)

    try {
        const response = await fetch(req);
        const data = await response.json();
        if (!response.ok) {
            throw new Error("Something went wront with api call");
        }
        return data;
    } catch (error) {
        console.error("Error ", error);
    }
}

function getIcon(code, doubleSize = false) {
    const size = doubleSize ? "@2x" : "";
    return `http://openweathermap.org/img/wn/${code}${size}.png`;
}


export { getWeatherData, getIcon };
