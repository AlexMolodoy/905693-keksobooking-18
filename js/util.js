'use strict';

(function () {

  var KeyboardKey = {
    ENTER: 'Enter',
    ESCAPE: 'Esc',
    ESCAPE_IE: 'Escape',
  };

  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;
  var mainTagRange = document.querySelector('main');

  var isEscapeKey = function (evt) {
    return evt.key === KeyboardKey.ESCAPE
      || evt.key === KeyboardKey.ESCAPE_IE;
  };

  var setDisabled = function (element) {
    element.disabled = false;
  };

  var unsetDisabled = function (element) {
    element.disabled = false;
  };

  var noToDo = function () {}; // no operation


  window.util = {
    isEscapeKey: isEscapeKey,
    enterKeycode: ENTER_KEYCODE,
    escKeycode: ESC_KEYCODE,
    setDisabled: setDisabled,
    unsetDisabled: unsetDisabled,
    onRemove: noToDo,
    mainTagRange: mainTagRange,
  };
})();
