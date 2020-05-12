import {createElementRoute} from "./components/route";
import {createElementMenu} from "./components/menu";
import {createElementFilter} from "./components/filter";
import {createElementFilterTrip} from "./components/filter-trip";
import {createElementContent} from "./components/task-content";
import {createElementCard} from "./components/card";
import {createAddElement} from "./components/add-card";
import {generatePoint} from "./mock/point-route";
import {generatePoints} from "./mock/point-route";
import {createPointRoute} from "./components/point-route";
import {createPointRouteList} from "./components/point-route-list";



const COUNTCARD = 3;
const COUNTPOINTROUTE = 5;
const points = generatePoints(COUNTPOINTROUTE);
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const tripInfo = document.querySelector(`.trip-info`);
const tripControls = document.querySelector(`.trip-controls`);

render(tripInfo, createElementRoute(), `afterbegin`);
render(tripControls, createElementMenu(), `afterbegin`);
render(tripControls, createElementFilter(), `beforeend`);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, createElementFilterTrip(), `afterbegin`);
render(tripEvents, createElementContent(), `beforeend`);
const contentCard = document.querySelector(`.trip-days`);


new Array(COUNTCARD).fill(``).forEach(
  (item, index) => render(contentCard, createElementCard(index + 1), `beforeend`));

render(contentCard, createAddElement(), `afterbegin`);
const tripCard = document.querySelectorAll(`.trip-days__item`);


tripCard.forEach((element) => render(element, createPointRouteList(), `beforeend`));
const tripEventList = document.querySelectorAll(`.trip-events__list`);


points.forEach(
    (task) =>render(tripEventList[0], createPointRoute(task), `beforeend`));


