import { removeDisableFormGroup } from './disabled-form.js';
import { cardsData, createCard } from './offer.js';
import { mainIcon, similarIcon, getInitialCoords, OPEN_SOURCE_MAP, MAP_ATTRIBUTE } from './data.js';
import { getMapIcon } from './util.js';

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    const { lat, lng } = getInitialCoords();

    address.value = `${lat}, ${lng}`;
    removeDisableFormGroup();
  })
  .setView(getInitialCoords(), 10);

L.tileLayer(OPEN_SOURCE_MAP, { attribution: MAP_ATTRIBUTE }).addTo(map);

const marker = L.marker(
  getInitialCoords(),
  {
    draggable: true,
    icon: getMapIcon(mainIcon)
  }
);

cardsData.forEach((card) => {
  const { lat, lng } = card.location;
  const markerSimilar = L.marker({
    lat,
    lng,
  },
  {
    icon: getMapIcon(similarIcon)
  });
  markerSimilar.addTo(map).bindPopup(createCard(card));
});

marker.on('moveend', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

marker.addTo(map);
