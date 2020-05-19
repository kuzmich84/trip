import {createElement} from "../utils";

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

  if (gorod.length > 3) {
    gorod = `${gorod[0]} &mdash; ... &mdash; ${gorod[gorod.length - 1]}`;
  } else {
    gorod = `${gorod[0]} &mdash; ${gorod[1]}`;
  }

  return (
    `<div class="trip-info__main">
              <h1 class="trip-info__title">${gorod}</h1>
                <p class="trip-info__dates">Mar ${firstDay}&nbsp;&mdash;&nbsp;${lastDay}</p>
            </div>`
  );
};

export default class Route {
  constructor(dayCounter, city) {
    this._element = null;
    this._dayCounter = dayCounter;
    this._city = city;
  }

  getTemplate() {
    return createElementRoute(this._dayCounter, this._city);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

