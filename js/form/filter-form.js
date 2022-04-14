import { DEFAULT, priceList } from '../data.js';

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

const getCardsFeaturesRank = (card) => {
  let rank = 0;
  const { offer } = card;

  if (offer.features) {
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

const getFormData = () => {
  const form = document.forms[0];
  const initialData = new FormData(form);
  const formData = {};

  for (const [key, value] of initialData.entries()) {
    const objKey = key.replace('housing-', '');
    formData[objKey] = value;
  }

  formData.price = priceList[formData.price];

  return formData;
};

const isBooleanValue = (value, type) => {
  if (value !== DEFAULT) {
    return String(type) === value;
  }

  return true;
};

const isPrice = (price, type) => {
  const low = price[0];
  const high = price[1];

  if (price !== DEFAULT) {
    return type >= low && type <= high;
  }

  return true;
};

const isFilteredCard = (offer, data) => {
  const { type, price, rooms, guests } = data;

  if (!isBooleanValue(type, offer.type)){
    return false;
  }

  if (!isPrice(price, offer.price)) {
    return false;
  }

  if (!isBooleanValue(rooms, offer.rooms)){
    return false;
  }

  if (!isBooleanValue(guests, offer.guests)){
    return false;
  }

  return true;
};


export { compareCards, setFilterHousingValues, getFormData, isFilteredCard };
