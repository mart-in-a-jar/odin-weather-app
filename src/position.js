function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

async function getLocation() {
    try {
        const loc = await getPosition();
        return loc.coords;
    } catch (error) {
        console.error(error);
        console.error(error.message);
    }
}

let location;
getLocation().then((r) => {
    location = `Lat: ${r.coords.latitude} Lon: ${r.coords.longitude}`;
    console.log(location);
});

export { getLocation };
