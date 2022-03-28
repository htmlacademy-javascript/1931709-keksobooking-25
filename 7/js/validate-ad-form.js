import { TITLE_MAX_LENGTH, TITLE_MIN_LENGTH, housePriceTypes } from './data.js';

const adForm = document.querySelector('.ad-form');
const titleField = adForm.querySelector('#title');
const priceField =  adForm.querySelector('#price');
const typeSelect = adForm.querySelector('#type');
const allSelectFields = adForm.querySelectorAll('select');
const roomsSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');

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
  const minValue = +priceField.placeholder;
  return value >= minValue;
}

function getErrorMessagePrice() {
  return `Не меньше ${+minPriceValue} руб.`;
}

function validateMinLength(value) {
  return value.length > TITLE_MIN_LENGTH;
}

// Костыль) не придумал что то получше
function getRoomsForGuests(rooms) {
  const guests = capacitySelect.value;

  if (+rooms === 100) {
    errorCapacityMessage = 'Не для гостей';
    return +guests === 0;
  } else if (rooms < guests) {
    errorCapacityMessage = `Для ${guests} гостей нужно больше комнат`;
    return false;
  } else if (+rooms < 100 && +guests === 0) {
    errorCapacityMessage = 'Для гостей';
    return false;
  }
  return true;
}

function getCapacityErrorMessage() {
  return errorCapacityMessage;
}

pristine.addValidator(roomsSelect, getRoomsForGuests, getCapacityErrorMessage, true);

pristine.addValidator(priceField, validatePrice, getErrorMessagePrice);

pristine.addValidator(titleField, validateMinLength, `От ${TITLE_MIN_LENGTH} до ${TITLE_MAX_LENGTH} символов`);

typeSelect.addEventListener('change', changePriceMinValue);

titleField.addEventListener('input', () => pristine.validate());

allSelectFields.forEach((select) => select.addEventListener('change', () => pristine.validate()));

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    // console.log('валидна');
  } else {
    // console.log('невалидна');
  }
});
