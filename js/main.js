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

// ------------------------------------------------
var MainPinSize = {
  WIDTH: 65,
  HEIGHT: 80, // 1px — плавающий, в зависимости от выбора стороны округления
  RADIUS: 32, // 1px — плавающий, в зависимости от выбора стороны округления
};

var map = document.querySelector('.map');
var advInfoForm = document.querySelector('.ad-form');
var adFields = document.querySelectorAll('fieldset');
var filterFields = map.querySelectorAll('.map__filter, .map__checkbox');
var mainPin = document.querySelector('.map__pin--main');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var pinContainer = document.querySelector('.map__pins');

var resEvent = adFields.querySelector('.ad-form__reset');

var adAddress = advInfoForm.querySelector('#address');

var getMainPinCoords = function (height) {
  return {
    x: mainPin.offsetLeft + MainPinSize.RADIUS,
    y: mainPin.offsetTop + height, // MainPinSize.RADIUS ИЛИ MainPinSize.HEIGHT
  };
};

var renderAddress = function (coords) {
  adAddress.value = coords.x + ', ' + coords.y;
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
  if (evt.keyCode === ENTER_KEYCODE) {
    activatePage();
  }
};

var activatePage = function () {
  map.classList.remove('map--faded');
  advInfoForm.classList.remove('ad-form--disabled');

  adFields.forEach(unsetDisabled);
  filterFields.forEach(unsetDisabled);

  var ads = createAds(ADV_COUNT);

  renderPins(ads);

  renderAddress(getMainPinCoords(MainPinSize.HEIGHT));

  mainPin.removeEventListener('mousedown', onMainPinMouseDown);
  mainPin.removeEventListener('keydown', onMainPinEnterPress);
};

var deactivatePage = function () {
  map.classList.add('map--faded');
  advInfoForm.classList.add('ad-form--disabled');

  adFields.forEach(setDisabled);
  filterFields.forEach(setDisabled);

  renderAddress(getMainPinCoords(MainPinSize.RADIUS));

  mainPin.addEventListener('mousedown', onMainPinMouseDown);
  mainPin.addEventListener('keydown', onMainPinEnterPress);
};

var onResButtonPress = 

deactivatePage();
