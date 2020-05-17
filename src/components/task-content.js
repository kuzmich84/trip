import {createElement} from "../utils";

export const createElementContent = () => {
  return (
    `<ul class="trip-days">
          </ul>`
  );
};

export default class ElementContent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createElementContent();
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

