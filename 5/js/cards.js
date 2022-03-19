import { getAllRandomOffer } from './data.js';

const templateFragments = document.querySelector('#card').content;
const template = templateFragments.querySelector('.popup');
const fragment = document.createDocumentFragment();
const cardItems = getAllRandomOffer();

const areaTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const getPopupText = function(textList, content){
  const modifierText = Object.keys(content).map((text) => `popup__text--${text}`);
  textList.querySelectorAll('p').forEach((paragpaph, idx) =>{

    if(paragpaph.classList.contains(modifierText[idx])){
      paragpaph.textContent = Object.values(content)[idx];
    }
  });
};

const getPopupFeatures = function(featuresList, data){
  featuresList.forEach((cardFeatureItem) => {
    const isFeature = data.some((feature) => cardFeatureItem.classList.contains(`popup__feature--${feature}`));

    if(!isFeature){
      cardFeatureItem.remove();
    }
  });
};

const getPopupPhotos = function(photos, container){
  photos.forEach((photo) => {
    if(photos.length){
      return container.insertAdjacentHTML('afterEnd', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
    }
  });
};

cardItems.forEach(({author, offer}) =>{
  const element = template.cloneNode(true);
  const { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos } = offer;
  const { avatar } = author;
  const cardFeatures = element.querySelectorAll('.popup__feature');
  const photosContainer = element.querySelector('.popup__photos');
  const textOffers = {
    address,
    price: price ? `${price} ₽/ночь.` : '',
    capacity: rooms && guests ? `${rooms} ${rooms > 1 ? 'комнаты' : 'комната'} для ${guests} ${guests > 1 ? 'гостей' : 'гостя'}.` : '',
    time: checkin && checkout ?`Заезд после ${checkin}, выезд до ${checkout}.` : ''
  };

  element.querySelector('.popup__title').textContent = title ? title : '';

  getPopupText(element, textOffers);

  element.querySelector('.popup__type').textContent = type ? areaTypes[type] : '';

  getPopupFeatures(cardFeatures, features);

  element.querySelector('.popup__description').textContent = description ? description : '';
  element.querySelector('.popup__avatar').src = avatar ? avatar : '';

  photosContainer.innerHTML = '';
  getPopupPhotos(photos, photosContainer);

  fragment.appendChild(element);
});

const mapCanvas = document.querySelector('#map-canvas');

mapCanvas.appendChild(fragment.children[0]);
