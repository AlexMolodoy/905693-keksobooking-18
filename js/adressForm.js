'use strict';

(function () {
  var adAddress = adForm.querySelector('#address');
  var adForm = document.querySelector('.ad-form');

  var renderAddress = function (coords) {
    adAddress.value = coords.x + ', ' + coords.y;
  };

  window.adressForm = {
    adForm: adForm,
    renderAddress: renderAddress,
  };
})();
