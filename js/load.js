'use strict';

(function () {
  var respData = {};

  var errorMessage = document.querySelector('#error').content.querySelector('.error');

  var renderErrorMessage = function () {
    window.util.mainTagRange.appendChild(errorMessage);
    var dropButton = document.querySelector('button.error__button');
    dropButton.addEventListener('mousedown', function () {
      window.util.mainTagRange.removeChild(errorMessage);
    });
  };

  var getData = function (url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
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

    xhr.timeout = 10000;

    xhr.open('GET', url);
    xhr.send();
  };

  var onError = function () {
    renderErrorMessage();
  };

  var onSuccess = function (data) {
    window.activateDeactivate.activatePage(data);
  };

  window.load = {
    respData: respData,
    getData: getData,
    onSuccess: onSuccess,
    onError: onError,
  };
})();
