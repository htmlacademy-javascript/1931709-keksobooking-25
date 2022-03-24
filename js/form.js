const adForm = document.querySelector('.ad-form');
const interactiveElsinAdForm = adForm.children;
const mapFiltersForm = document.querySelector('.map__filters');
const interactiveElsInMapFiltersForm = mapFiltersForm.children;

function onDisabledForm(form, elements){
  const formName = form.classList[0];
  form.classList.add(`${formName}--disabled`);
  Array.from(elements).forEach((element) => {
    element.setAttribute('disabled', 'true');
  });
}

function removeDisabledForm(form, elements){
  const formName = form.classList[0];
  form.classList.remove(`${formName}--disabled`);
  Array.from(elements).forEach((element) => {
    element.removeAttribute('disabled');
  });
}

window.addEventListener('load', () => {
  onDisabledForm(adForm, interactiveElsinAdForm);
  onDisabledForm(mapFiltersForm, interactiveElsInMapFiltersForm);
},{once: true});

window.addEventListener('click', () => {
  removeDisabledForm(mapFiltersForm, interactiveElsInMapFiltersForm);
  removeDisabledForm(adForm, interactiveElsinAdForm);
},{once: true});
