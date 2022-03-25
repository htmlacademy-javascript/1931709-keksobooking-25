const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');

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

window.addEventListener('click', () => {
  removeDisabledForm(mapFiltersForm);
  removeDisabledForm(adForm);
},{once: true});
