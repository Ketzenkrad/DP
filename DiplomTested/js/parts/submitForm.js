"use strict";

require("core-js/modules/es6.regexp.replace");

function submitForm() {
  var message1 = new Object();
  message1.loading = "Загрузка... ";
  message1.success = "Спасибо! Скоро мы с вами свяжемся";
  message1.failure = "Что-то пошло не так... ";
  var form = document.getElementsByClassName('form'),
      input = document.getElementsByTagName('input'),
      statusMessage1 = document.createElement('div');
  statusMessage1.classList.add('status');

  for (var i = 1; i < 16; i = i + 2) {
    input[i].oninput = function (e) {
      return e.target.value = e.target.value.replace(/\D/g, '');
    };
  }

  document.body.addEventListener('submit', function (event) {
    var target = event.target;

    if (target.classList.contains('form')) {
      for (var _i = 0; _i < 8; _i++) {
        if (target == form[_i]) {
          (function () {
            event.preventDefault();

            form[_i].appendChild(statusMessage1); // AJAX


            var request = new XMLHttpRequest();
            request.open("POST", 'server.php');
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var formData = new FormData(form);
            request.send(formData);

            request.onreadystatechange = function () {
              if (request.readyState < 4) {
                statusMessage1.innerHTML = message1.loading;
              } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                  statusMessage1.innerHTML = message1.success;
                } else {
                  statusMessage1.innerHTML = message1.failure;
                }
              }
            };
          })();
        }
      }
    }
  });
}

module.exports = submitForm;