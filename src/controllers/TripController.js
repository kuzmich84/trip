import PointRouteComponent from "../components/point-route";
import RouteEditComponent from "../components/route-edit";
import {render, RenderPosition} from "../utils/render";
import NoRoutesComponent from "../components/no-routes";
import CardComponent from "../components/card";
import Sort, {SortType} from "../components/sort";
import {filterTripNames} from "../mock/filter";

const COUNTCARD = 3;

const renderRoute = (point, currentDay) => {
  const routePointComponent = new PointRouteComponent(point);
  const routeEditComponent = new RouteEditComponent(point);

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToRoute();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };
  const eventsList = currentDay.querySelector(`.trip-events__list`);
  const replaceEditToRoute = () => eventsList.replaceChild(routePointComponent.getElement(), routeEditComponent.getElement());
  const replaceRouteToEdit = () => eventsList.replaceChild(routeEditComponent.getElement(), routePointComponent.getElement());

  const editButton = routePointComponent.getElement().querySelector(`.event__rollup-btn`);

  editButton.addEventListener(`click`, () => {
    replaceRouteToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  routeEditComponent.setSubmitHandler(replaceEditToRoute);
  routeEditComponent.setCloseButtonClickHandler(replaceEditToRoute);


  render(eventsList, routePointComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderRoutes = (eventsList, points, currentDay) => {
  points.forEach((point) => {
    renderRoute(point, currentDay);
  });
  render(eventsList, currentDay, RenderPosition.BEFOREEND);
};

export default class TripController {

  constructor(container) {
    this._container = container;

    this._noRoutesComponent = new NoRoutesComponent();
    this._pointRouteComponent = new PointRouteComponent();
    this._routeEditComponent = new RouteEditComponent();
    this._cardComponent = new CardComponent();

  }

  render(points) {
    const container = this._container;

    new Array(COUNTCARD).fill(``).forEach(
      (item, index) => {
        const day = new CardComponent(index + 1).getElement();
        renderRoutes(container, points, day);
      });


  }

  renderSort(sortContainer, names) {
    return render(sortContainer, new Sort(names).getElement(), RenderPosition.AFTERBEGIN);

  }

}
