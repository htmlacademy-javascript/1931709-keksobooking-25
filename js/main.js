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
import { showError } from './form/error-form-message.js';

setSubmitForm(resetForm, showError);
