
'use strict';

(function () {

  var adFields = document.querySelectorAll('fieldset');
  var filterFields = window.map.canvas.querySelectorAll('.map__filter, .map__checkbox');
  var resetButton = window.adrInput.adForm.querySelector('button[type="reset"]');

  var onMainPinMouseDown = function () {
    window.backend.getData(window.backend.RequestUrl.GET, window.backend.onSuccess, window.backend.onError);
  };

  var onMainPinEnterPress = function (evt) {
    if (evt.keyCode === window.util.enterKeycode) {
      window.backend.getData(window.backend.RequestUrl.GET, window.load.onSuccess, window.load.onError);
    }
  };

  var activatePage = function (data) {
    window.map.canvas.classList.remove('map--faded');
    window.adrInput.adForm.classList.remove('ad-form--disabled');

    adFields.forEach(window.util.unsetDisabled);
    filterFields.forEach(window.util.unsetDisabled);

    window.map.renderPins(data);

    window.adrInput.renderAddress(window.mark.getMainPinCoords(window.mark.MainPinSize.HEIGHT));

    window.mark.mainPin.removeEventListener('mousedown', onMainPinMouseDown);
    window.mark.mainPin.removeEventListener('keydown', onMainPinEnterPress);
    resetButton.addEventListener('click', onResetClick);
    console.log(data);
  };

  var deactivatePage = function () {
    window.map.canvas.classList.add('map--faded');
    window.adrInput.adForm.classList.add('ad-form--disabled');

    adFields.forEach(window.util.setDisabled);
    filterFields.forEach(window.util.setDisabled);

    window.map.removePins();

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

  window.startStop = {
    activatePage: activatePage,
  };
})();
