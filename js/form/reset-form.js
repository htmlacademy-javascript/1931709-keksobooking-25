import { resetFormGroup } from './disabled-form.js';
import { returnInitialMap } from '../map.js';
import { getInitialSliderPosition } from '../slider.js';
import { switchOnSubmitBtn, pristine } from './validate-ad-form.js';
import { isEscapeKey } from '../util.js';


const resetBtn = document.querySelector('.ad-form__reset');

function showSuccessMessage() {
  const success = document.querySelector('#success').content;
  const content = success.querySelector('.success').cloneNode(true);
  document.body.appendChild(content);

  document.addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', onHideSuccessMessageKeyDown);
}

function onHideSuccessMessageKeyDown(evt){
  if (isEscapeKey(evt)) {
    hideSuccessMessage();
  }
}

function hideSuccessMessage() {
  document.querySelector('.success').remove();
  document.removeEventListener('click', hideSuccessMessage);
  document.removeEventListener('keydown', onHideSuccessMessageKeyDown);
}

function resetForm() {
  resetFormGroup();
  showSuccessMessage();
  returnInitialMap();
  pristine.reset();
  getInitialSliderPosition();
  switchOnSubmitBtn();
}

resetBtn.addEventListener('click', resetForm);


export { resetForm };
