import AbstractComponent from "./abstract-components";

export const createElementContent = () => {
  return (
    `<ul class="trip-days">
          </ul>`
  );
};

export default class ElementContent extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return createElementContent();
  }
}

