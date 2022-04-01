import { resetFormGroup } from './disabled-form.js';
import { returnInitialMap } from '../map.js';
import { sliderElement } from '../slider.js';
import { isEscapeKey } from '../util.js';
import { switchOnBtn, priceField, pristine } from './validate-ad-form.js';

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
    document.removeEventListener('keydown', onHideSuccessMessageKeyDown);
  }
}

function hideSuccessMessage() {
  document.querySelector('.success').remove();
  document.removeEventListener('click', hideSuccessMessage);
}

function resetForm() {
  resetFormGroup();
  showSuccessMessage();
  returnInitialMap();
  pristine.reset();
  sliderElement.noUiSlider.set(priceField.value);
  switchOnBtn();
}

resetBtn.addEventListener('click', resetForm);


export { resetForm };
