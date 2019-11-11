'use strict';

(function () {
  var housingTypeSelector = document.querySelector('#housing-type');

  var similarAdsType = function () {
    var goodAds = [];
    var currentHousingType = document.querySelector('#housing-type').options[document.querySelector('#housing-type').options.selectedIndex].value;

    window.load.currentAds.forEach(function (element) {
      if (element.offer.type === currentHousingType) {
        goodAds.push(element);
      }
    });

    return goodAds;
  };

  var renderSimilarAds = function() {
    similarAdsType();
    window.startStop.delPins();
    window.mark.renderPins(similarAdsType());
  };

  housingTypeSelector.addEventListener('change', renderSimilarAds);

  window.sort = {
    renderSimilarAds: renderSimilarAds,
    similarAdsType: similarAdsType,
  };
})();
