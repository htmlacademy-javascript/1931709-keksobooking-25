import { priceField } from './form/validate-ad-form.js';

const sliderElement = document.querySelector('.ad-form__slider');
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 5000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseInt(value, 10);
    },
    from: function (value) {
      return parseInt(value, 10);
    },
  }
});

sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});

priceField.addEventListener('input', (evt) => {
  let value = evt.target.value;

  if(!value) {
    value = ' ';
    return value;
  }

  sliderElement.noUiSlider.set(value);
});

export { sliderElement };
