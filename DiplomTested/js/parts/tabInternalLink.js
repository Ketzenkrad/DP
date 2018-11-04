"use strict";

function tabInternalLink() {
  var tabDecor = document.getElementsByClassName('no_click'),
      a = document.getElementsByClassName('text'),
      tabContentDecor = document.getElementsByClassName('decorat'),
      tabDecorSlider = document.getElementsByClassName('decoration_slider')[0];

  function hideTabContentDec(a) {
    for (var i = a; i < tabContentDecor.length; i++) {
      tabDecor[i].classList.remove('after_click');
      tabContentDecor[i].classList.remove('show');
      tabContentDecor[i].classList.add('hide');
    }
  }

  hideTabContentDec(1);

  function showTabContentDec(b) {
    if (tabContentDecor[b].classList.contains('hide')) {
      hideTabContentDec(0);
      tabContentDecor[b].classList.remove('hide');
      tabContentDecor[b].classList.add('show');
      tabDecor[b].classList.add('after_click');
    }
  }

  tabDecorSlider.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('no_click') || target.classList.contains('text')) {
      for (var i = 0; i < tabDecor.length; i++) {
        if (target == tabDecor[i] || target == a[i]) {
          showTabContentDec(i);
          break;
        }
      }
    }
  });
}

module.exports = tabInternalLink;