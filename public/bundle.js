/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/add-card.js":
/*!************************************!*\
  !*** ./src/components/add-card.js ***!
  \************************************/
/*! exports provided: createAddElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAddElement", function() { return createAddElement; });
/* harmony import */ var _mock_add_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/add-card */ "./src/mock/add-card.js");

const description = Object(_mock_add_card__WEBPACK_IMPORTED_MODULE_0__["createDescription"])();

const createAddElement = () => {
  return (
    `
      <form class="trip-events__item  event  event--edit" action="#" method="post">
            <header class="event__header">
              <div class="event__type-wrapper">
                <label class="event__type  event__type-btn" for="event-type-toggle-1">
                  <span class="visually-hidden">Choose event type</span>
                  <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
                </label>
                <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                <div class="event__type-list">
                  <fieldset class="event__type-group">
                    <legend class="visually-hidden">Transfer</legend>

                    <div class="event__type-item">
                      <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                      <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                      <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                      <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                      <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
                      <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                      <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                      <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                    </div>
                  </fieldset>

                  <fieldset class="event__type-group">
                    <legend class="visually-hidden">Activity</legend>

                    <div class="event__type-item">
                      <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                      <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                      <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                    </div>

                    <div class="event__type-item">
                      <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                      <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div class="event__field-group  event__field-group--destination">
                <label class="event__label  event__type-output" for="event-destination-1">
                  Sightseeing at
                </label>
                <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
                <datalist id="destination-list-1">
                  <option value="Amsterdam"></option>
                  <option value="Geneva"></option>
                  <option value="Chamonix"></option>
                  <option value="Saint Petersburg"></option>
                </datalist>
              </div>

              <div class="event__field-group  event__field-group--time">
                <label class="visually-hidden" for="event-start-time-1">
                  From
                </label>
                <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">
                &mdash;
                <label class="visually-hidden" for="event-end-time-1">
                  To
                </label>
                <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">
              </div>

              <div class="event__field-group  event__field-group--price">
                <label class="event__label" for="event-price-1">
                  <span class="visually-hidden">Price</span>
                  &euro;
                </label>
                <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
              </div>

              <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
              <button class="event__reset-btn" type="reset">Cancel</button>
            </header>
            <section class="event__details">

              <section class="event__section  event__section--offers">
                <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                <div class="event__available-offers">
                  <div class="event__offer-selector">
                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
                    <label class="event__offer-label" for="event-offer-luggage-1">
                      <span class="event__offer-title">Add luggage</span>
                      &plus;
                      &euro;&nbsp;<span class="event__offer-price">30</span>
                    </label>
                  </div>

                  <div class="event__offer-selector">
                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>
                    <label class="event__offer-label" for="event-offer-comfort-1">
                      <span class="event__offer-title">Switch to comfort class</span>
                      &plus;
                      &euro;&nbsp;<span class="event__offer-price">100</span>
                    </label>
                  </div>

                  <div class="event__offer-selector">
                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
                    <label class="event__offer-label" for="event-offer-meal-1">
                      <span class="event__offer-title">Add meal</span>
                      &plus;
                      &euro;&nbsp;<span class="event__offer-price">15</span>
                    </label>
                  </div>

                  <div class="event__offer-selector">
                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
                    <label class="event__offer-label" for="event-offer-seats-1">
                      <span class="event__offer-title">Choose seats</span>
                      &plus;
                      &euro;&nbsp;<span class="event__offer-price">5</span>
                    </label>
                  </div>

                  <div class="event__offer-selector">
                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
                    <label class="event__offer-label" for="event-offer-train-1">
                      <span class="event__offer-title">Travel by train</span>
                      &plus;
                      &euro;&nbsp;<span class="event__offer-price">40</span>
                    </label>
                  </div>
                </div>
              </section>

              <section class="event__section  event__section--destination">
                <section class="event__section  event__section--destination">
                        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                        <p class="event__destination-description">${description}</p>
                        
                <div class="event__photos-container">
                  <div class="event__photos-tape">
                            <img class="event__photo" src="http://picsum.photos/300/200?r=${Math.random()}" alt="Event photo">
                            <img class="event__photo" src="http://picsum.photos/300/200?r=${Math.random()}" alt="Event photo">
                            <img class="event__photo" src="http://picsum.photos/300/200?r=${Math.random()}" alt="Event photo">
                            <img class="event__photo" src="http://picsum.photos/300/200?r=${Math.random()}" alt="Event photo">
                            <img class="event__photo" src="http://picsum.photos/300/200?r=${Math.random()}" alt="Event photo">
                  </div>
                </div>
              </section>
            </section>
          </form>
    `
  );
};


