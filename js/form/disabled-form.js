import { HEADER_PREVIEW_IMG } from '../data.js';

const formGroup = document.querySelectorAll('form');
const adFormPhoto = document.querySelector('.ad-form__photo');
const adFormHeaderPreview = document.querySelector('.ad-form-header__preview img');

const onDisabledForm = (form) => {
  const formName = form.classList[0];
  form.classList.add(`${formName}--disabled`);

  for (const child of form.children) {
    child.setAttribute('disabled', 'true');
  }
};

const removeDisabledForm = (form) => {
  const formName = form.classList[0];
  form.classList.remove(`${formName}--disabled`);

  for (const child of form.children) {
    child.removeAttribute('disabled');
  }
};

formGroup.forEach((form) => onDisabledForm(form));

const removeDisabledFormGroup = () => {
  formGroup.forEach((form) => removeDisabledForm(form));
};

const resetFormGroup = () => {
  formGroup.forEach((form) => form.reset());
  adFormPhoto.children[0].remove();
  adFormHeaderPreview.src = HEADER_PREVIEW_IMG;
};

export { removeDisabledFormGroup , resetFormGroup, onDisabledForm };
