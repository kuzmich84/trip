import AbstractComponent from "./abstract-components";

const createElementCard = (index) => {
  return (`<li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${index}</span>
                <time class="day__date" datetime="2019-03-18">MAR 18</time>
              </div>
              <ul class="trip-events__list">
                </ul>
              </li>`);
};

export default class SiteMenu extends AbstractComponent {
  constructor(index) {
    super();
    this._index = index;
  }
  getTemplate() {
    return createElementCard(this._index);
  }                                                                                                                                                                                                                                                    tututy5y6tt5yyty6
}
