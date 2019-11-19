'use strict';

(function () {
  var filterContainer = window.map.canvas.querySelector('.map__filters-container');

  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');
  var photoTemplate = cardTemplate.querySelector('.popup__photos .popup__photo');
  var featureTemplate = cardTemplate.querySelector('.popup__features .popup__feature');

  var offerTypeEnToRu = {
    bungalo: 'Бунгало',
    flat: 'Квартира',
    house: 'Дом',
    palace: 'Дворец',
  };

  var offerFeatureNameToClass = {
    wifi: 'popup__feature--wifi',
    dishwasher: 'popup__feature--dishwasher',
    parking: 'popup__feature--parking',
    washer: 'popup__feature--washer',
    elevator: 'popup__feature--elevator',
    conditioner: 'popup__feature--conditioner',
  };

  var pluralize = function (num, one, two, five) {
    var mod100 = Math.abs(num) % 100;
    if (mod100 > 10 && mod100 < 20) {
      return five;
    }

    var mod10 = mod100 % 10;
    if (mod10 > 1 && mod10 < 5) {
      return two;
    }

    return mod10 === 1 ? one : five;
  };

  var getRoomEnding = function (rooms) {
    return pluralize(rooms, 'комната', 'комнаты', 'комнат');
  };

  var getGuestEnding = function (guests) {
    return pluralize(guests, 'гостя', 'гостей', 'гостей');
  };

  var formatCapacity = function (offer) {
    return offer.rooms + ' ' + getRoomEnding(offer.rooms) +
      ' для ' + offer.guests + ' ' + getGuestEnding(offer.guests);
  };

  var renderCard = function (ad) {
    var offer = ad.offer;
    var card = cardTemplate.cloneNode(true);

    card.querySelector('.popup__avatar').src = ad.author.avatar;
    card.querySelector('.popup__title').textContent = offer.title;
    card.querySelector('.popup__text--address').textContent = offer.address;
    card.querySelector('.popup__text--price').textContent = offer.price + '₽/ночь';
    card.querySelector('.popup__type').textContent = offerTypeEnToRu[offer.type];
    card.querySelector('.popup__text--capacity').textContent = formatCapacity(offer);
    card.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;

    var features = card.querySelector('.popup__features');
    features.innerHTML = '';

    if (offer.features.length > 0) {
      offer.features.forEach(function (feature) {
        var currentFeature = featureTemplate.cloneNode(true);
        currentFeature.classList.remove('popup__feature--wifi');
        currentFeature.classList.add(offerFeatureNameToClass[feature]);
        features.appendChild(currentFeature);
      });
    }

    card.querySelector('.popup__description').textContent = offer.description;

    var photos = card.querySelector('.popup__photos');
    photos.innerHTML = '';

    if (offer.photos.length > 0) {
      offer.photos.forEach(function (photo) {
        var currentPhoto = photoTemplate.cloneNode(true);
        currentPhoto.src = photo;
        photos.appendChild(currentPhoto);
      });
    }

    return card;
  };

  var onCardCloseButtonClick = function (evt) {
    evt.preventDefault();
    removeCard();
  };

  var onCardEscapePress = function (evt) {
    if (window.util.isEscapeKey(evt)) {
      removeCard();
    }
  };

  var addCardEventListeners = function (card) {
    card.querySelector('.popup__close').addEventListener('click', onCardCloseButtonClick);
    document.addEventListener('keydown', onCardEscapePress);
  };

  var showCard = function (ad) {
    var card = renderCard(ad);
    addCardEventListeners(card);

    window.map.canvas.insertBefore(card, filterContainer);
  };

  var removeCard = function () {
    var card = window.map.canvas.querySelector('.map__card');
    if (card !== null) {
      card.remove();
      window.util.onRemove();
      document.removeEventListener('keydown', onCardEscapePress);
    }
  };

  window.card = {
    show: showCard,
    remove: removeCard,
  };
})();
