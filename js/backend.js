'use strict';

(function () {

  var RequestUrl = {
    GET: 'https://js.dump.academy/keksobooking/data',
    POST: 'https://js.dump.academy/keksobooking',
  };
  var OK_SERV_RESPONSE = 200;
  var REQV_TIMEOUT = 10000;
  var currentAds = [];

  var createRequest = function (onSuccess, onError) {
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

    return xhr;
  };

  var getData = function (url, onSuccess, onError) {
    var req = createRequest(onSuccess, onError);
    req.open('GET', url);
    req.send();
  };

  var postData = function (url, data, onSuccess, onError) {
    var req = createRequest(onSuccess, onError);
    req.open('POST', url);
    req.send(data);
  };

  var onError = function () {
    window.modalBlocks.renderErrorMessage();
  };

  var onSuccess = function (data) {
    window.startStop.activatePage(data);
    window.backend.currentAds = data;
  };

  window.backend = {
    currentPins: currentAds,
    getData: getData,
    postData: postData,
    onSuccess: onSuccess,
    onError: onError,
    createRequest: createRequest,
    RequestUrl: RequestUrl,
  };
})();
