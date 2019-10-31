'use strict';

(function () {
  var MapRect = {
    LEFT: 0,
    TOP: 130,
    RIGHT: 1200,
    BOTTOM: 630
  };

  var ADV_TYPES = ['palace', 'flat', 'house', 'bungalo'];
  var ADV_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var ADV_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  var createAds = function (count) {
    var ads = [];

    for (var i = 1; i < count; i++) {
      ads.push({
        author: {
          avatar: 'img/avatars/user0' + i + '.png'
        },

        offer: {
          title: 'заголовок предложения',
          address: 'string',
          price: 100500,
          type: ADV_TYPES[getRandomNumber(0, ADV_TYPES.length)],
          rooms: 4,
          guests: 4,
          checkin: 'string',
          checkout: 'string',
          features: ADV_FEATURES.slice(0, getRandomNumber(0, ADV_FEATURES.length)),
          description: 'string',
          photos: ADV_PHOTOS.slice(0, getRandomNumber(0, ADV_PHOTOS.length))
        },

        location: {
          x: getRandomNumber(MapRect.LEFT, MapRect.RIGHT),
          y: getRandomNumber(MapRect.TOP, MapRect.BOTTOM)
        }
      });
    }

    return ads;
  };

  var map = document.querySelector('.map');


  window.data = {
    createAds: createAds,
    map: map,
  };
})();
