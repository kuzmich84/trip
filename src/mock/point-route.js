import {getRandomArrayItem, getRandomInRange} from "../utils/common";

const eventType = [
  [`Taxi`, `./img/icons/taxi.png`, `Taxi to airport`],
  [`Flight`, `./img/icons/flight.png`, `Flight to`],
  [`Drive`, `./img/icons/drive.png`, `Drive to`],
  [`Ship`, `./img/icons/ship.png`, `Ship to`],
  [`Bus`, `./img/icons/bus.png`, `Bus to`],
  [`Check`, `./img/icons/check-in.png`, `Check into hotel`],
  [`Restaurant`, `./img/icons/restaurant.png`, `Restaurant`],
  [`Sightseeing`, `./img/icons/sightseeing.png`, `Natural History Museum`],
  [`Train`, `./img/icons/train.png`, `Train to`],
  [`Transport`, `./img/icons/transport.png`, `Transport to`],
  [`Trip`, `./img/icons/sightseeing.png`, `Trip to`]
];

const CITY = [`Amsterdam`, `Geneva`, `Chamonix`];
const PRICE = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
const OFFERS = [
  {
    type: `taxi`,
    desc: `Order Uber`,
    price: 20
  },
  {
    type: `flight`,
    desc: `Add luggage`,
    price: 50
  },
  {
    type: `flight`,
    desc: `Switch to comfort class`,
    price: 150
  },
  {
    type: `drive`,
    desc: `Rent a car`,
    price: 80
  },
  {
    type: `train`,
    desc: `Travel by train`,
    price: 9
  },
  {
    type: `hotel`,
    desc: `Add breakfast`,
    price: 50
  },
  {
    type: `meal`,
    desc: `Add meal`,
    price: 2
  },
  {
    type: `sightseeing`,
    desc: `Book tickets`,
    price: 40
  },
  {
    type: `sightseeing`,
    desc: `Lunch in city`,
    price: 30
  },
  {
    type: `seats`,
    desc: `Lunch in city`,
    price: 30
  },
  {
    type: `comfort`,
    desc: `Switch to comfort class`,
    price: 30
  },
];

const getRandomEventTime = () => {
  const date = new Date();
  date.setFullYear(getRandomInRange(2019, 2021), getRandomInRange(0, 11), getRandomInRange(1, 31));
  date.setHours(getRandomInRange(0, 23), getRandomInRange(0, 59));

  return date;
};

const generatePoint = () => {
  return {
    eventType: getRandomArrayItem(eventType),
    dateFirst: getRandomEventTime(),
    dateEnd: getRandomEventTime(),
    price: getRandomArrayItem(PRICE),
    offers: OFFERS,
    city: getRandomArrayItem(CITY)
  };
};

const generatePoints = (count) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(generatePoint());
  }
  return arr;
};

export {generatePoint, generatePoints};

