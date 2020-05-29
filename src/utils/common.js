export const getRandomIntegerNumber = (min, max) => min + Math.floor(max * Math.random());

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};




const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};


export const formatDate = (currentDate) => {
  const date = castTimeFormat(currentDate.getDate());
  const month = castTimeFormat(currentDate.getMonth());
  const year = castTimeFormat(currentDate.getFullYear() % 100);
  const hours = castTimeFormat(currentDate.getHours());
  const minutes = castTimeFormat(currentDate.getMinutes());

  return `${date}/${month}/${year} ${hours}:${minutes}`;
};

export const formatTime = (currentDate) => {
  const hours = castTimeFormat(currentDate.getHours());
  const minutes = castTimeFormat(currentDate.getMinutes());

  return `${hours}:${minutes}`;
};
