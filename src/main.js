import SiteMenuComponent from "./components/menu.js";
import SiteFilterComponent from "./components/filter.js";
import RouteComponent from "./components/route.js";
// import FilterTripComponent from "./components/sort";
import TaskContentComponent from "./components/task-content";
import {generatePoints} from "./mock/point-route";
import {filterNames} from "./mock/filter";
import {filterTripNames} from "./mock/filter";
import {render, RenderPosition, remove} from "./utils/render";
import TripController from "./controllers/TripController";


// const COUNTCARD = 3;
const COUNTPOINTROUTE = 5;


const points = generatePoints(COUNTPOINTROUTE);

const tripInfo = document.querySelector(`.trip-info`);
const tripControls = document.querySelector(`.trip-controls`);

render(tripControls, new SiteMenuComponent().getElement(), RenderPosition.AFTERBEGIN);


render(tripControls, new SiteFilterComponent(filterNames).getElement(), RenderPosition.BEFOREEND);

const tripEvents = document.querySelector(`.trip-events`);

render(tripEvents, new TaskContentComponent().getElement(), RenderPosition.BEFOREEND);

const contentCard = document.querySelector(`.trip-days`);

const tripController = new TripController(contentCard);
tripController.render(points);
tripController.renderSort(tripEvents, filterTripNames);


let totalPrice = points.reduce((acc, item) => acc + item.price, 0);
const total = document.querySelector(`.trip-info__cost-value`);
total.textContent = totalPrice;

const dayCounter = document.querySelectorAll(`.day__counter`);
render(tripInfo, new RouteComponent(dayCounter, points).getElement(), RenderPosition.AFTERBEGIN);
