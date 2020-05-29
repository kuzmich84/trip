import PointRouteComponent from "../components/point-route";
import RouteEditComponent from "../components/route-edit";
import {render, RenderPosition} from "../utils/render";

export default class TripController {
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
}
