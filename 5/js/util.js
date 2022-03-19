const generateRandomNumber = (min, max) => {
  const range = max - min;

  if (range > 0) {
    return Math.random() * (range + 1) + min;
  }

  return min >= 0 ? min : 0;
};

export const getRandomInteger = (min, max) => Math.floor(generateRandomNumber(min, max));

export const getRandomFloat = (min, max, fraction) => +generateRandomNumber(min, max).toFixed(fraction);

export const getRandomArrayElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export const getRandomLengthArray = (array) => Array.from({length: getRandomInteger(1, array.length)}, () => getRandomArrayElements(array));
