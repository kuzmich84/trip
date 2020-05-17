import {createElement} from "../utils";

const createElementCard = (index) => {
  return (`<li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${index}</span>
                <time class="day__date" datetime="2019-03-18">MAR 18</time>
              </div>
              </li>`);
};

export default class SiteMenu {
  constructor(index) {
    this._element = null;
    this._index = index;
  }

  getTemplate() {
    return createElementCard(this._index);
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
