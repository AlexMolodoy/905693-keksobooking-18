'use strict';

(function () {
  var OK_SERV_RESPONSE = 200;
  var REQV_TIMEOUT = 10000;

  var errorMessage = document.querySelector('#error').content.querySelector('.error');

  var renderErrorMessage = function () {
    window.util.mainTagRange.appendChild(errorMessage);
    var dropButton = document.querySelector('button.error__button');
    dropButton.addEventListener('mousedown', function () {
      window.util.mainTagRange.removeChild(errorMessage);
    });
    dropButton.removeEventListener('mousedown', function () {
      window.util.mainTagRange.removeChild(errorMessage);
    });
  };

  var getData = function (url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === OK_SERV_RESPONSE) {
        onSuccess(xhr.response);
      } else {
        onError();
      }
    });

    xhr.addEventListener('error', function () {
      onError();
    });

    xhr.addEventListener('timeout', function () {
      onError();
    });

    xhr.timeout = REQV_TIMEOUT;

    xhr.open('GET', url);
    xhr.send();
  };

  var onError = function () {
    renderErrorMessage();
  };

  var onSuccess = function (data) {
    window.startStop.activatePage(data);
  };

  window.load = {
    getData: getData,
    onSuccess: onSuccess,
    onError: onError,
  };
})();
