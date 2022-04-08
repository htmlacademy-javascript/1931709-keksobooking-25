import { removeDisabledFormGroup } from './form/disabled-form.js';
import { createCard } from './offer.js';
import { mainIcon, similarIcon, getInitialCoords, OPEN_SOURCE_MAP, MAP_ATTRIBUTE, ZOOM_MAP, OFFER_LENGTH } from './data.js';
import { getMapIcon } from './util.js';
import { compareCards, getFormData, isFilteredCard } from './form/filter-form.js';

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    const { lat, lng } = getInitialCoords();

    address.value = `${lat}, ${lng}`;
    removeDisabledFormGroup();
  })
  .setView(getInitialCoords(), ZOOM_MAP);

L.tileLayer(OPEN_SOURCE_MAP, { attribution: MAP_ATTRIBUTE }).addTo(map);

const marker = L.marker( getInitialCoords(), { draggable: true, icon: getMapIcon(mainIcon) });

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (card) => {
  const { lat, lng } = card.location;
  const markerSimilar = L.marker({ lat, lng },{ icon: getMapIcon(similarIcon) });

  markerSimilar.addTo(markerGroup).bindPopup(createCard(card));
};

const renderCardsOnMap = (cards, target) => {
  map.closePopup();
  markerGroup.clearLayers();
  const similarCards = cards.slice();

  if(target) {
    const data = getFormData();

    return similarCards
      .sort(compareCards)
      .filter(({offer}) => isFilteredCard(offer, data))
      .slice(0, OFFER_LENGTH)
      .forEach(createMarker);
  }

  similarCards.slice(0,OFFER_LENGTH).forEach(createMarker);
};

marker.on('moveend', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

marker.addTo(map);

const returnInitialMap = () => {
  marker.setLatLng(getInitialCoords());
  map.setView(getInitialCoords(), ZOOM_MAP);
  map.closePopup();
};


export { renderCardsOnMap, returnInitialMap };
