'use strict';

(function () {

  var HousingPrice = {
    BUNGALO: 0,
    FLAT: 1000,
    HOUSE: 5000,
    PALACE: 10000,
  };

  var houseTypeFormCost = window.adrInput.adForm.querySelector('#price');
  var houseTypeFormSelector = window.adrInput.adForm.querySelector('#type');
  houseTypeFormSelector.addEventListener('change', function () {
    switch (houseTypeFormSelector.value) {
      case 'bungalo':
        houseTypeFormCost.min = HousingPrice.BUNGALO;
        houseTypeFormCost.placeholder = HousingPrice.BUNGALO;
        break;
      case 'flat':
        houseTypeFormCost.min = HousingPrice.FLAT;
        houseTypeFormCost.placeholder = HousingPrice.FLAT;
        break;
      case 'house':
        houseTypeFormCost.min = HousingPrice.HOUSE;
        houseTypeFormCost.placeholder = HousingPrice.HOUSE;
        break;
      case 'palace':
        houseTypeFormCost.min = HousingPrice.PALACE;
        houseTypeFormCost.placeholder = HousingPrice.PALACE;
        break;
    }
  });

  var houseTimeArive = window.adrInput.adForm.querySelector('#timein');
  var houseTimeDepart = window.adrInput.adForm.querySelector('#timeout');

  houseTimeArive.addEventListener('change', function () {
    houseTimeDepart.value = houseTimeArive.value;
  });

  houseTimeDepart.addEventListener('change', function () {
    houseTimeArive.value = houseTimeDepart.value;
  });

  // var houseGuests = window.adrInput.adForm.querySelector('#capacity');
  // var houseRooms = window.adrInput.adForm.querySelector('#room_number');

  // houseGuests.addEventListener('change', function () {
  //   var houseGuestsOptions = Array.from(houseGuests.querySelectorAll('option'));
  //   houseGuestsOptions.forEach(function (element) {
  //     element.disabled = false;
  //     console.log(element);
  //   });

  //   switch (houseGuests.value) {
  //     case '0':
  //       houseGuestsOptions.disabled = true;
  //       console.log(houseGuestsOptions);
  //       break;
  //     // case '1':
  //     //   houseTypeFormCost.min = HousingPrice.FLAT;
  //     //   houseTypeFormCost.placeholder = HousingPrice.FLAT;
  //     //   break;
  //     // case '2':
  //     //   houseTypeFormCost.min = HousingPrice.HOUSE;
  //     //   houseTypeFormCost.placeholder = HousingPrice.HOUSE;
  //     //   break;
  //     // case '3':
  //     //   houseTypeFormCost.min = HousingPrice.PALACE;
  //     //   houseTypeFormCost.placeholder = HousingPrice.PALACE;
  //     //   break;
  //   }
  // });

  window.validation = {
  };
})();
