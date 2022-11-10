import { displayLoading } from "./gui";

function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

async function getLocation() {
    displayLoading();
    try {
        const loc = await getPosition();
        return loc.coords;
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    } finally {
        displayLoading();
    }
}

export { getLocation };
