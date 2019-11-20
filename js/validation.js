'use strict';

(function () {
  var MIN_TITLE_LENGTH = 30;

  var houseTitleForm = window.advertsInput.adForm.querySelector('#title');
  var houseTypeFormCost = window.advertsInput.adForm.querySelector('#price');
  var houseTypeFormSelector = window.advertsInput.adForm.querySelector('#type');

  var offerTypeToMinPrice = {
    bungalo: 0,
    flat: 1000,
    house: 5000,
    palace: 10000,
  };

  var setMinPrice = function () {
    var minPrice = offerTypeToMinPrice[houseTypeFormSelector.value];
    houseTypeFormCost.min = minPrice;
    houseTypeFormCost.placeholder = minPrice;
  };

  var onErrorTitle = function () {
    if (houseTitleForm.value.length < MIN_TITLE_LENGTH) {
      houseTitleForm.setCustomValidity('Слишком короткое название');
      houseTitleForm.classList.add('error-field');
      return false;
    } else {
      houseTitleForm.setCustomValidity('');
      houseTitleForm.classList.remove('error-field');
      return true;
    }
  };

  var onErrorPriceNumber = function () {
    if (!houseTypeFormCost.value || +houseTypeFormCost.value < offerTypeToMinPrice[houseTypeFormSelector.value]) {
      houseTypeFormCost.classList.add('error-field');
      houseTypeFormCost.setCustomValidity('Сколько стоит?');
      return false;
    } else {
      houseTypeFormCost.setCustomValidity('');
      houseTypeFormCost.classList.remove('error-field');
      return true;
    }
  };

  setMinPrice();

  houseTypeFormSelector.addEventListener('change', function () {
    setMinPrice();
  });

  var houseTimeArive = window.advertsInput.adForm.querySelector('#timein');
  var houseTimeDepart = window.advertsInput.adForm.querySelector('#timeout');

  houseTimeArive.addEventListener('change', function () {
    houseTimeDepart.value = houseTimeArive.value;
  });

  houseTimeDepart.addEventListener('change', function () {
    houseTimeArive.value = houseTimeDepart.value;
  });

  var roomNumber = window.advertsInput.adForm.querySelector('#room_number');
  var guestNumber = window.advertsInput.adForm.querySelector('#capacity');

  var validateRoomAndGuest = function () {
    var rooms = +roomNumber.value;
    var guests = +guestNumber.value;

    if (rooms === 1 && rooms !== guests) {
      guestNumber.setCustomValidity('В однокомнатную квартиру разместить можно только 1 гостя');
      guestNumber.classList.add('error-field');
    } else if (rooms === 2 && (guests === 0 || guests > rooms)) {
      guestNumber.setCustomValidity('В 2х комнатную квартиру разместить можно только 1 или 2х гостей');
      guestNumber.classList.add('error-field');
    } else if (rooms === 3 && guests === 0) {
      guestNumber.setCustomValidity('В 3х комнатную квартиру разместить можно только 1, 2х или 3х гостей');
      guestNumber.classList.add('error-field');
    } else if (rooms === 100 && guests !== 0) {
      guestNumber.setCustomValidity('В 100 комнатной квартире резмещать гостей нельзя');
      guestNumber.classList.add('error-field');
    } else {
      guestNumber.setCustomValidity('');
      guestNumber.classList.remove('error-field');
    }
  };

  guestNumber.addEventListener('change', function () {
    validateRoomAndGuest();
  });

  roomNumber.addEventListener('change', function () {
    validateRoomAndGuest();
  });

  houseTitleForm.addEventListener('change', function () {
    onErrorTitle();
  });

  houseTypeFormCost.addEventListener('change', function () {
    onErrorPriceNumber();
  });

  window.validation = {
    onErrorTitle: onErrorTitle,
    onErrorPriceNumber: onErrorPriceNumber,
  };
})();
