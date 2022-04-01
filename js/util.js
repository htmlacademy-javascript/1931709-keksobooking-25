const generateRandomNumber = (min, max) => {
  const range = max - min;

  if (range > 0) {
    return Math.random() * (range + 1) + min;
  }

  return min >= 0 ? min : 0;
};

const getRandomInteger = (min, max) => Math.floor(generateRandomNumber(min, max));

const getRandomFloat = (min, max, fraction) => +generateRandomNumber(min, max).toFixed(fraction);

const getRandomArrayElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomLengthArray = (array) => Array.from({length: getRandomInteger(1, array.length)}, () => getRandomArrayElements(array));

const getMapIcon = ({iconUrl, width, height}) => L.icon({
  iconUrl,
  iconSize: [width, height],
  iconAnchor: [width / 2, height]
});

export { getRandomInteger, getRandomFloat, getRandomArrayElements, getRandomLengthArray, getMapIcon };