/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/*! exports provided: createElementCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementCard", function() { return createElementCard; });
const createElementCard = (index) => {
  return (`
          <li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${index}</span>
                <time class="day__date" datetime="2019-03-18">MAR 18</time>
              </div>
              
              
            </li>
  
  `);
};


/***/ }),

/***/ "./src/components/filter-trip.js":
/*!***************************************!*\
  !*** ./src/components/filter-trip.js ***!
  \***************************************/
/*! exports provided: createElementFilterTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementFilterTrip", function() { return createElementFilterTrip; });
const createFilterTripMarkup = (nameFilter, isChecked) => {


  return (
    `
          <div class="trip-sort__item  trip-sort__item--${nameFilter}">
              <input id="sort-${nameFilter}" 
              class="trip-sort__input  visually-hidden" 
              type="radio" 
              name="trip-sort" 
              value="sort-${nameFilter}"
              ${isChecked ? `checked` : ``}
              >
              <label class="trip-sort__btn" for="sort-${nameFilter}">
                ${nameFilter}
                <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                  <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
                </svg>
              </label>
            </div>
    `
  );
};


const createElementFilterTrip = (filters) => {

  const filtersMarkup = filters.map((it, i) => createFilterTripMarkup(it, i === 0)).join(`\n`);

  return (`
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <span class="trip-sort__item  trip-sort__item--day">Day</span>

            ${filtersMarkup}

            <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
          </form>
  `);
};


/***/ }),

/***/ "./src/components/filter.js":
/*!**********************************!*\
  !*** ./src/components/filter.js ***!
  \**********************************/
/*! exports provided: createElementFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementFilter", function() { return createElementFilter; });
const createFilterMarkup = (name, isChecked) => {

  return (
    `
              <div class="trip-filters__filter">
                <input id="filter-${name}" 
                class="trip-filters__filter-input  visually-hidden" 
                type="radio" 
                name="trip-filter" 
                value="${name}" 
                ${isChecked ? `checked` : ``}>
                <label class="trip-filters__filter-label" for="filter-everything">${name}</label>
              </div>
      `
  );
};

const createElementFilter = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);


  return (
    `
      <form class="trip-filters" action="#" method="get">
              ${filtersMarkup}
    `
  );
};


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createElementMenu = () => {
  return (

    `
      <nav class="trip-controls__trip-tabs  trip-tabs">
              <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
              <a class="trip-tabs__btn" href="#">Stats</a>
            </nav>
`);
};

class SiteMenu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createElementMenu();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

}


/***/ }),

/***/ "./src/components/point-route-list.js":
/*!********************************************!*\
  !*** ./src/components/point-route-list.js ***!
  \********************************************/
/*! exports provided: createPointRouteList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPointRouteList", function() { return createPointRouteList; });
const createPointRouteList = () => {
  return (
    `
    <ul class="trip-events__list">
     
              </ul>
    `
  );
};


/***/ }),

/***/ "./src/components/point-route.js":
/*!***************************************!*\
  !*** ./src/components/point-route.js ***!
  \***************************************/
/*! exports provided: createPointRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPointRoute", function() { return createPointRoute; });
const createPointRoute = (point) => {
  const {eventType, timeFirst, timeSecond, price, offers, city} = point;
  const type = eventType[0];
  const typeDesc = eventType[2];
  const typeImage = eventType[1];
  const offer = offers.filter((item) => {
    return item.type === type;
  });

  let str = ``;

  for (let i = 0; i < offer.length; i++) {
    if (offer[i].desc !== `` || offer[i].price !== ``) {
      str += `<li class="event__offer">
                        <span class="event__offer-title">${offer[i].desc}</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">${offer[i].price}</span>
                       </li>
        `;
    } else {
      str = ``;
    }
  }

  let place = ``;

  if (type !== `Taxi` && type !== `Check` && type !== `Restaurant` && type !== `Sightseeing`) {
    place = city;
  } else {
    place = ``;
  }

  return (
    `
    <li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="${typeImage}" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${typeDesc} ${place}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T10:30">${timeFirst}</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T11:00">${timeSecond}</time>
                      </p>
                      <p class="event__duration">1H 30M</p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">${price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                            ${str}
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>
    `
  );
};


/***/ }),

