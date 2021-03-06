import { sendData } from '../api.js';
import { TITLE_MAX_LENGTH, TITLE_MIN_LENGTH, housePriceTypes, HUNDRED_ROOMS, NOT_GUESTS } from '../data.js';

const adForm = document.querySelector('.ad-form');
const titleField = adForm.querySelector('#title');
const priceField =  adForm.querySelector('#price');
const typeSelect = adForm.querySelector('#type');
const roomsSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');
const timeField = adForm.querySelector('.ad-form__element--time');
const timeSelectGroup = timeField.querySelectorAll('select');
const submitBtn = document.querySelector('.ad-form__submit');

let minPriceValue = housePriceTypes.flat;
let errorCapacityMessage = '';

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form--invalid',
  successClass: 'ad-form--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'text-help',
}, true);

const onChangePriceMinValue = (evt) => {
  const value = evt.target.value;
  minPriceValue = housePriceTypes[value];
  priceField.placeholder = minPriceValue;

  return minPriceValue;
};

const validatePrice = (value) => {
  const minValue = Number(priceField.placeholder);

  return value >= minValue;
};

const getErrorMessagePrice = () => `Не меньше ${minPriceValue} руб.`;

const validateMinLength = (value) => value.length > TITLE_MIN_LENGTH;

const getRoomsForGuests = (rooms) => {
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
};

const getCapacityErrorMessage = () => errorCapacityMessage;

const getTitleLengthMessage = () => `От ${TITLE_MIN_LENGTH} до ${TITLE_MAX_LENGTH} символов`;

timeField.addEventListener('change', (evt) => {
  timeSelectGroup.forEach((select) => {
    if (select !== evt.target) {
      select.value = evt.target.value;
    }
  });
});


pristine.addValidator(roomsSelect, getRoomsForGuests, getCapacityErrorMessage);
pristine.addValidator(priceField, validatePrice, getErrorMessagePrice);
pristine.addValidator(titleField, validateMinLength, getTitleLengthMessage);

typeSelect.addEventListener('change', onChangePriceMinValue);

const disableSubmitBtn = () => {
  submitBtn.disabled = true;
};

const switchOnSubmitBtn = () => {
  submitBtn.disabled = false;
};

const setSubmitForm = (onSucces, onFail) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      const formData = new FormData(evt.target);
      disableSubmitBtn();
      sendData(onSucces, onFail, formData);
    }
  });
};

export { priceField, pristine, switchOnSubmitBtn, setSubmitForm };
