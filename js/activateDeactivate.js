'use strict';

(function () {

  var adFields = document.querySelectorAll('fieldset');
  var filterFields = window.DataCue.map.querySelectorAll('.map__filter, .map__checkbox');
  var resetButton = window.adressForm.adForm.querySelector('button[type="reset"]');

  var onMainPinMouseDown = function () {
    activatePage();
  };

  var onMainPinEnterPress = function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      activatePage();
    }
  };

  var activatePage = function () {
    window.data.map.classList.remove('map--faded');
    window.adressForm.adForm.classList.remove('ad-form--disabled');

    adFields.forEach(window.util.unsetDisabled);
    filterFields.forEach(window.util.unsetDisabled);

    var ads = window.data.createAds(window.util.ADV_COUNT);

    window.pin.renderPins(ads);

    window.adressForm.renderAddress(window.pin.getMainPinCoords(window.pin.MainPinSize.HEIGHT));

    window.pin.mainPin.removeEventListener('mousedown', onMainPinMouseDown);
    window.pin.mainPin.removeEventListener('keydown', onMainPinEnterPress);
  };

  var deactivatePage = function () {
    window.DataCue.map.classList.add('map--faded');
    window.adressForm.adForm.classList.add('ad-form--disabled');

    adFields.forEach(window.util.setDisabled);
    filterFields.forEach(window.util.setDisabled);

    window.adressForm.renderAddress(window.pin.getMainPinCoords(window.pin.MainPinSize.RADIUS));

    window.pin.mainPin.addEventListener('mousedown', onMainPinMouseDown);
    window.pin.mainPin.addEventListener('keydown', onMainPinEnterPress);
  };

  var onResetClick = function () {
    deactivatePage(); // из модуля 'page'
  };

  window.pin.mainPin.addEventListener('mousedown', onMainPinMouseDown);
  window.pin.mainPin.addEventListener('keydown', onMainPinEnterPress);
  resetButton.addEventListener('click', onResetClick);

})();
