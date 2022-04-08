import './data.js';
import './util.js';
import './offer.js';
import './form/disabled-form.js';
import './form/validate-ad-form.js';
import './form/reset-form.js';
import './map.js';
import './slider.js';
import './api.js';
import './form/filter-form.js';
import './preview-image.js';
import { setSubmitForm } from './form/validate-ad-form.js';
import { resetForm } from './form/reset-form.js';
import { getCardsData } from './api.js';
import { renderCardsOnMap } from './map.js';
import { showError, errorMapMessage } from './form/error-form-message.js';
import { setFilterHousingValues } from './form/filter-form.js';
import { debounce } from './util.js';
import { DEBOUCE_TIME_OUT } from './data.js';

setSubmitForm(resetForm, showError);

getCardsData((cards) => {
  renderCardsOnMap(cards);
  setFilterHousingValues(debounce((target) => renderCardsOnMap(cards, target), DEBOUCE_TIME_OUT));
}, errorMapMessage);
