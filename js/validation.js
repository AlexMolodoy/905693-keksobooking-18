'use strict';

(function () {
  var houseTypeFormCost = window.adrInput.adForm.querySelector('#price');
  var houseTypeFormSelector = window.adrInput.adForm.querySelector('#type');

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

  setMinPrice();

  houseTypeFormSelector.addEventListener('change', function () {
    setMinPrice();
  });

  var houseTimeArive = window.adrInput.adForm.querySelector('#timein');
  var houseTimeDepart = window.adrInput.adForm.querySelector('#timeout');

  houseTimeArive.addEventListener('change', function () {
    houseTimeDepart.value = houseTimeArive.value;
  });

  houseTimeDepart.addEventListener('change', function () {
    houseTimeArive.value = houseTimeDepart.value;
  });

  var roomNumber = window.adrInput.adForm.querySelector('#room_number');
  var guestNumber = window.adrInput.adForm.querySelector('#capacity');

  var validateRoomAndGuest = function () {
    var rooms = +roomNumber.value;
    var guests = +guestNumber.value;

    if (rooms === 1 && rooms !== guests) {
      guestNumber.setCustomValidity('В однокомнатную квартиру разместить можно только 1 гостя');
    } else if (rooms === 2 && (guests === 0 || guests > rooms)) {
      guestNumber.setCustomValidity('В 2х комнатную квартиру разместить можно только 1 или 2х гостей');
    } else if (rooms === 3 && guests === 0) {
      guestNumber.setCustomValidity('В 3х комнатную квартиру разместить можно только 1, 2х или 3х гостей');
    } else if (rooms === 100 && guests !== 0) {
      guestNumber.setCustomValidity('В 100 комнатной квартире резмещать гостей нельзя');
    } else {
      guestNumber.setCustomValidity('');
    }
  };

  guestNumber.addEventListener('change', function () {
    validateRoomAndGuest();
  });

  roomNumber.addEventListener('change', function () {
    validateRoomAndGuest();
  });
  window.validation = {
  };
})();
