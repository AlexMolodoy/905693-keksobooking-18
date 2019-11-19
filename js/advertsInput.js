'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var adAddress = adForm.querySelector('#address');
  var formPublicationButton = adForm.querySelector('.ad-form__submit');

  var renderAddress = function (coords) {
    adAddress.value = coords.x + ', ' + coords.y;
  };

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var formData = new FormData(adForm);

    window.backend.postData(window.backend.RequestUrl.POST, formData, window.modalBlocks.renderSuccessMessage, window.modalBlocks.renderErrorMessage);
  });

  window.mainPin.onReset = function (coords) {
    renderAddress(coords);
  };

  window.mainPin.onMove = function (coords) {
    renderAddress(coords);
  };

  window.advertsInput = {
    adForm: adForm,
    renderAddress: renderAddress,
    formPublicationButton: formPublicationButton,
  };
})();
