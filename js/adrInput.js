'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var adAddress = adForm.querySelector('#address');
  var formPublicationButton = adForm.querySelector('.ad-form__submit');

  var formPublicationData = new FormData(adForm);

  var renderAddress = function (coords) {
    adAddress.value = coords.x + ', ' + coords.y;
  };

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.load.putData('https://js.dump.academy/keksobooking', formPublicationData, window.modalBlocks.renderSuccessMessage, window.load.onError);
  });

  window.adrInput = {
    adForm: adForm,
    renderAddress: renderAddress,
    formPublicationButton: formPublicationButton,
    formPublicationData: formPublicationData,
  };
})();
