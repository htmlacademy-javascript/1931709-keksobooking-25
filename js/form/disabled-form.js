import { HEADER_PREVIEW_IMG } from '../data.js';

const formGroup = document.forms;
const adFormPhoto = document.querySelector('.ad-form__photo');
const adFormHeaderPreview = document.querySelector('.ad-form-header__preview img');

const onDisabledForm = (form) => {
  const formName = form.classList[0];
  form.classList.add(`${formName}--disabled`);

  for (const child of form.children) {
    child.disabled = true;
  }
};

for (const formItem of formGroup) {
  onDisabledForm(formItem);
}

const removeDisabledForm = (form) => {
  const formName = form.classList[0];
  form.classList.remove(`${formName}--disabled`);

  for (const child of form.children) {
    child.disabled = false;
  }
};

const resetFormGroup = () => {
  formGroup[0].reset();
  formGroup[1].reset();

  if (adFormPhoto.children.length) {
    adFormPhoto.children[0].remove();
  }

  adFormHeaderPreview.src = HEADER_PREVIEW_IMG;
};

export { removeDisabledForm , resetFormGroup, onDisabledForm, formGroup };
