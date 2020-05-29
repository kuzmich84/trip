import SiteMenuComponent from "./components/menu.js";
import SiteFilterComponent from "./components/filter.js";
import RouteComponent from "./components/route.js";
import FilterTripComponent from "./components/filter-trip";
import PointRouteComponent from "./components/point-route";
import TaskContentComponent from "./components/task-content";
import CardComponent from "./components/card";
import RouteEditComponent from "./components/route-edit";
import {generatePoints} from "./mock/point-route";
import {filterNames} from "./mock/filter";
import {filterTripNames} from "./mock/filter";
import {render, RenderPosition} from './utils.js';
import {NoRoutesComponent} from './components/no-routes.js';


const COUNTCARD = 3;
const COUNTPOINTROUTE = 5;

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

  const editForm = routeEditComponent.getElement();
  editForm.addEventListener(`submit`, replaceEditToRoute);

  render(eventsList, routePointComponent.getElement(), RenderPosition.BEFOREEND);
};


const points = generatePoints(COUNTPOINTROUTE);

const tripInfo = document.querySelector(`.trip-info`);
const tripControls = document.querySelector(`.trip-controls`);

render(tripControls, new SiteMenuComponent().getElement(), RenderPosition.AFTERBEGIN);


render(tripControls, new SiteFilterComponent(filterNames).getElement(), RenderPosition.BEFOREEND);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, new FilterTripComponent(filterTripNames).getElement(), RenderPosition.AFTERBEGIN);


render(tripEvents, new TaskContentComponent().getElement(), RenderPosition.BEFOREEND);

const contentCard = document.querySelector(`.trip-days`);

new Array(COUNTCARD).fill(``).forEach(
  (item, index) => {
    const day = new CardComponent(index + 1).getElement();
    points.forEach((point) => {
      renderRoute(point, day);
    });
    render(contentCard, day, RenderPosition.BEFOREEND);
  });

let totalPrice = points.reduce((acc, item) => acc + item.price, 0);
const total = document.querySelector(`.trip-info__cost-value`);
total.textContent = totalPrice;

const dayCounter = document.querySelectorAll(`.day__counter`);
render(tripInfo, new RouteComponent(dayCounter, points).getElement(), RenderPosition.AFTERBEGIN);
