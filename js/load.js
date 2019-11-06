'use strict';

(function () {
  var respData = {};
  var getData = function (url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        window.load.RespData = xhr.response;
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000; // 10s

    xhr.open('GET', url);
    xhr.send();
  };

  var onError = function (message) {
    // eslint-disable-next-line no-console
    console.error(message);
  };

  var onSuccess = function (data) {
    window.activateDeactivate.activatePage();
    // eslint-disable-next-line no-console
    console.log(data);
  };

  window.load = {
    respData: respData,
    getData: getData,
    onSuccess: onSuccess,
    onError: onError,
  };
})();
