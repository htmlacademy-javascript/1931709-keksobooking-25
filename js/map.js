import { removeDisableFormGroup } from './disabled-form.js';
import { cardsData, createCard } from './offer.js';

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    address.value = '35.681729, 139.753927';
    removeDisableFormGroup();
  })
  .setView({
    lat: 35.681729,
    lng: 139.753927
  }, 9);


L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainSimilarIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const marker = L.marker(
  {
    lat: 35.681729,
    lng: 139.753927
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);

cardsData.forEach((card) => {
  const { lat, lng } = card.location;
  const markerSimilar = L.marker({
    lat,
    lng,
  },
  {
    icon: mainSimilarIcon
  });
  markerSimilar.addTo(map).bindPopup(createCard(card));
});


marker.on('moveend', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

marker.addTo(map);
