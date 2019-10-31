'use strict';

(function () {

  var PinSize = {
    WIDTH: 70,
    HEIGHT: 50,
    RADIUS: 25
  };

  var MainPinSize = {
    WIDTH: 65,
    HEIGHT: 80, // 1px — плавающий, в зависимости от выбора стороны округления
    RADIUS: 32, // 1px — плавающий, в зависимости от выбора стороны округления
  };

  var mainPin = document.querySelector('.map__pin--main');
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var pinContainer = document.querySelector('.map__pins');

  var getMainPinCoords = function (height) {
    return {
      x: mainPin.offsetLeft + MainPinSize.RADIUS,
      y: mainPin.offsetTop + height, // MainPinSize.RADIUS ИЛИ MainPinSize.HEIGHT
    };
  };

  var createPin = function (ad) {
    var pin = pinTemplate.cloneNode(true);
    var pinImage = pin.querySelector('img');

    pin.style.left = (ad.location.x - PinSize.RADIUS) + 'px';
    pin.style.top = (ad.location.y - PinSize.HEIGHT) + 'px';
    pinImage.src = ad.author.avatar;
    pinImage.alt = ad.offer.type;

    return pin;
  };

  var renderPins = function (ads) {
    var fragment = document.createDocumentFragment();
    ads.forEach(function (ad) {
      fragment.appendChild(createPin(ad));
    });

    pinContainer.appendChild(fragment);
  };

  window.pin = {
    MainPinSize: MainPinSize,
    mainPin: mainPin,
    getMainPinCoords: getMainPinCoords,
    renderPins: renderPins,
  };
})();
