"use strict";

function modal() {
  // Modal 60 sec
  var deadLine60 = 60000 + Date.parse(new Date());

  function getTimeRemaining60(endtime60) {
    var t60 = endtime60 - Date.parse(new Date());
    return t60;
  }

  function setClock60(endtime60) {
    var popup = document.getElementsByClassName('popup')[0];

    function updateClock60() {
      var t60 = getTimeRemaining60(endtime60);

      if (t60 < 0 && t60 > -2000) {
        popup.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    }

    ;
    updateClock60();
    setInterval(updateClock60, 1000);
  }

  ;
  setClock60(deadLine60); // Modal popup

  var popup = document.getElementsByClassName('popup')[0];
  document.body.addEventListener('click', function (e) {
    target = e.target;

    if (target.classList.contains('phone_link')) {
      popup.classList.add('show');
      document.body.style.overflow = 'hidden';
      event.preventDefault();
    }
  });
  popup.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('popup_close') || target.classList.contains('popup') || target.tagName == 'STRONG') {
      popup.classList.remove('show');
      document.body.style.overflow = '';
    }
  }); // Modal engineer

  var headerBtn = document.getElementsByClassName('header_btn')[0],
      popupEng = document.getElementsByClassName('popup_engineer')[0];
  headerBtn.addEventListener('click', function () {
    popupEng.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
  popupEng.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('popup_close') || target.classList.contains('popup_engineer') || target.tagName == 'STRONG') {
      popupEng.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
}

module.exports = modal;