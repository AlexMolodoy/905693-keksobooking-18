'use strict';
(function () {
  window.ENTER_KEYCODE = 13;

  window.PinSize = {
    WIDTH: 70,
    HEIGHT: 50,
    RADIUS: 25
  };

  window.MapRect = {
    LEFT: 0,
    TOP: 130,
    RIGHT: 1200,
    BOTTOM: 630
  };

  window.ADV_COUNT = 8;

  window.ADV_TYPES = ['palace', 'flat', 'house', 'bungalo'];
  window.ADV_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  window.ADV_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

  window.getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  window.createAds = function (count) {
    window.ads = [];

    for (var i = 1; i < count; i++) {
      window.ads.push({
        author: {
          avatar: 'img/avatars/user0' + i + '.png'
        },

        offer: {
          title: 'заголовок предложения',
          address: 'string',
          price: 100500,
          type: window.ADV_TYPES[window.getRandomNumber(0, window.ADV_TYPES.length)],
          rooms: 4,
          guests: 4,
          checkin: 'string',
          checkout: 'string',
          features: window.ADV_FEATURES.slice(0, window.getRandomNumber(0, window.ADV_FEATURES.length)),
          description: 'string',
          photos: window.ADV_PHOTOS.slice(0, window.getRandomNumber(0, window.ADV_PHOTOS.length))
        },

        location: {
          x: window.getRandomNumber(window.MapRect.LEFT, window.MapRect.RIGHT),
          y: window.getRandomNumber(window.MapRect.TOP, window.MapRect.BOTTOM)
        }
      });
    }

    return window.ads;
  };

  window.MainPinSize = {
    WIDTH: 65,
    HEIGHT: 80, // 1px — плавающий, в зависимости от выбора стороны округления
    RADIUS: 32, // 1px — плавающий, в зависимости от выбора стороны округления
  };
})();
