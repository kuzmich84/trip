const eventType = new Map([
  [`Taxi`, `./img/icons/taxi.png`],
  [`Flight`, `./img/icons/flight.png`],
  [`Drive`, `./img/icons/drive.png`],
  [`Ship`, `./img/icons/ship.png`],
  [`Bus`, `./img/icons/bus.png`],
  [`Check`, `./img/icons/check-in.png`],
  [`Restaurant`, `./img/icons/restaurant.png`],
  [`Sightseeing`, `./img/icons/sightseeing.png`],
  [`Train`, `./img/icons/train.png`],
  [`Transport`, `./img/icons/transport.png`],
  [`Trip`, `./img/icons/sightseeing.png`]]
);

const CITY = [`Amsterdam`, `Geneva`, `Chamonix`];

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};
