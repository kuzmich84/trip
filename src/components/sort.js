import AbstractComponent from "./abstract-components";

const createFilterTripMarkup = (nameFilter, isChecked) => {


  return (
    `<div class="trip-sort__item  trip-sort__item--${nameFilter}" data-sort-type="${nameFilter}">
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
            </div>`
  );
};


export const createElementFilterTrip = (filters) => {

  const filtersMarkup = filters.map((it, i) => createFilterTripMarkup(it, i === 0)).join(`\n`);

  return (`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <span class="trip-sort__item  trip-sort__item--day">Day</span>

            ${filtersMarkup}

            <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
          </form>`);
};

export const SortType = {
  EVENT: `event`,
  TIME: `time`,
  PRICE: `price`,
};

export default class Sort extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
    this._currenSortType = `event`;
  }

  getTemplate() {
    return createElementFilterTrip(this._filters);
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currenSortType === sortType) {
        return;
      }

      this._currenSortType = sortType;

      handler(this._currenSortType);
    });
  }
}
