'use strict';

(function () {
  window.adForm = document.querySelector('.ad-form');
  window.adFields = document.querySelectorAll('fieldset');
  window.filterFields = window.map.querySelectorAll('.map__filter, .map__checkbox');
  window.mainPin = document.querySelector('.map__pin--main');
  window.adAddress = window.advInfoForm.querySelector('#address');

  window.getMainPinCoords = function (height) {
    return {
      x: window.mainPin.offsetLeft + window.MainPinSize.RADIUS,
      y: window.mainPin.offsetTop + height, // MainPinSize.RADIUS ИЛИ MainPinSize.HEIGHT
    };
  };

  window.renderAddress = function (coords) {
    window.adAddress.value = coords.x + ', ' + coords.y;
  };

  var setDisabled = function (element) {
    element.disabled = true;
  };

  var unsetDisabled = function (element) {
    element.disabled = false;
  };

  var onMainPinMouseDown = function () {
    activatePage();
  };

  var onMainPinEnterPress = function (evt) {
    if (evt.keyCode === window.ENTER_KEYCODE) {
      activatePage();
    }
  };

  var onResetLinkMouseDown = function () {
    deactivatePage();
  };

  var activatePage = function () {
    window.map.classList.remove('map--faded');
    window.adForm.classList.remove('ad-form--disabled');

    window.adFields.forEach(unsetDisabled);
    window.filterFields.forEach(unsetDisabled);

    var ads = window.createAds(window.ADV_COUNT);

    window.renderPins(ads);

    window.renderAddress(window.getMainPinCoords(window.MainPinSize.HEIGHT));

    window.mainPin.removeEventListener('mousedown', onMainPinMouseDown);
    window.mainPin.removeEventListener('keydown', onMainPinEnterPress);
    window.mainPin.addEventListener('mousedown', onResetLinkMouseDown);
  };

  var deactivatePage = function () {
    window.map.classList.add('map--faded');
    window.advInfoForm.classList.add('ad-form--disabled');

    window.adFields.forEach(setDisabled);
    window.filterFields.forEach(setDisabled);

    window.renderAddress(window.getMainPinCoords(window.MainPinSize.RADIUS));

    window.mainPin.addEventListener('mousedown', onMainPinMouseDown);
    window.mainPin.addEventListener('keydown', onMainPinEnterPress);
    window.mainPin.removeEventListener('mousedown', onResetLinkMouseDown);
  };
})();

