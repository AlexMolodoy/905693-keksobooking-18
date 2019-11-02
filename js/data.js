'use strict';

(function () {
  var MapRect = {
    LEFT: 0,
    TOP: 130,
    RIGHT: 1200,
    BOTTOM: 630
  };

  var advTypes = ['palace', 'flat', 'house', 'bungalo'];
  var advfeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var advPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

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
          type: advTypes[getRandomNumber(0, advTypes.length)],
          rooms: 4,
          guests: 4,
          checkin: 'string',
          checkout: 'string',
          features: advfeatures.slice(0, getRandomNumber(0, advfeatures.length)),
          description: 'string',
          photos: advPhotos.slice(0, getRandomNumber(0, advPhotos.length))
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
