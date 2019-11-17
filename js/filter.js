'use strict';

(function () {
  var COMFORTABLE_QUANTITY_ADS = 5;

  var HousePrice = {
    LOW: 1000,
    HIGH: 50000,
  };

  var filters = document.querySelector('.map__filters');
  var housingTypeSelector = document.querySelector('#housing-type');
  var housingRoomsSelector = document.querySelector('#housing-rooms');
  var housingPriceSelector = document.querySelector('#housing-price');
  var housingGuestsSelector = document.querySelector('#housing-guests');
  var featureFieldSet = document.querySelector('#housing-features');

  var checkedFeatures = null;

  var checkHousingType = function (ad) {
    return housingTypeSelector.value === 'any'
    || housingTypeSelector.value === ad.offer.type;
  };

  var checkHousingRooms = function (ad) {
    return housingRoomsSelector.value === 'any'
      || +housingRoomsSelector.value === ad.offer.rooms;
  };

  var priceTypeToFilter = {
    low: function (price) {
      return price < HousePrice.LOW;
    },
    middle: function (price) {
      return price >= HousePrice.LOW && price <= HousePrice.HIGH;
    },
    high: function (price) {
      return price > HousePrice.HIGH;
    },
  };

  var checkHousingPrice = function (ad) {
    return housingPriceSelector.value === 'any'
       || priceTypeToFilter[housingPriceSelector.value](ad.offer.price);
  };

  var checkHousingGuests = function (ad) {
    return housingGuestsSelector.value === 'any'
    || +housingGuestsSelector.value === ad.offer.guests;
  };

  var checkFeatures = function (ad) {
    return checkedFeatures.every(function (feature) {
      return ad.offer.features.includes(feature.value);
    });
  };

  var getFilteredAds = function () {
    checkedFeatures = Array.from(featureFieldSet.querySelectorAll('input[type=checkbox]:checked'));

    var filteredAds = window.backend.currentAds
    .filter(function (ad) {
      return checkHousingType(ad)
              && checkHousingRooms(ad)
              && checkHousingPrice(ad)
              && checkHousingGuests(ad)
              && checkFeatures(ad);
    })
    .slice(0, COMFORTABLE_QUANTITY_ADS);

    checkedFeatures = null;

    return filteredAds;
  };

  var updateFilter = function () {
    window.map.removePins();
    window.map.renderPins(getFilteredAds());
  };

  var onFilterChange = function () {
    window.card.remove();
    updateFilter();
  };

  filters.addEventListener('change', onFilterChange);

  window.filter = {
    update: updateFilter,
  };
})();
