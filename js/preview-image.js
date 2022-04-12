import { FORM_PHOTOS_SIZE } from './data.js';
import { addPreviewImage } from './util.js';

const avatarField = document.querySelector('#avatar');
const headerPreview = document.querySelector('.ad-form-header__preview img');
const housingImagesField = document.querySelector('#images');
const housingImagesPreview = document.querySelector('.ad-form__photo');

avatarField.addEventListener('change', (evt) => addPreviewImage(evt, headerPreview));

housingImagesField.addEventListener('change', (evt) => {
  const imageElement = document.createElement('img');

  if (housingImagesPreview.children.length) {
    housingImagesPreview.children[0].remove();
  }

  imageElement.width = FORM_PHOTOS_SIZE;
  imageElement.height = FORM_PHOTOS_SIZE;
  housingImagesPreview.append(imageElement);

  addPreviewImage(evt, imageElement);
});
