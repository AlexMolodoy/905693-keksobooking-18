'use strict';

var ENTER_KEYCODE = 13;

var PinSize = {
  WIDTH: 70,
  HEIGHT: 50,
  RADIUS: 25
};

var MapRect = {
  LEFT: 0,
  TOP: 130,
  RIGHT: 1200,
  BOTTOM: 630
};

var ADV_COUNT = 8;

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

// var map = document.querySelector('.map');
var advInfoForm = document.querySelector('.ad-form');
var advInfoTagsSelect = document.querySelectorAll('select.ad-form');
var advInfoTagsInput = document.querySelectorAll('input.ad-form');
var advInfoFormFilters = document.querySelector('.map__filters');
var mapActivationEvent = document.querySelector('.map__pin--main');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var pinContainer = document.querySelector('.map__pins');

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

var mapActivate = function () {
  advInfoForm.classList.remove('ad-form--disabled');

  advInfoTagsSelect.forEach(function (advInfo) {
    advInfo.disabled = false;
  });

  advInfoTagsInput.forEach(function (advInfo) {
    advInfo.disabled = false;
  });

  advInfoFormFilters.disabled = false;
};

mapActivationEvent.addEventListener('mousedown', mapActivate);
mapActivationEvent.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    mapActivate();
  }
});

var ads = createAds(ADV_COUNT);

renderPins(ads);

// map.classList.remove('map--faded');
advInfoForm.classList.add('ad-form--disabled');

advInfoTagsSelect.forEach(function (advInfo) {
  advInfo.disabled = true;
});

advInfoTagsInput.forEach(function (advInfo) {
  advInfo.disabled = true;
});

advInfoFormFilters.disabled = true;


