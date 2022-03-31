const formGroup = document.querySelectorAll('form');

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

const removeDisableFormGroup = () => {
  formGroup.forEach((form) => removeDisabledForm(form));
};

export { removeDisableFormGroup };
