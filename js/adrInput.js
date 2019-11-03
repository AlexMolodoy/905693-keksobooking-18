'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var adAddress = adForm.querySelector('#address');

  var renderAddress = function (coords) {
    adAddress.value = coords.x + ', ' + coords.y;
  };

  window.adrInput = {
    adForm: adForm,
    renderAddress: renderAddress,
  };
})();
