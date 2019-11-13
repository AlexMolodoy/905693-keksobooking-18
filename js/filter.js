'use strict';

(function () {
  var COMFORTABLE_QUANTITY_ADS = 5;

  // #housing-type
  var housingTypeSelector = document.querySelector('#housing-type');
  var housingRoomsSelector = document.querySelector('#housing-rooms');
  // var housingPriceSelector = document.querySelector('#housing-price');
  var housingGuestsSelector = document.querySelector('#housing-guests');
  var filterWifiSelector = document.querySelector('#filter-wifi');
  var filterDishwasherSelector = document.querySelector('#filter-dishwasher');
  var filterParkingSelector = document.querySelector('#filter-parking');
  var filterWasherSelector = document.querySelector('#filter-washer');
  var filterElevatorSelector = document.querySelector('#filter-elevator');
  var filterConditionerSelector = document.querySelector('#filter-conditioner');


  var checkHousingType = function (ad) {
    return housingTypeSelector.value === 'any'
    || housingTypeSelector.value === ad.offer.type;
  };

  var checkHousingRooms = function (ad) {
    return housingRoomsSelector.value === 'any'
      || +housingRoomsSelector.value === ad.offer.rooms;
  };

  // var checkHousingPrice = function (ad) {
  //   return housingPriceSelector.value === 'any'
  //   || housingPriceSelector.value === ad.offer.price;
  // };

  var checkHousingGuests = function (ad) {
    return housingGuestsSelector.value === 'any'
    || +housingGuestsSelector.value === ad.offer.guests;
  };

  var checkFilterWifi = function () {
    return filterWifiSelector.chekcked;
  };

  var checkFilterDishwasher = function () {
    return filterDishwasherSelector.chekcked;
  };

  var checkFilterParking = function () {
    return filterParkingSelector.chekcked;
  };

  var checkFilterWasher = function () {
    return filterWasherSelector.chekcked;
  };

  var checkFilterElevator = function () {
    return filterElevatorSelector.chekcked;
  };

  var checkFilterConditioner = function () {
    return filterConditionerSelector.chekcked;
  };

  var getFilteredAds = function () {
    var filteredAds = window.backend.currentAds
    .filter(function (ad) {
      return checkHousingType(ad)
              && checkHousingRooms(ad)
              // && checkHousingPrice(ad)
              && checkHousingGuests(ad)
              && checkFilterWifi()
              && checkFilterDishwasher()
              && checkFilterParking()
              && checkFilterWasher()
              && checkFilterElevator()
              && checkFilterConditioner();
    })
    .slice(0, COMFORTABLE_QUANTITY_ADS);

    return filteredAds;
  };

  var updateFilter = function () {
    window.map.removePins();
    window.map.renderPins(getFilteredAds());
  };

  var onHousingTypeChange = function () {
    updateFilter();
  };

  housingTypeSelector.addEventListener('change', onHousingTypeChange); // важно не забыть создавать обработчик

  window.filter = {
    update: updateFilter,
  };
})();
