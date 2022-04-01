const OFFER_LENGTH = 10;
const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;
const MAX_PRICE = 100000;
const HUNDRED_ROOMS = 100;
const NOT_GUESTS = 0;
const OPEN_SOURCE_MAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const MAP_ATTRIBUTE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const API_DATA = 'https://25.javascript.pages.academy/keksobooking/data';
const FORM_URL = 'https://25.javascript.pages.academy/keksobooking';

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


const getInitialCoords = () => initialCoords;

export {
  TITLE_MIN_LENGTH, TITLE_MAX_LENGTH, MAX_PRICE, HUNDRED_ROOMS, NOT_GUESTS, OPEN_SOURCE_MAP, API_DATA, FORM_URL,
  MAP_ATTRIBUTE, OFFER_LENGTH, housePriceTypes, mainIcon, similarIcon, getInitialCoords
};
