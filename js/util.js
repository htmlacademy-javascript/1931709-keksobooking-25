import { FILE_TYPES } from './data.js';

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

const addPreviewImage = (eventNode, previewNode) => {
  const itemNode = eventNode.target;
  const file = itemNode.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewNode.src = URL.createObjectURL(file);
  }
}

export { getMapIcon, isEscapeKey, debounce, addPreviewImage };
