import AbstractComponent from "./abstract-components";

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
                <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
              </div>
      `
  );
};

export const createElementFilter = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);

  return (
    `<form class="trip-filters" action="#" method="get">
              ${filtersMarkup}
    </form>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createElementFilter(this._filters);
  }
}
