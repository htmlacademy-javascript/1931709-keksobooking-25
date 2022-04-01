import { getRandomFloat, getRandomInteger, getRandomArrayElements, getRandomLengthArray } from './util.js';

const AREAS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const BOOKING_TIME_LIST = ['12:00', '13:00', '14:00'];
const ROOM_FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const ROOMS = 3;
const GUESTS = 4;
const OFFER_LENGTH = 10;
const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;
const MAX_PRICE = 100000;
const HUNDRED_ROOMS = 100;
const NOT_GUESTS = 0;
const OPEN_SOURCE_MAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const MAP_ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const housePriceTypes = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const mainIcon = {
  iconUrl: './img/main-pin.svg',
  width: 52,
  height: 52
};

const similarIcon = {
  iconUrl: './img/pin.svg',
  width: 40,
  height: 40
};

const initialCoords = {
  lat: 35.681729,
  lng: 139.753927
};

const getOfferList = () => {
  const avatarNumber = getRandomInteger(1, 10);
  const randomPrice = getRandomInteger(1000, 5000);
  const lat = getRandomFloat(35.65000, 35.70000, 5);
  const lng = getRandomFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: `img/avatars/user${avatarNumber < 10 ? `0${  avatarNumber}` : avatarNumber}.png`
    },
    offer: {
      title: 'Апартаменты',
      address: `${lat}, ${lng}`,
      price: randomPrice,
      type: getRandomArrayElements(AREAS),
      rooms: getRandomInteger(1, ROOMS),
      guests: getRandomInteger(1, GUESTS),
      checkin: getRandomArrayElements(BOOKING_TIME_LIST),
      checkout: getRandomArrayElements(BOOKING_TIME_LIST),
      features: [...new Set(getRandomLengthArray(ROOM_FEATURES_LIST))],
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Eius hic sint cumque quam ut veritatis, cupiditate odit animi obcaecati quo dignissimos voluptatem.`,
      photos: [...new Set(getRandomLengthArray(PHOTOS))],
    },
    location: {
      lat,
      lng,
    }
  };
};

const getAllRandomOffer = () => Array.from({length: OFFER_LENGTH}, getOfferList);

const getInitialCoords = () => initialCoords;

export {
  TITLE_MIN_LENGTH, TITLE_MAX_LENGTH, MAX_PRICE, HUNDRED_ROOMS, NOT_GUESTS, OPEN_SOURCE_MAP,
  MAP_ATTRIBUTE, housePriceTypes, mainIcon, similarIcon, getAllRandomOffer, getInitialCoords
};
