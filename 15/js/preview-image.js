import { FORM_PHOTOS_SIZE } from './data.js';
import { addPreviewImage } from './util.js';

const avatarField = document.querySelector('#avatar');
const headerPreview = document.querySelector('.ad-form-header__preview img');
const housingImagesField = document.querySelector('#images');
const housingImagesPreview = document.querySelector('.ad-form__photo');

avatarField.addEventListener('change', (evt) => addPreviewImage(evt, headerPreview));


housingImagesField.addEventListener('change', (evt) => {
  if (housingImagesPreview.children.length) {
    housingImagesPreview.children[0].remove();
  }

  const img = document.createElement('img');
  img.width = FORM_PHOTOS_SIZE;
  img.height = FORM_PHOTOS_SIZE;
  housingImagesPreview.append(img);

  addPreviewImage(evt, img);
});
