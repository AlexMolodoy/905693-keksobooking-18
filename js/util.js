'use strict';

(function () {

  var ENTER_KEYCODE = 13;
  var ADV_COUNT = 8;

  var setDisabled = function (element) {
    element.disabled = true;
  };

  var unsetDisabled = function (element) {
    element.disabled = false;
  };

  window.util = {
    ENTER_KEYCODE: ENTER_KEYCODE,
    ADV_COUNT: ADV_COUNT,
    setDisabled: setDisabled,
    unsetDisabled: unsetDisabled,
  };
})();
