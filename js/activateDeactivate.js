'use strict';

(function () {

  var adFields = document.querySelectorAll('fieldset');
  var filterFields = window.data.map.querySelectorAll('.map__filter, .map__checkbox');
  var resetButton = window.adrInput.adForm.querySelector('button[type="reset"]');

  var onMainPinMouseDown = function () {
    activatePage();
  };

  var onMainPinEnterPress = function (evt) {
    if (evt.keyCode === window.util.enterKeycode) {
      activatePage();
    }
  };

  var activatePage = function () {
    window.data.map.classList.remove('map--faded');
    window.adrInput.adForm.classList.remove('ad-form--disabled');

    adFields.forEach(window.util.unsetDisabled);
    filterFields.forEach(window.util.unsetDisabled);

    var ads = window.data.createAds(window.util.advCount);

    window.mark.renderPins(ads);

    window.adrInput.renderAddress(window.mark.getMainPinCoords(window.mark.MainPinSize.HEIGHT));

    window.mark.mainPin.removeEventListener('mousedown', onMainPinMouseDown);
    window.mark.mainPin.removeEventListener('keydown', onMainPinEnterPress);
    resetButton.addEventListener('click', onResetClick);
  };

  var deactivatePage = function () {
    window.data.map.classList.add('map--faded');
    window.adrInput.adForm.classList.add('ad-form--disabled');

    adFields.forEach(window.util.setDisabled);
    filterFields.forEach(window.util.setDisabled);

    window.adrInput.renderAddress(window.mark.getMainPinCoords(window.mark.MainPinSize.RADIUS));

    window.mark.mainPin.addEventListener('mousedown', onMainPinMouseDown);
    window.mark.mainPin.addEventListener('keydown', onMainPinEnterPress);
    resetButton.removeEventListener('mousedown', onResetClick);
  };

  var onResetClick = function () {
    deactivatePage();
  };

  window.mark.mainPin.addEventListener('mousedown', onMainPinMouseDown);
  window.mark.mainPin.addEventListener('keydown', onMainPinEnterPress);
  resetButton.addEventListener('click', onResetClick);

})();
