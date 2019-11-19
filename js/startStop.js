'use strict';

(function () {
  var adFields = document.querySelectorAll('fieldset');
  var resetButton = window.advertsInput.adForm.querySelector('button[type="reset"]');

  var activatePage = function () {
    window.map.canvas.classList.remove('map--faded');
    window.advertsInput.adForm.classList.remove('ad-form--disabled');

    adFields.forEach(window.util.unsetDisabled);

    resetButton.addEventListener('click', onResetClick);
  };

  var deactivatePage = function () {
    window.map.canvas.classList.add('map--faded');
    window.advertsInput.adForm.classList.add('ad-form--disabled');

    window.advertsInput.adForm.reset();
    window.filter.deactivate();

    adFields.forEach(window.util.setDisabled);

    window.card.remove();
    window.map.removePins();
    window.mainPin.reset();
    resetButton.removeEventListener('mousedown', onResetClick);
  };

  var onResetClick = function () {
    deactivatePage();
  };

  var onDomLoad = function () {
    deactivatePage();
  };

  resetButton.addEventListener('click', onResetClick);
  document.addEventListener('DOMContentLoaded', onDomLoad);

  window.mainPin.onFirstClick = function () {
    window.backend.getData(window.backend.RequestUrl.GET, window.backend.onSuccess, window.backend.onError);
  };

  window.startStop = {
    activatePage: activatePage,
  };
})();
