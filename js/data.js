import { getRandomFloat, getRandomInteger, getRandomArrayElements, getRandomLengthArray } from './util.js';

const AREAS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const BOOKING_TIME_LIST = ['12:00', '13:00', '14:00'];
const ROOM_FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const ROOMS = 5;
const GUESTS = 4;
const OFFER_LENGTH = 10;

const getOfferList = () => {
  const avatarNumber = getRandomInteger(1, 10);
  const randomPrice = getRandomInteger(10, 1000);
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

export const getAllRandomOffer = () => Array.from({length: OFFER_LENGTH}, getOfferList);
