'use strict';

(function () {

  var errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  var successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

  var renderErrorMessage = function () {
    var errorMessage = errorMessageTemplate.cloneNode(true);
    var errorButton = errorMessage.querySelector('.error__button');

    var onErrorButtonClick = function () {
      window.util.mainTagRange.removeChild(errorMessage);
      errorButton.removeEventListener('click', onErrorButtonClick);
    };

    errorButton.addEventListener('click', onErrorButtonClick);

    window.util.mainTagRange.appendChild(errorMessage);
  };

  var renderSuccessMessage = function () {
    var successMessage = successMessageTemplate.cloneNode(true);

    var closeSuccessMessage = function (evt) {
      if (evt.keyCode === window.util.escKeycode) {
        window.util.mainTagRange.removeChild(successMessage);
        document.removeEventListener('keydown', closeSuccessMessage);
      }
    };

    document.addEventListener('keydown', closeSuccessMessage);

    window.util.mainTagRange.appendChild(successMessage);
  };

  window.modalBlocks = {
    renderErrorMessage: renderErrorMessage,
    renderSuccessMessage: renderSuccessMessage,
  };
})();




