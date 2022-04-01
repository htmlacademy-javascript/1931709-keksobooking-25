import { isEscapeKey } from '../util.js';
import { switchOnBtn } from './validate-ad-form.js';

const error = document.querySelector('#error').content;

function showError() {
  const content = error.querySelector('.error').cloneNode(true);
  document.body.appendChild(content);

  document.body.querySelector('.error').addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', onHideErrorMessage);
}

function hideErrorMessage() {
  document.body.querySelector('.error').remove();
  document.removeEventListener('keydown', onHideErrorMessage);
  switchOnBtn();
}

function onHideErrorMessage(evt){
  if (isEscapeKey(evt)) {
    hideErrorMessage();
  }
}

const errorMapMessage = () => {
  const main = document.querySelector('main');
  const reject = document.querySelector('#reject').content;
  const content = reject.querySelector('.reject').cloneNode(true);
  main.append(content);

  setTimeout(() => {
    main.querySelector('.reject').remove();
  }, 5000);
};

export { showError, errorMapMessage};
