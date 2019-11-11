'use strict';

(function () {
  var COMFORTABLE_QUANTITY_ADS = 5;

  var housingTypeSelector = document.querySelector('#housing-type');

  var similarAdsType = function () {
    var goodAds = [];
    var currentHousingType = document.querySelector('#housing-type').options[document.querySelector('#housing-type').options.selectedIndex].value;

    window.load.currentAds.forEach(function (element) {
      if (goodAds.length <= COMFORTABLE_QUANTITY_ADS) {
        if (element.offer.type === currentHousingType) {
          goodAds.push(element);
        }
      }
    });

    return goodAds;
  };

  var renderSimilarAds = function () {
    similarAdsType();
    window.startStop.delPins();
    window.mark.renderPins(similarAdsType());
  };

  housingTypeSelector.addEventListener('change', renderSimilarAds);

  window.sort = {
    goodAds: goodAds,
    renderSimilarAds: renderSimilarAds,
    similarAdsType: similarAdsType,
  };
})();
