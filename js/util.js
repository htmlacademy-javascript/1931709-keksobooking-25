const getMapIcon = ({iconUrl, width, height}) => L.icon({
  iconUrl,
  iconSize: [width, height],
  iconAnchor: [width / 2, height]
});

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getMapIcon, isEscapeKey, debounce};
