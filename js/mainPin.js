// main-pin.js
'use strict';

(function () {
  var MapRect = {
    LEFT: 0,
    TOP: 130,
    RIGHT: 1200,
    BOTTOM: 630,
  };

  var MainPinSize = {
    WIDTH: 65,
    HEIGHT: 80,
    RADIUS: 32,
  };

  var MainPinRect = {
    LEFT: MapRect.LEFT - MainPinSize.RADIUS,
    RIGHT: MapRect.RIGHT - MainPinSize.RADIUS,
    TOP: MapRect.TOP - MainPinSize.HEIGHT,
    BOTTOM: MapRect.BOTTOM - MainPinSize.HEIGHT,
  };

  var mainPin = document.querySelector('.map__pin--main');

  var initialCoords = {
    x: mainPin.offsetLeft,
    y: mainPin.offsetTop,
  };

  var getMainPinCoords = function (height) {
    return {
      x: mainPin.offsetLeft + MainPinSize.RADIUS,
      y: mainPin.offsetTop + height,
    };
  };

  var initFirstClick = function () {
    window.mainPin.onFirstClick(getMainPinCoords(MainPinSize.HEIGHT));
    removeMainPinListeners();
  };

  var onMainPinMouseDown = function () {
    initFirstClick();
  };

  var onMainPinEnterPress = function (evt) {
    if (window.util.isEscapeKey(evt)) {
      initFirstClick();
    }
  };

  var addMainPinListeners = function () {
    mainPin.addEventListener('keydown', onMainPinEnterPress);
    mainPin.addEventListener('mousedown', onMainPinMouseDown);
  };

  var removeMainPinListeners = function () {
    mainPin.removeEventListener('keydown', onMainPinEnterPress);
    mainPin.removeEventListener('mousedown', onMainPinMouseDown);
  };

  var renderPos = function (coords) { // { x: 0, y: 0 }
    mainPin.style.left = coords.x + 'px';
    mainPin.style.top = coords.y + 'px';
  };

  var resetMainPin = function () {
    renderPos(initialCoords);
    addMainPinListeners();
    window.mainPin.onReset(getMainPinCoords(MainPinSize.RADIUS));
  };

  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: mainPin.offsetLeft,
      y: mainPin.offsetTop,
    };

    window.mainPin.onMove(getMainPinCoords(MainPinSize.HEIGHT));

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var x = startCoords.x + moveEvt.clientX - evt.clientX;
      var y = startCoords.y + moveEvt.clientY - evt.clientY;

      var offset = {
        x: Math.min(Math.max(x, MainPinRect.LEFT), MainPinRect.RIGHT),
        y: Math.min(Math.max(y, MainPinRect.TOP), MainPinRect.BOTTOM),
      };

      renderPos(offset);
      window.mainPin.onMove(getMainPinCoords(MainPinSize.HEIGHT));
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp, {once: true});
  });

  window.mainPin = {
    reset: resetMainPin,
    onMove: window.util.noop,
    onReset: window.util.noop,
    onFirstClick: window.util.noop,
  };
})();
