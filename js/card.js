'use strict';

(function () {
  var HouseType = {
    palace: 'Дворец',
    house: 'Дом',
    bungalo: 'Бунгало',
    flst: 'Квартира',
  };

  var filterContainer = window.map.canvas.querySelector('.map__filters-container');

  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');

  var renderCard = function (ad) {
    var card = cardTemplate.cloneNode(true);

    card.querySelector('.popup__avatar').src = ad.author.avatar;
    card.querySelector('.popup__title').textContent = ad.offer.title;
    card.querySelector('.popup__text--address').textContent = ad.offer.address;
    card.querySelector('.popup__text--price').textContent = ad.offer.price + '₽/ночь';
    card.querySelector('.popup__type').textContent = ad.offer.type;
    card.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
    card.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout;
    //  не понимаю как добавить фичи
    card.querySelector('.popup__description').textContent = ad.offer.description;
    if (ad.offer.photos.length !== 0) {
      // не могу добавить более 1 фотки
      ad.offer.photos.forEach(function (element) {
        console.log(element);
        var currentPhoto = card.querySelector('.popup__photo');
        // currentPhoto.src = element;
        currentPhoto.setAttribute('src', element);
        // card.querySelector('.popup__photos').appendChild(currentPhoto);
        console.log(card.querySelector('.popup__photos'));
      });
    } else {
      card.removeChild(card.querySelector('.popup__photos'));
    }

    return card;
  };

  var showCard = function (ad) {
    var card = renderCard(ad);

    window.map.canvas.insertBefore(card, filterContainer);
  };

  var removeCard = function () {
    var card = window.map.canvas.querySelector('.map__card');
    if (card !== null) {
      card.remove();
      window.card.onRemove();
    }
  };

  // no operation
  var noop = function () {};

  window.card = {
    show: showCard,
    remove: removeCard,
    onRemove: noop,
  };
})();
