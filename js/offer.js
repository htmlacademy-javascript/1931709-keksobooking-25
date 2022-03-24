/* eslint-disable no-return-assign */
import { getAllRandomOffer } from './data.js';
import { addClassHidden } from './util.js';
const TEMPLATE_FRAGMENT = document.querySelector('#card').content;
const TEMPLATE = TEMPLATE_FRAGMENT.querySelector('.popup');
const FRAGMENT = document.createDocumentFragment();
const CARDS_DATA = getAllRandomOffer();
const MAP_CANVAS = document.querySelector('#map-canvas');
const POPUP_PHOTO = TEMPLATE_FRAGMENT.querySelector('.popup__photo');
const HIDDEN_CLASS = 'hidden';
const areaTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const insertContentTemplate = (element, content, tag = 'textContent') => element[tag] = content;

const toggleContent = ( item, itemNode, tag ) => {
  if( item ) {
    insertContentTemplate(itemNode, item, tag);
  } else {
    addClassHidden(itemNode, HIDDEN_CLASS);
  }
};

const getPrice = ( price ) => price ? `${price} ₽/ночь.` : '';

const getCapacityOffer = ( rooms, guests ) => {
  if( rooms && guests ) {
    return `${ rooms } комнаты для ${ guests } гостей.`;
  }
};

const getTimeBooking = ( checkin, checkout ) => {
  if( checkin && checkout ) {
    return `Заезд после ${ checkin }, выезд до ${ checkout }.`;
  }
};

const createPhotosList = (container, items ) => {
  container.innerHTML = '';

  items.forEach( (photo) => {
    const itemList = POPUP_PHOTO.cloneNode(true);
    itemList.src = photo;
    container.append(itemList);
  });
};

const getFeaturesList = (container, items) => {
  container.innerHTML = '';

  items.forEach( (item) => {
    const elementList = document.createElement('li');
    elementList.classList.add('popup__feature');
    elementList.classList.add(`popup__feature--${item}`);
    container.append(elementList);
  });
};

const createCard = ({ author, offer }) => {
  const element = TEMPLATE.cloneNode(true);
  const { avatar } = author;
  const { title, address, price, rooms, guests, type, checkin, checkout, features, description, photos } = offer;
  const featuresList = element.querySelector('.popup__features');
  const popupPhotos = element.querySelector('.popup__photos');

  toggleContent(avatar, element.querySelector('.popup__avatar'), 'src');
  toggleContent(title, element.querySelector('.popup__title'));
  toggleContent(address, element.querySelector('.popup__text--address'));
  toggleContent(getPrice(price), element.querySelector('.popup__text--price'));
  toggleContent(areaTypes[type], element.querySelector('.popup__type'));
  toggleContent(getCapacityOffer(rooms, guests), element.querySelector('.popup__text--capacity'));
  toggleContent(getTimeBooking(checkin, checkout), element.querySelector('.popup__text--time'));
  toggleContent(description, element.querySelector('.popup__description'));

  if (photos.length) {
    createPhotosList(popupPhotos, photos);
  } else {
    addClassHidden(popupPhotos);
  }

  if(features.length){
    getFeaturesList(featuresList, features);
  } else {
    addClassHidden(featuresList);
  }

  return FRAGMENT.append(element);
};

const getOffers = ( cards ) => {
  cards.forEach((card) => {
    createCard(card);
  });
};

getOffers(CARDS_DATA);

MAP_CANVAS.appendChild(FRAGMENT.children[0]);
