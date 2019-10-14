'use strict';

var PinSize = {WIDTH: 70, HEIGHT: 50, RADIUS: 25};
var MapSet = {LEFT: 0, TOP: 130, RIGHT: 1200, BOTTOM: 630};
var COUNT_ADV = 8;
var MASS_ADV_TYPE = ['palace', 'flat', 'house', 'bungalo'];
var MASS_ADV_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var MASS_ADV_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var createAdvData = function () {

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
        'type': MASS_ADV_TYPE[getRandomNumber(0, MASS_ADV_TYPE.length)],
        'rooms': 4,
        'guests': 4,
        'checkin': 'string',
        'checkout': 'string',
        'features': MASS_ADV_FEATURES.slice(0, getRandomNumber(0, MASS_ADV_FEATURES.length)),
        'description': 'string',
        'photos': MASS_ADV_PHOTOS.slice(0, getRandomNumber(0, MASS_ADV_PHOTOS.length))
      },

      'location': {
        'x': getRandomNumber(MapSet.LEFT, MapSet.RIGHT),
        'y': getRandomNumber(MapSet.TOP, MapSet.BOTTOM)
      }
    };
  }

  return massOfferVar;
};

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createPin = function (inputMass) {
  var mapPin = makeElement('button', 'map__pin');
  mapPin.type = 'button';
  mapPin.style.left = inputMass.location.x + PinSize.RADIUS + 'px';
  mapPin.style.top = inputMass.location.y + PinSize.HEIGHT + 'px';

  var pinPicture = makeElement('img', 'map__pin');
  pinPicture.src = inputMass.author.avatar;
  pinPicture.alt = createAdvData.offer.title;
  pinPicture.draggable = 'false';
  mapPin.appendChild(pinPicture);

  return mapPin;
};


var pinList = document.querySelector('#pin');

createAdvData.forEach(function (pinAdv) {
  var pinItem = createPin(pinAdv);
  pinList.appendChild(pinItem);
});


var del = document.querySelector('.map');
del.classList.remove('map--faded');
