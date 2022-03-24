import { getAllRandomOffer } from './data.js';
const CARDS_DATA = getAllRandomOffer();
const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('.popup');
const fragment = document.createDocumentFragment();
const mapCanvas = document.querySelector('#map-canvas');
const popupPhoto = templateFragment.querySelector('.popup__photo');

const areaTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const toggleContent = (item, itemNode, tag = 'textContent') => {
  if (item) {
    itemNode[tag] = item;
  } else {
    itemNode.remove();
  }
};

const getPrice = (price) => price ? `${price} ₽/ночь.` : '';

const getCapacityOffer = (rooms, guests) => {
  if (rooms && guests) {
    return `${ rooms } комнаты для ${ guests } гостей.`;
  }
};

const getTimeBooking = (checkin, checkout) => {
  if (checkin && checkout) {
    return `Заезд после ${ checkin }, выезд до ${ checkout }.`;
  }
};

const createPhotosList = (container, photos) => {
  if (photos.length) {
    container.innerHTML = '';

    photos.forEach((photo) => {
      const photosItem = popupPhoto.cloneNode(true);
      photosItem.src = photo;
      container.append(photosItem);
    });
  } else {
    container.remove();
  }
};

const getFeaturesList = (container, features) => {
  container.innerHTML = '';

  features.forEach((feature) => {
    const elementList = document.createElement('li');
    elementList.classList.add('popup__feature');
    elementList.classList.add(`popup__feature--${feature}`);
    container.append(elementList);
  });
};

const createCard = ({ author, offer }) => {
  const element = template.cloneNode(true);
  const { avatar } = author;
  const { title, address, price, rooms, guests, type, checkin, checkout, features, description, photos } = offer;
  const featuresList = element.querySelector('.popup__features');
  const popupPhotos = element.querySelector('.popup__photos');

  const getArrayFromData = (arr, list, dispatch) => {
    if (arr.length) {
      dispatch(list, arr);
    } else {
      list.remove();
    }
  };
  toggleContent(avatar, element.querySelector('.popup__avatar'), 'src');
  toggleContent(title, element.querySelector('.popup__title'));
  toggleContent(address, element.querySelector('.popup__text--address'));
  toggleContent(getPrice(price), element.querySelector('.popup__text--price'));
  toggleContent(areaTypes[type], element.querySelector('.popup__type'));
  toggleContent(getCapacityOffer(rooms, guests), element.querySelector('.popup__text--capacity'));
  toggleContent(getTimeBooking(checkin, checkout), element.querySelector('.popup__text--time'));
  toggleContent(description, element.querySelector('.popup__description'));
  toggleContent(photos, popupPhotos);
  getArrayFromData(features, featuresList, getFeaturesList);
  getArrayFromData(photos, popupPhotos, createPhotosList);

  fragment.append(element);
};

const getOffers = (cards) => {
  cards.forEach(createCard);
};

getOffers(CARDS_DATA);

mapCanvas.appendChild(fragment.children[0]);
