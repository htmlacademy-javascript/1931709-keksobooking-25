import { Default, priceList } from '../data.js';

const rooms = document.querySelector('#housing-rooms');
const guests = document.querySelector('#housing-guests');
const type = document.querySelector('#housing-type');
const price = document.querySelector('#housing-price');
const wifi = document.querySelector('#filter-wifi');
const dishwasher = document.querySelector('#filter-dishwasher');
const parking = document.querySelector('#filter-parking');
const washer = document.querySelector('#filter-washer');
const elevator = document.querySelector('#filter-elevator');
const conditioner = document.querySelector('#filter-conditioner');
const mapFilters = document.querySelector('.map__filters');

const setFilterHousingValues = (cb) => {
  mapFilters.addEventListener('change', (evt) => cb((evt.target)));
};

const getFilterType = (card) => {
  const { offer } = card;

  if (type.value !== Default.TYPE) {
    return offer.type === type.value;
  }

  return true;
};

const getFilterPrice = (card) => {
  const { offer } = card;
  const low = priceList[price.value][0];
  const high = priceList[price.value][1];

  if (price.value !== Default.PRICE) {
    return offer.price >= low && offer.price <= high;
  }

  return true;
};

const getFilterRooms = (card) => {
  const { offer } = card;

  if(rooms.value !== Default.ROOMS) {
    return offer.rooms === +rooms.value;
  }
  return true;
};

const getFilterGuests = (card) => {
  const { offer } = card;

  if (guests.value !== Default.GUESTS) {
    return offer.guests === +guests.value;
  }

  return true;
};

const getCardsFeaturesRank = (card) => {
  let rank = 0;
  const { offer } = card;

  if(offer.features) {
    if (wifi.checked && offer.features.includes(wifi.value)) {
      rank += 1;
    }

    if (dishwasher.checked && offer.features.includes(dishwasher.value)) {
      rank += 1;
    }

    if (parking.checked && offer.features.includes(parking.value)) {
      rank += 1;
    }

    if (washer.checked && offer.features.includes(washer.value)) {
      rank += 1;
    }

    if (elevator.checked && offer.features.includes(elevator.value)) {
      rank += 1;
    }

    if (conditioner.checked && offer.features.includes(conditioner.value)) {
      rank += 1;
    }
  }

  return rank;
};

const compareCards = (cardA, cardB) => {
  const rankA = getCardsFeaturesRank(cardA);
  const rankB = getCardsFeaturesRank(cardB);

  return rankB - rankA;
};

export { compareCards, getFilterType, getFilterPrice, getFilterRooms, getFilterGuests, setFilterHousingValues };
