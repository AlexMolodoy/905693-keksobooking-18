'use strict';

(function () {

  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;
  var ADV_COUNT = 8;
  var mainTagRange = document.querySelector('main');

  var setDisabled = function (element) {
    element.disabled = true;
  };

  var unsetDisabled = function (element) {
    element.disabled = false;
  };

  window.util = {
    enterKeycode: ENTER_KEYCODE,
    advCount: ADV_COUNT,
    escKeycode: ESC_KEYCODE,
    setDisabled: setDisabled,
    unsetDisabled: unsetDisabled,
    mainTagRange: mainTagRange,
  };
})();
