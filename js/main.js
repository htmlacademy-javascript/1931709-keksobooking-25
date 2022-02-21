const generateRandomNumber = (min, max) => {
  const range = max - min;

  if (range > 0) {
    return Math.random() * (range + 1) + min;
  }

  return min >= 0 ? min : 0;
};

const getRandomInteger = (min, max) => Math.floor(generateRandomNumber(min, max));

const getRandomFloat = (min, max, fraction) => +generateRandomNumber(min, max).toFixed(fraction);

getRandomInteger(0, 10);
getRandomFloat(0, 10, 2);
