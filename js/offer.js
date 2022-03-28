import { getAllRandomOffer } from './data.js';

const cardsData = getAllRandomOffer();
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
    return itemNode;
  }
  return itemNode.remove();
};

const getPrice = (price) => price ? `${price} ₽/ночь.` : '';

const getCapacityOffer = (rooms, guests) => {
  if (rooms && guests) {
    return `${ rooms } комнаты для ${ guests } гостей.`;
  }
  return '';
};

const getTimeBooking = (checkin, checkout) => {
  if (checkin && checkout) {
    return `Заезд после ${ checkin }, выезд до ${ checkout }.`;
  }
  return '';
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
  if(features.length){
    container.innerHTML = '';

    features.forEach((feature) => {
      const featureListItem = document.createElement('li');
      featureListItem.classList.add('popup__feature');
      featureListItem.classList.add(`popup__feature--${feature}`);
      container.appendChild(featureListItem);
    });
  } else {
    container.remove();
  }
};

const createCard = ({ author, offer }) => {
  const element = template.cloneNode(true);
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
  createPhotosList(popupPhotos, photos);
  getFeaturesList(featuresList, features);

  fragment.append(element);
};

const getOffers = (cards) => {
  cards.forEach(createCard);
};

getOffers(cardsData);

mapCanvas.appendChild(fragment.children[0]);
