'use strict';

(function () {
  var housingTypeSelector = document.querySelector('#housing-type');
  var currentHousingType = housingTypeSelector.querySelector('#housing-type').options.selectedIndex;

  housingTypeSelector.addEventListener('change', function () {alert();});


  // var similarAdsType = function () {
  //   var goodAds = [];

  //   window.load.createRequest.forEach(function (element) {
  //     if (window.load.createRequest.offer.type === currentHousingType) {
  //       goodAds.push(element);
  //     }
  //   });

  //   return goodAds;
  // };

  // var renderSimilarAds = function() {
  //   window.startStop.deletePins();
  //   similarAdsType();
  // };

  // window.sort = {
  //   renderSimilarAds: renderSimilarAds,
  // };
})();
