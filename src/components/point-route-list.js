import {createElement} from "../utils";

export const createPointRouteList = () => {
  return (
    `<ul class="trip-events__list">
     </ul>`
  );
};

export default class PointRouteList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createPointRouteList();
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
