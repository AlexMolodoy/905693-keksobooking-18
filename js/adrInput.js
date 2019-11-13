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

    window.backned.postData(window.backend.RequestUrl.POST, formData, window.modalBlocks.renderSuccessMessage, window.backend.onError);
  });

  window.adrInput = {
    adForm: adForm,
    renderAddress: renderAddress,
    formPublicationButton: formPublicationButton,
  };
})();
