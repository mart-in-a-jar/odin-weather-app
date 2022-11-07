/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        console.error(error);
        console.error(error.message);
    }
}

let location;
getLocation().then((r) => {
    location = `Lat: ${r.coords.latitude} Lon: ${r.coords.longitude}`;
    console.log(location);
});




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



async function loadWeatherData(searchString) {
    const coords = await (0,_position__WEBPACK_IMPORTED_MODULE_0__.getLocation)();
    const weatherdata = await (0,_weatherdata__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(searchString, coords.latitude, coords.longitude);

    const icon = document.createElement("img");
    icon.src = (0,_weatherdata__WEBPACK_IMPORTED_MODULE_1__.getIcon)(weatherdata.weather[0].icon, true);
    document.body.appendChild(icon);
}

loadWeatherData();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQixPQUFPLG1CQUFtQjtBQUNwRTtBQUNBLENBQUM7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsK0JBQStCLElBQUk7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSyxFQUFFLEtBQUs7QUFDM0Q7OztBQUdtQzs7Ozs7OztVQ2hDbkM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDZTs7QUFFeEQ7QUFDQSx5QkFBeUIsc0RBQVc7QUFDcEMsOEJBQThCLDREQUFjOztBQUU1QztBQUNBLGVBQWUscURBQU87QUFDdEI7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyZGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGxvYyA9IGF3YWl0IGdldFBvc2l0aW9uKCk7XG4gICAgICAgIHJldHVybiBsb2MuY29vcmRzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxubGV0IGxvY2F0aW9uO1xuZ2V0TG9jYXRpb24oKS50aGVuKChyKSA9PiB7XG4gICAgbG9jYXRpb24gPSBgTGF0OiAke3IuY29vcmRzLmxhdGl0dWRlfSBMb246ICR7ci5jb29yZHMubG9uZ2l0dWRlfWA7XG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xufSk7XG5cbmV4cG9ydCB7IGdldExvY2F0aW9uIH07XG4iLCJjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZ1wiO1xuY29uc3QgYXBpS2V5ID0gXCJkYTA4ZmFlMWMyMmUzYTRlM2M2ODQxMWNmMzFmNjI2Y1wiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShzZWFyY2hTdHJpbmcsIGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgQVBQSUQ6IGFwaUtleSxcbiAgICAgICAgbGF0OiBsYXRpdHVkZSB8fCBcIlwiLFxuICAgICAgICBsb246IGxvbmdpdHVkZSB8fCBcIlwiLFxuICAgICAgICBxOiBzZWFyY2hTdHJpbmcgfHwgXCJcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KGAke3VybH0vZGF0YS8yLjUvd2VhdGhlcj9gICsgcGFyYW1zKTtcbiAgICBjb25zb2xlLmxvZyhyZXEudXJsKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXEpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9udCB3aXRoIGFwaSBjYWxsXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBcIiwgZXJyb3IpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SWNvbihjb2RlLCBkb3VibGVTaXplID0gZmFsc2UpIHtcbiAgICBjb25zdCBzaXplID0gZG91YmxlU2l6ZSA/IFwiQDJ4XCIgOiBcIlwiO1xuICAgIHJldHVybiBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtjb2RlfSR7c2l6ZX0ucG5nYDtcbn1cblxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZ2V0SWNvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRMb2NhdGlvbiB9IGZyb20gXCIuL3Bvc2l0aW9uXCI7XG5pbXBvcnQgeyBnZXRJY29uLCBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL3dlYXRoZXJkYXRhXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRXZWF0aGVyRGF0YShzZWFyY2hTdHJpbmcpIHtcbiAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IHdlYXRoZXJkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoc2VhcmNoU3RyaW5nLCBjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGUpO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaWNvbi5zcmMgPSBnZXRJY29uKHdlYXRoZXJkYXRhLndlYXRoZXJbMF0uaWNvbiwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpY29uKTtcbn1cblxubG9hZFdlYXRoZXJEYXRhKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=