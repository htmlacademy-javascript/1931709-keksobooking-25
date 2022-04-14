import { HEADER_PREVIEW_IMG } from '../data.js';

const formFilter = document.forms[0];
const adForm = document.forms[1];
const adFormPhoto = document.querySelector('.ad-form__photo');
const adFormHeaderPreview = document.querySelector('.ad-form-header__preview img');

const onDisabledForm = (form) => {
  const formName = form.classList[0];
  formFilter.classList.add(`${formName}--disabled`);

  for (const child of form.children) {
    child.disabled = true;
  }
};

onDisabledForm(formFilter);

const removeDisabledForm = () => {
  const formName = formFilter.classList[0];
  formFilter.classList.remove(`${formName}--disabled`);

  for (const child of formFilter.children) {
    child.disabled = false;
  }
};

const resetFormGroup = () => {
  adForm.reset();

  if (adFormPhoto.children.length) {
    adFormPhoto.children[0].remove();
  }

  adFormHeaderPreview.src = HEADER_PREVIEW_IMG;
};

export { removeDisabledForm , resetFormGroup, onDisabledForm, formFilter };
