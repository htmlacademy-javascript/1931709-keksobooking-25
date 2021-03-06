import { MAP_ERROR_TIME_OUT } from '../data.js';
import { isEscapeKey } from '../util.js';
import { removeDisabledForm } from './disabled-form.js';
import { switchOnSubmitBtn } from './validate-ad-form.js';

const errorMessageTemplate = document.querySelector('#error').content;

function showError() {
  const content = errorMessageTemplate.querySelector('.error').cloneNode(true);
  document.body.appendChild(content);

  document.body.querySelector('.error').addEventListener('click', onHideErrorMessage);
  document.addEventListener('keydown', onKeyDownHideErrorMessage);
}

function onHideErrorMessage() {
  document.body.querySelector('.error').remove();
  document.removeEventListener('keydown', onKeyDownHideErrorMessage);
  switchOnSubmitBtn();
}

function onKeyDownHideErrorMessage(evt){
  if (isEscapeKey(evt)) {
    onHideErrorMessage();
  }
}

function errorMapMessage() {
  const adForm = document.forms[1];
  const main = document.querySelector('main');
  const reject = document.querySelector('#reject').content;
  const content = reject.querySelector('.reject').cloneNode(true);

  main.append(content);

  removeDisabledForm(adForm);
  setTimeout(() => {
    main.querySelector('.reject').remove();
  }, MAP_ERROR_TIME_OUT);
}

export { showError, errorMapMessage};
