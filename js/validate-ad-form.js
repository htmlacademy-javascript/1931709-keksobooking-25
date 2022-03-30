import { TITLE_MAX_LENGTH, TITLE_MIN_LENGTH, housePriceTypes, HUNDRED_ROOMS, NOT_GUESTS } from './data.js';

const adForm = document.querySelector('.ad-form');
const titleField = adForm.querySelector('#title');
const priceField =  adForm.querySelector('#price');
const typeSelect = adForm.querySelector('#type');
const roomsSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');
const timeFields = adForm.querySelector('.ad-form__element--time');
const timeSelectGroup = timeFields.querySelectorAll('select');

let minPriceValue = housePriceTypes.house;
let errorCapacityMessage = '';

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form--invalid',
  successClass: 'ad-form--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'text-help',
}, true);

function changePriceMinValue(evt) {
  const value = evt.target.value;
  minPriceValue = housePriceTypes[value];
  priceField.placeholder = minPriceValue;

  return minPriceValue;
}

function validatePrice(value) {
  const minValue = Number(priceField.placeholder);
  return value >= minValue;
}

function getErrorMessagePrice() {
  return `Не меньше ${minPriceValue} руб.`;
}

function validateMinLength(value) {
  return value.length > TITLE_MIN_LENGTH;
}

function getRoomsForGuests(rooms) {
  const guests = Number(capacitySelect.value);
  rooms = Number(rooms);

  if (rooms === HUNDRED_ROOMS) {
    errorCapacityMessage = 'Не для гостей';
    return guests === NOT_GUESTS;
  }

  if (rooms < guests) {
    errorCapacityMessage = `Для ${guests} гостей нужно больше комнат`;
    return false;
  }

  if (rooms < 100 && guests === NOT_GUESTS) {
    errorCapacityMessage = 'Для гостей';
    return false;
  }
  return true;
}

function getCapacityErrorMessage() {
  return errorCapacityMessage;
}

function getTitleLengthMessage() {
  return `От ${TITLE_MIN_LENGTH} до ${TITLE_MAX_LENGTH} символов`;
}

timeFields.addEventListener('change', (evt) => {
  timeSelectGroup.forEach((select) => {
    if (select !== evt.target) {
      select.value = evt.target.value;
    }
  });
});


pristine.addValidator(roomsSelect, getRoomsForGuests, getCapacityErrorMessage);

pristine.addValidator(priceField, validatePrice, getErrorMessagePrice);

pristine.addValidator(titleField, validateMinLength, getTitleLengthMessage);

typeSelect.addEventListener('change', changePriceMinValue);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  return isValid;
});
