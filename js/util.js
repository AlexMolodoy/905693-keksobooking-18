'use strict';

(function () {

  var enterKeycode = 13;
  var advCount = 8;
  var mainTagRange = document.querySelector('main');

  var setDisabled = function (element) {
    element.disabled = true;
  };

  var unsetDisabled = function (element) {
    element.disabled = false;
  };

  window.util = {
    enterKeycode: enterKeycode,
    advCount: advCount,
    setDisabled: setDisabled,
    unsetDisabled: unsetDisabled,
    mainTagRange: mainTagRange,
  };
})();
