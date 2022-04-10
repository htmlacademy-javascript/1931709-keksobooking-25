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
const ZOOM_MAP = 13;
const MAP_ERROR_TIME_OUT = 5000;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEBOUCE_TIME_OUT = 500;
const FORM_PHOTOS_SIZE = 70;
const HEADER_PREVIEW_IMG = 'img/muffin-grey.svg';

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

const Default = {
  TYPE: 'any',
  PRICE: 'any',
  ROOMS: 'any',
  GUESTS: 'any'
};

const priceList = {
  'any': [0, 100000],
  'middle': [10000, 50000],
  'low': [0, 10000],
  'high': [50000, 100000]
};

const getInitialCoords = () => initialCoords;

export {
  TITLE_MIN_LENGTH, TITLE_MAX_LENGTH, MAX_PRICE, HUNDRED_ROOMS, NOT_GUESTS, OPEN_SOURCE_MAP, API_DATA, FORM_URL, ZOOM_MAP, DEBOUCE_TIME_OUT,
  MAP_ERROR_TIME_OUT, MAP_ATTRIBUTE, OFFER_LENGTH, housePriceTypes, mainIcon, similarIcon, FILE_TYPES, Default, priceList, FORM_PHOTOS_SIZE,
  HEADER_PREVIEW_IMG, getInitialCoords
};
