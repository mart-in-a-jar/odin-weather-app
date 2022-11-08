/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gui.js":
/*!********************!*\
  !*** ./src/gui.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayLoading": () => (/* binding */ displayLoading),
/* harmony export */   "guiElements": () => (/* binding */ guiElements)
/* harmony export */ });
const guiElements = {
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

/* function searchError() {

} */




/***/ }),

/***/ "./src/position.js":
/*!*************************!*\
  !*** ./src/position.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocation": () => (/* binding */ getLocation)
/* harmony export */ });
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
        console.error(error.message);
        throw new Error(error);
    }
}




/***/ }),

/***/ "./src/weatherdata.js":
/*!****************************!*\
  !*** ./src/weatherdata.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIcon": () => (/* binding */ getIcon),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
const url = "https://api.openweathermap.org";
const apiKey = "da08fae1c22e3a4e3c68411cf31f626c";

async function getWeatherData(searchString, latitude, longitude) {
    const params = new URLSearchParams({
        APPID: apiKey,
        lat: latitude || "",
        lon: longitude || "",
        q: searchString || "",
        units: "metric",
        lang: "no",
    });

    const req = new Request(`${url}/data/2.5/weather?` + params);
    try {
        const response = await fetch(req);
        const data = await response.json();
        if (!response.ok) {
            if (data.cod == 404) {
                throw new Error(data.message);
            }
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position */ "./src/position.js");
/* harmony import */ var _weatherdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherdata */ "./src/weatherdata.js");
/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gui */ "./src/gui.js");



// import * as util from "./utils";

let coords = {};