/***/ "./src/components/route.js":
/*!*********************************!*\
  !*** ./src/components/route.js ***!
  \*********************************/
/*! exports provided: createElementRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementRoute", function() { return createElementRoute; });
const createElementRoute = (dayCounter, city) => {

  const getCounter = () => {
    let firstDay;
    let lastDay;
    dayCounter.forEach((item, index, array) => {
      firstDay = array[0].textContent;
      lastDay = array[array.length - 1].textContent;
    });
    return {firstDay, lastDay};
  };

  const {firstDay, lastDay} = getCounter();

  let gorod = city.map((item) => item.city);

  if (gorod.length > 2) {
    gorod = `${gorod[0]} &mdash; ... &mdash; ${gorod[gorod.length - 1]}`;
  } else {
    gorod = `${gorod[0]} &mdash; ${gorod[1]}`;
  }

  return (
    `
        <div class="trip-info__main">
              <h1 class="trip-info__title">${gorod}</h1>
                <p class="trip-info__dates">Mar ${firstDay}&nbsp;&mdash;&nbsp;${lastDay}</p>
            </div>
    `
  );
};


/***/ }),

/***/ "./src/components/task-content.js":
/*!****************************************!*\
  !*** ./src/components/task-content.js ***!
  \****************************************/
/*! exports provided: createElementContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementContent", function() { return createElementContent; });
const createElementContent = () => {
  return (
    `
      <ul class="trip-days">
          </ul>
    `
  );
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/route */ "./src/components/route.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter */ "./src/components/filter.js");
/* harmony import */ var _components_filter_trip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filter-trip */ "./src/components/filter-trip.js");
/* harmony import */ var _components_task_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task-content */ "./src/components/task-content.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card */ "./src/components/card.js");
/* harmony import */ var _components_add_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-card */ "./src/components/add-card.js");
/* harmony import */ var _mock_point_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/point-route */ "./src/mock/point-route.js");
/* harmony import */ var _components_point_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/point-route */ "./src/components/point-route.js");
/* harmony import */ var _components_point_route_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/point-route-list */ "./src/components/point-route-list.js");
/* harmony import */ var _mock_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock/filter */ "./src/mock/filter.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

















const COUNTCARD = 3;
const COUNTPOINTROUTE = 5;
const points = Object(_mock_point_route__WEBPACK_IMPORTED_MODULE_7__["generatePoints"])(COUNTPOINTROUTE);
// const render = (container, template, place) => {
//   container.insertAdjacentHTML(place, template);
// };
const tripInfo = document.querySelector(`.trip-info`);
const tripControls = document.querySelector(`.trip-controls`);


const x= new _components_menu__WEBPACK_IMPORTED_MODULE_1__["default"]();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_11__["render"])(tripControls, new _components_menu__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_11__["RenderPosition"].AFTERBEGIN);
// render(tripControls, createElementFilter(filterNames), `beforeend`);
//
// const tripEvents = document.querySelector(`.trip-events`);
// render(tripEvents, createElementFilterTrip(filterTripNames), `afterbegin`);
// render(tripEvents, createElementContent(), `beforeend`);
// const contentCard = document.querySelector(`.trip-days`);
//
//
// new Array(COUNTCARD).fill(``).forEach(
//     (item, index) => render(contentCard, createElementCard(index + 1), `beforeend`));
//
// const tripSort = document.querySelector(`.trip-events__trip-sort`);
//
// render(tripSort, createAddElement(), `afterend`);
// const tripCard = document.querySelectorAll(`.trip-days__item`);
//
//
// tripCard.forEach((element) => render(element, createPointRouteList(), `beforeend`));
// const tripEventList = document.querySelectorAll(`.trip-events__list`);
//
// points.forEach((task) => tripEventList.forEach((element) => render(element, createPointRoute(task), `beforeend`)));
//
// const dayCounter = document.querySelectorAll(`.day__counter`);
//
// render(tripInfo, createElementRoute(dayCounter, points), `afterbegin`);
//
// let totalPrice = points.reduce((acc, item) => acc + item.price, 0);
// const total = document.querySelector(`.trip-info__cost-value`);
// total.textContent = totalPrice;
//
//


