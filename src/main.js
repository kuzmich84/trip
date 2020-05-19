import SiteMenuComponent from "./components/menu.js";
import SiteFilterComponent from "./components/filter.js";
import RouteComponent from "./components/route.js";
import FilterTripComponent from "./components/filter-trip";
import PointRouteComponent from "./components/point-route";
import TaskContentComponent from "./components/task-content";
import CardComponent from "./components/card";
import AddEventComponent from "./components/add-card";
import PointRouteListComponent from "./components/point-route-list";
import RouteEditComponent from "./components/route-edit";
import {generatePoints} from "./mock/point-route";
import {filterNames} from "./mock/filter";
import {filterTripNames} from "./mock/filter";
import {render, RenderPosition} from './utils.js';


const COUNTCARD = 3;
const COUNTPOINTROUTE = 5;
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
    (item, index) => render(contentCard, new CardComponent(index + 1).getElement(), RenderPosition.BEFOREEND));



// render(contentCard, new AddEventComponent().getElement(), RenderPosition.BEFORE);

const tripCard = document.querySelectorAll(`.trip-days__item`);
tripCard.forEach((element) => render(element, new PointRouteListComponent().getElement(), RenderPosition.BEFOREEND));
const tripEventList = document.querySelectorAll(`.trip-events__list`);

points.slice(1).forEach((point) => tripEventList.forEach((element) => render(element, new PointRouteComponent(point).getElement(), `beforeend`)));
render(tripEventList[0].querySelectorAll(`.trip-events__item`)[1], new RouteEditComponent(points[0]).getElement(), RenderPosition.AFTERBEGIN);
let totalPrice = points.reduce((acc, item) => acc + item.price, 0);
const total = document.querySelector(`.trip-info__cost-value`);
total.textContent = totalPrice;

const dayCounter = document.querySelectorAll(`.day__counter`);
render(tripInfo, new RouteComponent(dayCounter, points).getElement(), RenderPosition.AFTERBEGIN);
