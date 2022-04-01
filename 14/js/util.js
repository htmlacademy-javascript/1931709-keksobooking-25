const getMapIcon = ({iconUrl, width, height}) => L.icon({
  iconUrl,
  iconSize: [width, height],
  iconAnchor: [width / 2, height]
});


const isEscapeKey = (evt) => evt.key === 'Escape';


export { getMapIcon, isEscapeKey};