/***/ }),

/***/ "./src/mock/add-card.js":
/*!******************************!*\
  !*** ./src/mock/add-card.js ***!
  \******************************/
/*! exports provided: createDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDescription", function() { return createDescription; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const description = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];



const createDescription = () => {
  let string = ``;
  for (let i = 0; i < 3; i++) {
    string += Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayItem"])(description) + ` `;
  }
  return string;
};



/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: filterNames, filterTripNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNames", function() { return filterNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTripNames", function() { return filterTripNames; });
const filterNames = [`everything`, `future`, `past`];
const filterTripNames = [`event`, `time`, `price`];




/***/ }),

/***/ "./src/mock/point-route.js":
/*!*********************************!*\
  !*** ./src/mock/point-route.js ***!
  \*********************************/
/*! exports provided: generatePoint, generatePoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePoint", function() { return generatePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePoints", function() { return generatePoints; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const eventType = [
  [`Taxi`, `./img/icons/taxi.png`, `Taxi to airport`],
  [`Flight`, `./img/icons/flight.png`, `Flight to`],
  [`Drive`, `./img/icons/drive.png`, `Drive to`],
  [`Ship`, `./img/icons/ship.png`, `Ship to`],
  [`Bus`, `./img/icons/bus.png`, `Bus to`],
  [`Check`, `./img/icons/check-in.png`, `Check into hotel`],
  [`Restaurant`, `./img/icons/restaurant.png`, `Restaurant`],
  [`Sightseeing`, `./img/icons/sightseeing.png`, `Natural History Museum`],
  [`Train`, `./img/icons/train.png`, `Train to`],
  [`Transport`, `./img/icons/transport.png`, `Transport to`],
  [`Trip`, `./img/icons/sightseeing.png`, `Trip to`]
];

const CITY = [`Amsterdam`, `Geneva`, `Chamonix`];
const PRICE = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
let date = new Date(2019, 3, 18, 10, 30);
const OFFERS = [
  {
    type: `Taxi`,
    desc: `Order Uber`,
    price: 20
  },
  {
    type: `Flight`,
    desc: `Add luggage`,
    price: 50
  },
  {
    type: `Flight`,
    desc: `Switch to comfort class`,
    price: 150
  },
  {
    type: `Drive`,
    desc: `Rent a car`,
    price: 80
  },
  {
    type: `Ship`,
    desc: ``,
    price: ``
  },
  {
    type: `Bus`,
    desc: ``,
    price: ``
  },
  {
    type: `Check`,
    desc: ``,
    price: ``
  },
  {
    type: `Train`,
    desc: `Choose seats`,
    price: 9
  },
  {
    type: `Transport`,
    desc: ``,
    price: ``
  },
  {
    type: `Trip`,
    desc: ``,
    price: ``
  },
  {
    type: `Restaurant`,
    desc: ``,
    price: ``
  },
  {
    type: `Hotel`,
    desc: `Add breakfast`,
    price: 50
  },
  {
    type: `Hotel`,
    desc: `Add meal`,
    price: 2
  },
  {
    type: `Sightseeing`,
    desc: `Book tickets`,
    price: 40
  },
  {
    type: `Sightseeing`,
    desc: `Lunch in city`,
    price: 30
  },
];

const generatePoint = () => {
  return {
    eventType: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayItem"])(eventType),
    timeFirst: `${date.getHours()}:${date.getMinutes()}`,
    timeSecond: `${date.getHours()}:${date.getMinutes() + 15}`,
    price: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayItem"])(PRICE),
    offers: OFFERS,
    city: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayItem"])(CITY)
  };
};

const generatePoints = (count) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(generatePoint());
  }
  return arr;
};





/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomArrayItem, RenderPosition, createElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayItem", function() { return getRandomArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map