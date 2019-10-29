
'use strict';

(function () {
  var createPin = function (ad) {
    var pin = window.pinTemplate.cloneNode(true);
    var pinImage = pin.querySelector('img');

    pin.style.left = (ad.location.x - window.PinSize.RADIUS) + 'px';
    pin.style.top = (ad.location.y - window.PinSize.HEIGHT) + 'px';
    pinImage.src = ad.author.avatar;
    pinImage.alt = ad.offer.type;

    return pin;
  };

  window.renderPins = function (ads) {
    var fragment = document.createDocumentFragment();
    ads.forEach(function (ad) {
      fragment.appendChild(createPin(ad));
    });

    window.pinContainer.appendChild(fragment);
  };
})();
