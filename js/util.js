'use strict';

(function () {

  var enterKeycode = 13;
  var advCount = 8;

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
  };
})();
