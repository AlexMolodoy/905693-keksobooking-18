'use strict';

(function () {

  var RequestUrl = {
    GET: 'https://js.dump.academy/keksobooking/data',
    POST: 'https://js.dump.academy/keksobooking',
  };
  var Status = {
    OK: 200
  };
  var REQUEST_TIMEOUT = 10000;

  var createRequest = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === Status.OK) {
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

    xhr.timeout = REQUEST_TIMEOUT;

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
    window.startStop.activatePage();
    window.modalBlocks.renderErrorMessage();
  };

  var onSuccess = function (data) {
    window.startStop.activatePage(data);
    window.backend.currentAds = data;
    window.filter.update();
    window.filter.activate();
  };

  window.backend = {
    currentPins: [],
    getData: getData,
    postData: postData,
    onSuccess: onSuccess,
    onError: onError,
    createRequest: createRequest,
    RequestUrl: RequestUrl,
  };
})();
