import { formGroup, removeDisabledForm } from './form/disabled-form.js';
import { createCard } from './offer.js';
import { mainIcon, similarIcon, getInitialCoords, OPEN_SOURCE_MAP, MAP_ATTRIBUTE, ZOOM_MAP, OFFER_LENGTH, DEBOUCE_TIME_OUT } from './data.js';
import { debounce, getMapIcon } from './util.js';
import { compareCards, getFormData, isFilteredCard, setFilterHousingValues } from './form/filter-form.js';
import { getCardsData } from './api.js';
import { errorMapMessage } from './form/error-form-message.js';

const address = document.querySelector('#address');
const map = L.map('map-canvas').setView(getInitialCoords(), ZOOM_MAP);

L.tileLayer(OPEN_SOURCE_MAP, { attribution: MAP_ATTRIBUTE }).addTo(map);

const marker = L.marker( getInitialCoords(), { draggable: true, icon: getMapIcon(mainIcon) });

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (card) => {
  const { lat, lng } = card.location;
  const markerSimilar = L.marker({ lat, lng },{ icon: getMapIcon(similarIcon) });

  markerSimilar.addTo(markerGroup).bindPopup(createCard(card));
};

marker.on('drag', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

const renderCardsOnMap = (cards, target) => {
  const data = getFormData();

  map.closePopup();
  markerGroup.clearLayers();

  if (!target) {
    return  cards.slice(0,OFFER_LENGTH).forEach(createMarker);
  }

  cards.
    slice()
    .sort(compareCards)
    .filter(({offer}) => isFilteredCard(offer, data))
    .slice(0, OFFER_LENGTH)
    .forEach(createMarker);
};

map.on('load', getCardsData((cards) => {
  renderCardsOnMap(cards);
  setFilterHousingValues(debounce((target) => renderCardsOnMap(cards, target), DEBOUCE_TIME_OUT));

  for(const form of formGroup) {
    removeDisabledForm(form);
  }
}, errorMapMessage));

const returnInitialMap = () => {
  marker.setLatLng(getInitialCoords());
  map.setView(getInitialCoords(), ZOOM_MAP);
  map.closePopup();
  getCardsData((cards) => {
    renderCardsOnMap(cards);
  }, errorMapMessage);
};

marker.addTo(map);

export { returnInitialMap };
