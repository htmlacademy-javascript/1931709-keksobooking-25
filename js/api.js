import { API_DATA, OFFER_LENGTH, FORM_URL } from './data.js';

const getCardsData = (onSucces, onError) => {
  fetch(API_DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error();
    })
    .then((cards) => {
      onSucces(cards.slice(0, OFFER_LENGTH));
    })
    .catch((err) => {
      onError(err.message);
    });
};

const sendData = (onSucces, onFail, body) => {
  fetch(FORM_URL, { method: 'POST', body })
    .then((response) => {
      if (response.ok) {
        return onSucces();
      } else {
        throw new Error();
      }
    }).catch(() => onFail());
};

export { getCardsData, sendData };
