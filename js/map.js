'use strict';

(function () {
  var map = document.querySelector('.map');

  var removePins = function () {
    var remPins = window.mark.pinContainer.querySelectorAll('.map__pin:not(.map__pin--main)');

    remPins.forEach(function (remPin) {
      window.mark.pinContainer.removeChild(remPin);
    });
  };

  var renderPins = function (ads) {
    var fragment = document.createDocumentFragment();
    ads.forEach(function (ad) {
      fragment.appendChild(window.mark.createPin(ad));
    });

    window.mark.pinContainer.appendChild(fragment);
  };

  window.map = {
    removePins: removePins,
    canvas: map,
    renderPins: renderPins,
  };
})();
