'use strict';

(function () {

  var KeyboardKey = {
    ENTER: 'Enter',
    ESCAPE: 'Esc',
    ESCAPE_IE: 'Escape',
  };

  var isEscapeKey = function (evt) {
    return evt.key === KeyboardKey.ESCAPE
      || evt.key === KeyboardKey.ESCAPE_IE;
  };

  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;
  var mainTagRange = document.querySelector('main');

  var setDisabled = function (element) {
    element.disabled = true;
  };

  var unsetDisabled = function (element) {
    element.disabled = false;
  };

  // no operation
  var noop = function () {};

  window.util = {
    isEscapeKey: isEscapeKey,
    enterKeycode: ENTER_KEYCODE,
    escKeycode: ESC_KEYCODE,
    setDisabled: setDisabled,
    unsetDisabled: unsetDisabled,
    onRemove: noop,
    mainTagRange: mainTagRange,
  };
})();
