'use strict';

(function () {

  var errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  var successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

  var renderErrorMessage = function () {
    var errorMessage = errorMessageTemplate.cloneNode(true);
    var errorButton = errorMessage.querySelector('.error__button');
    var errorText = errorMessage.querySelector('p');

    var onErrorButtonClick = function () {
      window.util.mainTagRange.removeChild(errorMessage);
      errorButton.removeEventListener('click', onErrorButtonClick);
    };

    var onEscButtonClick = function (evt) {
      if (evt.keyCode === window.util.escKeycode) {
        window.util.mainTagRange.removeChild(errorMessage);
        window.removeEventListener('keydown', onEscButtonClick);
      }
    };

    var onPopupErrorClick = function (evt) {
      if (evt.target.nodeName !== errorText.nodeName) {
        window.util.mainTagRange.removeChild(errorMessage);
        errorMessage.removeEventListener('mousedown', onPopupErrorClick);
      }
    };

    errorButton.addEventListener('click', onErrorButtonClick);
    window.addEventListener('keydown', onEscButtonClick);
    errorMessage.addEventListener('mousedown', onPopupErrorClick);

    window.util.mainTagRange.appendChild(errorMessage);
  };

  var renderSuccessMessage = function () {
    var successMessage = successMessageTemplate.cloneNode(true);
    var successText = successMessage.querySelector('p');

    var closeSuccessMessage = function (evt) {
      if (evt.keyCode === window.util.escKeycode) {
        window.util.mainTagRange.removeChild(successMessage);
        window.removeEventListener('keydown', closeSuccessMessage);
      }
    };

    var onPopupSuccessClick = function (evt) {
      if (evt.target.nodeName !== successText.nodeName) {
        window.util.mainTagRange.removeChild(successMessage);
        successMessage.removeEventListener('mousedown', onPopupSuccessClick);
      }
    };

    window.addEventListener('keydown', closeSuccessMessage);
    window.addEventListener('click', closeSuccessMessage);
    successMessage.addEventListener('mousedown', onPopupSuccessClick);

    window.util.mainTagRange.appendChild(successMessage);
  };

  window.modalBlocks = {
    renderErrorMessage: renderErrorMessage,
    renderSuccessMessage: renderSuccessMessage,
  };
})();
