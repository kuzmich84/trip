import AbstractComponent from "./abstract-components";

export const createPointRouteList = () => {
  return (
    `<ul class="trip-events__list">
     </ul>`
  );
};

export default class PointRouteList extends AbstractComponent{
  constructor() {
    super();
  }

  getTemplate() {
    return createPointRouteList();
  }
}
