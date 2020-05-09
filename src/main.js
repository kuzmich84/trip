import {createElementRoute} from "./components/route";
import {createElementMenu} from "./components/menu";
import {createElementFilter} from "./components/filter";
import {createElementFilterTrip} from "./components/filter-trip";
import {createElementContent} from "./components/task-content";
import {createElementCard} from "./components/card";
import {createAddElement} from "./components/add-card";


const COUNTCARD = 3;
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
    () => render(contentCard, createElementCard(), `beforeend`));

render(contentCard, createAddElement(), `afterbegin`);
