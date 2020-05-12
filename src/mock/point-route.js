import {getRandomArrayItem} from "../utils";

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
let date = new Date(2019, 3, 18, 10, 30);
const OFFERS = [
  {
    type: `Taxi`,
    desc: `Order Uber`,
    price: 20
  },
  {
    type: `Flight`,
    desc: `Add luggage`,
    price: 50
  },
  {
    type: `Flight`,
    desc: `Switch to comfort class`,
    price: 150
  },
  {
    type: `Drive`,
    desc: `Rent a car`,
    price: 80
  },
  {
    type: `Ship`,
    desc: ``,
    price: ``
  },
  {
    type: `Bus`,
    desc: ``,
    price: ``
  },
  {
    type: `Check`,
    desc: ``,
    price: ``
  },
  {
    type: `Train`,
    desc: `Choose seats`,
    price: 9
  },
  {
    type: `Transport`,
    desc: ``,
    price: ``
  },
  {
    type: `Trip`,
    desc: ``,
    price: ``
  },
  {
    type: `Restaurant`,
    desc: ``,
    price: ``
  },
  {
    type: `Hotel`,
    desc: `Add breakfast`,
    price: 50
  },
  {
    type: `Hotel`,
    desc: `Add meal`,
    price: 2
  },
  {
    type: `Sightseeing`,
    desc: `Book tickets`,
    price: 40
  },
  {
    type: `Sightseeing`,
    desc: `Lunch in city`,
    price: 30
  },
];

const generatePoint = () => {
  return {
    eventType: getRandomArrayItem(eventType),
    timeFirst: `${date.getHours()}:${date.getMinutes()}`,
    timeSecond: `${date.getHours()}:${date.getMinutes() + 15}`,
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