async function loadWeatherData(searchString, coords) {
    (0,_gui__WEBPACK_IMPORTED_MODULE_2__.displayLoading)();
    if (!coords) {
        coords = {};
    }
    if (!searchString && (!coords.latitude || !coords.longitude)) {
        searchString = "Oslo";
    }
    const weatherdata = await (0,_weatherdata__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(
        searchString,
        coords.latitude || null,
        coords.longitude || null
    );

    _gui__WEBPACK_IMPORTED_MODULE_2__.guiElements.weatherIcon.src = (0,_weatherdata__WEBPACK_IMPORTED_MODULE_1__.getIcon)(weatherdata.weather[0].icon, true);
    _gui__WEBPACK_IMPORTED_MODULE_2__.guiElements.city.textContent = weatherdata.name;
    // guiElements.description.textContent = util.capitalize(
    //     weatherdata.weather[0].description
    // );
    // guiElements.currentTemp.textContent = util.round(weatherdata.main.temp);
    // guiElements.feelsLike.textContent = util.round(weatherdata.main.feels_like);
    // guiElements.minTemp.textContent = util.round(weatherdata.main.temp_min);
    // guiElements.maxTemp.textContent = util.round(weatherdata.main.temp_max);
    // guiElements.pressure.textContent = weatherdata.main.pressure;
    // guiElements.humidity.textContent = weatherdata.main.humidity;
    // guiElements.windSpeed.textContent = weatherdata.wind.speed;
    // guiElements.sunrise.textContent = util.formatDate(weatherdata.sys.sunrise);
    // guiElements.sunset.textContent = util.formatDate(weatherdata.sys.sunset);
    // guiElements.timestamp.textContent = util.formatDate(weatherdata.dt);

    (0,_gui__WEBPACK_IMPORTED_MODULE_2__.displayLoading)();
}

document.addEventListener("DOMContentLoaded", () => {
    (0,_position__WEBPACK_IMPORTED_MODULE_0__.getLocation)()
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

loadWeatherData(null, coords);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCwrQkFBK0IsSUFBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxLQUFLLEVBQUUsS0FBSztBQUMzRDs7QUFFbUM7Ozs7Ozs7VUNsQ25DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNlO0FBQ0o7QUFDcEQ7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLG9EQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0REFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDZEQUEyQixHQUFHLHFEQUFPO0FBQ3pDLElBQUksOERBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksb0RBQWM7QUFDbEI7O0FBRUE7QUFDQSxJQUFJLHNEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvZ3VpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyZGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ3VpRWxlbWVudHMgPSB7XG4gICAgd2VhdGhlckljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvblwiKSxcbiAgICBjaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlXCIpLFxuICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZGVzY3JpcHRpb25cIiksXG4gICAgY3VycmVudFRlbXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC10ZW1wXCIpLFxuICAgIGZlZWxzTGlrZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVscy1saWtlLXRlbXBcIiksXG4gICAgbWluVGVtcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLW1pblwiKSxcbiAgICBtYXhUZW1wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtbWF4XCIpLFxuICAgIHByZXNzdXJlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXNzdXJlXCIpLFxuICAgIGh1bWlkaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpLFxuICAgIHdpbmRTcGVlZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLXNwZWVkXCIpLFxuICAgIHN1bnJpc2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VucmlzZVwiKSxcbiAgICBzdW5zZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Vuc2V0XCIpLFxuICAgIHRpbWVzdGFtcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lc3RhbXBcIiksXG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5TG9hZGluZygpIHtcbiAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nXCIpO1xuICAgIHNwaW5uZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn1cblxuLyogZnVuY3Rpb24gc2VhcmNoRXJyb3IoKSB7XG5cbn0gKi9cblxuZXhwb3J0IHsgZGlzcGxheUxvYWRpbmcgfTtcbiIsImZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbG9jID0gYXdhaXQgZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgcmV0dXJuIGxvYy5jb29yZHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGdldExvY2F0aW9uIH07XG4iLCJjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZ1wiO1xuY29uc3QgYXBpS2V5ID0gXCJkYTA4ZmFlMWMyMmUzYTRlM2M2ODQxMWNmMzFmNjI2Y1wiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShzZWFyY2hTdHJpbmcsIGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgQVBQSUQ6IGFwaUtleSxcbiAgICAgICAgbGF0OiBsYXRpdHVkZSB8fCBcIlwiLFxuICAgICAgICBsb246IGxvbmdpdHVkZSB8fCBcIlwiLFxuICAgICAgICBxOiBzZWFyY2hTdHJpbmcgfHwgXCJcIixcbiAgICAgICAgdW5pdHM6IFwibWV0cmljXCIsXG4gICAgICAgIGxhbmc6IFwibm9cIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KGAke3VybH0vZGF0YS8yLjUvd2VhdGhlcj9gICsgcGFyYW1zKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmNvZCA9PSA0MDQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb250IHdpdGggYXBpIGNhbGxcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIFwiLCBlcnJvcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRJY29uKGNvZGUsIGRvdWJsZVNpemUgPSBmYWxzZSkge1xuICAgIGNvbnN0IHNpemUgPSBkb3VibGVTaXplID8gXCJAMnhcIiA6IFwiXCI7XG4gICAgcmV0dXJuIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2NvZGV9JHtzaXplfS5wbmdgO1xufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZ2V0SWNvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRMb2NhdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5pbXBvcnQgeyBnZXRJY29uLCBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL3dlYXRoZXJkYXRhXCI7XG5pbXBvcnQgeyBkaXNwbGF5TG9hZGluZywgZ3VpRWxlbWVudHMgfSBmcm9tIFwiLi9ndWlcIjtcbi8vIGltcG9ydCAqIGFzIHV0aWwgZnJvbSBcIi4vdXRpbHNcIjtcblxubGV0IGNvb3JkcyA9IHt9O1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkV2VhdGhlckRhdGEoc2VhcmNoU3RyaW5nLCBjb29yZHMpIHtcbiAgICBkaXNwbGF5TG9hZGluZygpO1xuICAgIGlmICghY29vcmRzKSB7XG4gICAgICAgIGNvb3JkcyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXNlYXJjaFN0cmluZyAmJiAoIWNvb3Jkcy5sYXRpdHVkZSB8fCAhY29vcmRzLmxvbmdpdHVkZSkpIHtcbiAgICAgICAgc2VhcmNoU3RyaW5nID0gXCJPc2xvXCI7XG4gICAgfVxuICAgIGNvbnN0IHdlYXRoZXJkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoXG4gICAgICAgIHNlYXJjaFN0cmluZyxcbiAgICAgICAgY29vcmRzLmxhdGl0dWRlIHx8IG51bGwsXG4gICAgICAgIGNvb3Jkcy5sb25naXR1ZGUgfHwgbnVsbFxuICAgICk7XG5cbiAgICBndWlFbGVtZW50cy53ZWF0aGVySWNvbi5zcmMgPSBnZXRJY29uKHdlYXRoZXJkYXRhLndlYXRoZXJbMF0uaWNvbiwgdHJ1ZSk7XG4gICAgZ3VpRWxlbWVudHMuY2l0eS50ZXh0Q29udGVudCA9IHdlYXRoZXJkYXRhLm5hbWU7XG4gICAgLy8gZ3VpRWxlbWVudHMuZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB1dGlsLmNhcGl0YWxpemUoXG4gICAgLy8gICAgIHdlYXRoZXJkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAvLyApO1xuICAgIC8vIGd1aUVsZW1lbnRzLmN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gdXRpbC5yb3VuZCh3ZWF0aGVyZGF0YS5tYWluLnRlbXApO1xuICAgIC8vIGd1aUVsZW1lbnRzLmZlZWxzTGlrZS50ZXh0Q29udGVudCA9IHV0aWwucm91bmQod2VhdGhlcmRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgICAvLyBndWlFbGVtZW50cy5taW5UZW1wLnRleHRDb250ZW50ID0gdXRpbC5yb3VuZCh3ZWF0aGVyZGF0YS5tYWluLnRlbXBfbWluKTtcbiAgICAvLyBndWlFbGVtZW50cy5tYXhUZW1wLnRleHRDb250ZW50ID0gdXRpbC5yb3VuZCh3ZWF0aGVyZGF0YS5tYWluLnRlbXBfbWF4KTtcbiAgICAvLyBndWlFbGVtZW50cy5wcmVzc3VyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJkYXRhLm1haW4ucHJlc3N1cmU7XG4gICAgLy8gZ3VpRWxlbWVudHMuaHVtaWRpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyZGF0YS5tYWluLmh1bWlkaXR5O1xuICAgIC8vIGd1aUVsZW1lbnRzLndpbmRTcGVlZC50ZXh0Q29udGVudCA9IHdlYXRoZXJkYXRhLndpbmQuc3BlZWQ7XG4gICAgLy8gZ3VpRWxlbWVudHMuc3VucmlzZS50ZXh0Q29udGVudCA9IHV0aWwuZm9ybWF0RGF0ZSh3ZWF0aGVyZGF0YS5zeXMuc3VucmlzZSk7XG4gICAgLy8gZ3VpRWxlbWVudHMuc3Vuc2V0LnRleHRDb250ZW50ID0gdXRpbC5mb3JtYXREYXRlKHdlYXRoZXJkYXRhLnN5cy5zdW5zZXQpO1xuICAgIC8vIGd1aUVsZW1lbnRzLnRpbWVzdGFtcC50ZXh0Q29udGVudCA9IHV0aWwuZm9ybWF0RGF0ZSh3ZWF0aGVyZGF0YS5kdCk7XG5cbiAgICBkaXNwbGF5TG9hZGluZygpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgZ2V0TG9jYXRpb24oKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29vcmRzID0gZGF0YTtcbiAgICAgICAgICAgIGxvYWRXZWF0aGVyRGF0YShudWxsLCBjb29yZHMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiB1c2VyIGRvIG5vdCBnaXZlIGxvY2F0aW9uIHBlcm1pc3Npb25cbiAgICAgICAgfSk7XG59KTtcblxuY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKTtcbnNlYXJjaEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgbG9hZFdlYXRoZXJEYXRhKHNlYXJjaEZpZWxkLnZhbHVlKTtcbiAgICB9XG59KTtcblxubG9hZFdlYXRoZXJEYXRhKG51bGwsIGNvb3Jkcyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=