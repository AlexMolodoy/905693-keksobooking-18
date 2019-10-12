'use strict';


var massOfferVar = [];
var massOfferType = ['palace', 'flat', 'house', 'bungalo'];
var massFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var massPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var offerVar = function () {

  for (var i = 0; i < 8; i++) {
    massOfferVar[i] =
    {
      'author': {
        'avatar': 'img/avatars/user0' + i + '.png'
      },

      'offer': {
        'tittle': 'заголовок предложения',
        'address': 'string',
        'price': 100500,
        'type': massOfferType[Math.floor(4 * Math.random())],
        'rooms': 4,
        'guests': 4,
        'checkin': 'string',
        'checkout': 'string',
        'features': massFeatures.slice(0, Math.floor(6 * Math.random())),
        'description': 'string',
        'photos': massPhotos.slice(0, Math.floor(3 * Math.random()))
      },

      'location': {
        'x': Math.floor(1000 * Math.random()),
        'y': 130 + Math.floor(500 * Math.random())
      }
    };
  }
};

var del = document.querySelector('.map--faded');
del.classList.remove('map--faded');

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function (someMass) {
  var listItem = makeElement('article', 'map__card');
  listItem.classList.add('popup');

  var picture = makeElement('img', 'popup__avatar');
  picture.src = someMass.author.avatar;
  picture.alt = someMass.offer.tittle;
  listItem.appendChild(picture);

  var closeButton = makeElement('button', 'popup__close', 'Закрыть');
  closeButton.type = 'button';
  listItem.appendChild(closeButton);

  var title = makeElement('h3', 'popup__title', someMass.offer.tittle);
  listItem.appendChild(title);

  var address = makeElement('p', 'popup__text', someMass.offer.address);
  address.classList.add('popup__text--address');
  listItem.appendChild(address);

  var price = makeElement('p', 'popup__text', someMass.offer.price);
  address.classList.add('popup__text--price');
  listItem.appendChild(price);

  var typeHouse = makeElement('h4', 'popup__type', someMass.offer.type);
  listItem.appendChild(typeHouse);

  var roomsGuests = makeElement('p', 'popup__text', someMass.offer.rooms + ' комнаты для ' + someMass.offer.guests + ' гостей');
  roomsGuests.classList.add('popup__text--capacity');
  listItem.appendChild(roomsGuests);

  var checkInOut = makeElement('p', 'popup__type', 'Заезд после ' + someMass.offer.checkin + ', выезд до ' + someMass.offer.checkout);
  roomsGuests.classList.add('popup__text--capacity');
  listItem.appendChild(checkInOut);

  var featuresHouse = makeElement('ul', 'popup__features');
  for (var i = 0; i < someMass.offer.features.length; i++) {
    var liFeature = makeElement('li', 'popup__feature');
    liFeature.classList.add('popup__feature--' + someMass.offer.features[i]);
    featuresHouse.appendChild(liFeature);
  }
  listItem.appendChild(featuresHouse);

  var descCard = makeElement('p', 'popup__description', someMass.offer.description);
  listItem.appendChild(descCard);

  var somePhotos = makeElement('div', 'popup__photos');
  for (var j = 0; j < someMass.offer.photos.length; j++) {
    var photo = makeElement('img', 'popup__photo');
    photo.src = someMass.offer.photos[j];
    photo.alt = 'Фотография жилья';
    somePhotos.appendChild(photo);
  }
  listItem.appendChild(somePhotos);

  return listItem;
};

var renderCard = function (massPin) {
  var cardList = document.getElementById('card');

  for (var i = 0; i < massOfferVar[i].offer.length; i++) {
    var cardItem = createCard(massPin[i]);
    cardList.appendChild(cardItem);
  }
};

var createPin = function (inputMass) {
  var mapPin = makeElement('button', 'map__pin');
  mapPin.type = 'button';
  mapPin.style = 'left: 200px; top: 400px;';

  var pinPicture = makeElement('img', 'map__pin');
  pinPicture.src = inputMass.author.avatar;
  pinPicture.alt = 'Метка объявления';
  pinPicture.draggable = 'false';
  mapPin.appendChild(pinPicture);

  return mapPin;
};

var renderPin = function (massPin) {
  var pinList = document.getElementById('pin');

  for (var i = 0; i < massOfferVar[i].offer.length; i++) {
    var pinItem = createPin(massPin[i]);
    pinList.appendChild(pinItem);
  }
};

offerVar();

renderCard(massOfferVar);

renderPin(massOfferVar);
