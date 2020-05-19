import {createElement, formatTime} from "../utils";

const createPointRoute = (point) => {
  const {eventType, dateFirst, dateEnd, price, offers, city} = point;
  const type = eventType[0];
  const typeDesc = eventType[2];
  const typeImage = eventType[1];
  const offer = offers.filter((item) => {
    return item.type === type[0].toLowerCase() + type.slice(1);
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
    `<li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="${typeImage}" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${typeDesc} ${place}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="2019-03-18T10:30">${formatTime(dateFirst)}</time>
                        &mdash;
                        <time class="event__end-time" datetime="2019-03-18T11:00">${formatTime(dateEnd)}</time>
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
                </li>`
  );
};

export default class PointRoute {
  constructor(point) {
    this._element = null;
    this._point = point;
  }

  getTemplate() {
    return createPointRoute(this._point);
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
