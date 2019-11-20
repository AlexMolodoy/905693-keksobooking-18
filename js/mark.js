'use strict';

(function () {

  var PinSize = {
    WIDTH: 70,
    HEIGHT: 50,
    RADIUS: 25
  };

  var mainPin = document.querySelector('.map__pin--main');
  var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var pinContainer = document.querySelector('.map__pins');

  var setPinActive = function (pin, active) {
    pin.classList[active ? 'add' : 'remove']('map__pin--active');
  };

  var isActivePin = function (pin) {
    return pin.classList.contains('map__pin--active');
  };

  var createPin = function (ad) {
    var pin = pinTemplate.cloneNode(true);
    var pinImage = pin.querySelector('img');

    pin.style.left = (ad.location.x - PinSize.RADIUS) + 'px';
    pin.style.top = (ad.location.y - PinSize.HEIGHT) + 'px';
    pinImage.src = ad.author.avatar;
    pinImage.alt = ad.offer.title;

    pin.addEventListener('click', function () {
      if (isActivePin(pin)) {
        return;
      }

      setPinActive(pin, true);

      window.card.remove();
      window.card.show(ad);
      window.card.onRemove = function () {
        setPinActive(pin, false);
      };
    });

    return pin;
  };


  window.mark = {
    createPin: createPin,
    mainPin: mainPin,
    pinContainer: pinContainer,
  };
})();
