const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const formGroup = document.querySelectorAll('form');

const onDisabledForm = (form) => {
  const formName = form.classList[0];
  form.classList.add(`${formName}--disabled`);
  for(const child of form.children){
    child.setAttribute('disabled', 'true');
  }
};

const removeDisabledForm = (form) => {
  const formName = form.classList[0];
  form.classList.remove(`${formName}--disabled`);
  for(const child of form.children){
    child.removeAttribute('disabled');
  }
};
onDisabledForm(adForm);
onDisabledForm(mapFiltersForm);

const removeDisableFormGroup = () => {
  formGroup.forEach((form) => removeDisabledForm(form));
};

export { removeDisableFormGroup };