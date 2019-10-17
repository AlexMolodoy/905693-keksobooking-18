'use strict';

var PinSizes = {WIDTH: 70, HEIGHT: 50, RADIUS: 25};
var MapSets = {LEFT: 0, TOP: 130, RIGHT: 1200, BOTTOM: 630};
var COUNT_ADV = 8;
var MASS_ADV_TYPES = ['palace', 'flat', 'house', 'bungalo'];
var MASS_ADV_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var MASS_ADV_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var createAdvs = function () {

  var massOfferVar = [];
  for (var i = 0; i < COUNT_ADV; i++) {
    massOfferVar =
    {
      'author': {
        'avatar': 'img/avatars/user0' + i + '.png'
      },

      'offer': {
        'title': 'заголовок предложения',
        'address': 'string',
        'price': 100500,
        'type': MASS_ADV_TYPES[getRandomNumber(0, MASS_ADV_TYPES.length)],
        'rooms': 4,
        'guests': 4,
        'checkin': 'string',
        'checkout': 'string',
        'features': MASS_ADV_FEATURES.slice(0, getRandomNumber(0, MASS_ADV_FEATURES.length)),
        'description': 'string',
        'photos': MASS_ADV_PHOTOS.slice(0, getRandomNumber(0, MASS_ADV_PHOTOS.length))
      },

      'location': {
        'x': getRandomNumber(MapSets.LEFT, MapSets.RIGHT),
        'y': getRandomNumber(MapSets.TOP, MapSets.BOTTOM)
      }
    };
  }

  return massOfferVar;
};

var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

var createPin = function (inputElement) {
  var mapPin = pinTemplate.cloneNode(true);
  mapPin.style.left = (inputElement.location.x - PinSizes.RADIUS) + 'px';
  mapPin.style.top = (inputElement.location.y - PinSizes.HEIGHT) + 'px';

  var pinPicture = document.querySelector('.map__pin');
  mapPin.appendChild(pinPicture);

  return mapPin;
};

var pinElements = document.querySelector('#pin');

var fragmentPin = document.createDocumentFragment();

createAdvs.forEach(function (createAdv) {
  var buttonFragment = createPin(createAdv);
  fragmentPin.appendChild(buttonFragment);
});

pinElements.appendChild(fragmentPin);

var delClass = document.querySelector('.map');
delClass.classList.remove('map--faded');
