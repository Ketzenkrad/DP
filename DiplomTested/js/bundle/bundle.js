(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

			let tabGlazingBlock = require('../parts/tabGlazingBlock.js');
			let calc = require('../parts/calc.js');
			let modal = require('../parts/modal.js');
			let popupImg = require('../parts/popupImg.js');
			let submitForm = require('../parts/submitForm.js');
			let tabInternalLink = require('../parts/tabInternalLink.js');
			let timer = require('../parts/timer.js');

			tabGlazingBlock();
			calc();
			modal();
			popupImg();
			submitForm();
			tabInternalLink();
			timer();


}); 
},{"../parts/calc.js":23,"../parts/modal.js":24,"../parts/popupImg.js":25,"../parts/submitForm.js":26,"../parts/tabGlazingBlock.js":27,"../parts/tabInternalLink.js":28,"../parts/timer.js":29}],2:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":13}],3:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],4:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],5:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":7}],6:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":9,"./_is-object":13}],7:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],8:[function(require,module,exports){
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":4,"./_fails":7,"./_hide":11,"./_redefine":17,"./_wks":21}],9:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],10:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],11:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":5,"./_object-dp":15,"./_property-desc":16}],12:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":5,"./_dom-create":6,"./_fails":7}],13:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],14:[function(require,module,exports){
module.exports = false;

},{}],15:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":2,"./_descriptors":5,"./_ie8-dom-define":12,"./_to-primitive":19}],16:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],17:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":3,"./_global":9,"./_has":10,"./_hide":11,"./_uid":20}],18:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":3,"./_global":9,"./_library":14}],19:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":13}],20:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],21:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":9,"./_shared":18,"./_uid":20}],22:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":8}],23:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.regexp.replace");

function calc() {
  // start popup_calc 
  var popupCalc = document.getElementsByClassName('popup_calc')[0],
      glazing = document.getElementsByClassName('glazing')[0];
  glazing.addEventListener('click', function (e) {
    var target = event.target;

    if (target.classList.contains('glazing_price_btn')) {
      popupCalc.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }); // start popup_calc_profile 

  var calcBtn = document.getElementsByClassName('popup_calc_button')[0],
      calcProfile = document.getElementsByClassName('popup_calc_profile')[0];
  calcBtn.addEventListener('click', function () {
    popupCalc.classList.remove('show');
    calcProfile.classList.add('show');
  }); // start popup_calc__end

  var profileBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
      calcEnd = document.getElementsByClassName('popup_calc_end')[0];
  profileBtn.addEventListener('click', function () {
    calcProfile.classList.remove('show');
    calcEnd.classList.add('show');
  }); // close popup_calc

  document.body.addEventListener('click', function (e) {
    var target = event.target;

    if (target.classList.contains('popup_calc_close') || target.tagName == 'STRONG' || target.classList.contains('popup_calc_profile_close') || target.classList.contains('popup_calc_end_close')) {
      popupCalc.classList.remove('show');
      showTabBalconIcon(0);
      calcProfile.classList.remove('show');
      calcEnd.classList.remove('show');
      document.body.style.overflow = '';
      obj = {
        widthValue: 0,
        heightValue: 0,
        typeWin: 'tree',
        profile: '',
        name: '',
        phone: 0
      };
      widthCalc.value = '';
      heightCalc.value = '';
      checkboxCold.checked = false;
      checkboxWarm.checked = false;
      inputName.value = '';
      inputPhone.value = '';
      statusMessage.innerHTML = '';
    }
  }); // tab popup_calc

  var balconIcons = document.getElementsByClassName('balcon_icons')[0],
      balconIcon = document.getElementsByClassName('balcon_icon');

  function hideTabBalconIcon(a) {
    for (var i = a; i < balconIcon.length; i++) {
      balconIcon[i].classList.remove('show');
      balconIcon[i].classList.add('hide');
    }
  }

  hideTabBalconIcon(1);

  function showTabBalconIcon(b) {
    if (balconIcon[b].classList.contains('hide')) {
      hideTabBalconIcon(0);
      balconIcon[b].classList.remove('hide');
      balconIcon[b].classList.add('show');
    }
  }

  balconIcons.addEventListener('click', function (event) {
     event.preventDefault();
    var target = event.target,
        type1Img=document.querySelector('.type1_img'),
        type2Img=document.querySelector('.type2_img'),
        type3Img=document.querySelector('.type3_img'),
        type4Img=document.querySelector('.type4_img');

    if (target.classList.contains('type2_img')) {
      target.style.display = 'inline-block';
      target.style.width = '35%'

      type1Img.style.display = 'inline-block';
      type1Img.style.width = '15%'
      type3Img.style.display = 'inline-block';
      type3Img.style.width = '15%'
      type4Img.style.display = 'inline-block';
      type4Img.style.width = '15%'
      showTabBalconIcon(1);
    }

    if (target.classList.contains('type1_img')) {
      target.style.display = 'inline-block';
      target.style.width = '35%'

      type2Img.style.display = 'inline-block';
      type2Img.style.width = '15%'
      type3Img.style.display = 'inline-block';
      type3Img.style.width = '15%'
      type4Img.style.display = 'inline-block';
      type4Img.style.width = '15%'
      showTabBalconIcon(0);
    }

    if (target.classList.contains('type3_img')) {
      target.style.display = 'inline-block';
      target.style.width = '35%'

      type1Img.style.display = 'inline-block';
      type1Img.style.width = '15%'
      type2Img.style.display = 'inline-block';
      type2Img.style.width = '15%'
      type4Img.style.display = 'inline-block';
      type4Img.style.width = '15%'
      showTabBalconIcon(2);
    }

    if (target.classList.contains('type4_img')) {
      target.style.display = 'inline-block';
      target.style.width = '35%'

      type1Img.style.display = 'inline-block';
      type1Img.style.width = '15%'
      type3Img.style.display = 'inline-block';
      type3Img.style.width = '15%'
      type2Img.style.display = 'inline-block';
      type2Img.style.width = '15%'
      showTabBalconIcon(3);
    }
  }); // Сalculation

  var widthCalc = document.getElementById('width'),
      heightCalc = document.getElementById('height'),
      choiceType = document.getElementById('view_type'),
      checkboxCold = document.getElementsByClassName('checkbox')[0],
      checkboxWarm = document.getElementsByClassName('checkbox')[1],
      formCalc = document.getElementsByClassName('form')[8],
      inputName = formCalc.getElementsByClassName('form_input')[0],
      inputPhone = formCalc.getElementsByClassName('form_input')[1],
      obj = {
    widthValue: 0,
    heightValue: 0,
    typeWin: 'tree',
    profile: '',
    name: '',
    phone: 0
  };

  widthCalc.oninput = function (e) {
    return e.target.value = e.target.value.replace(/\D/g, '');
  };

  heightCalc.oninput = function (e) {
    return e.target.value = e.target.value.replace(/\D/g, '');
  };

  inputPhone.oninput = function (e) {
    return e.target.value = e.target.value.replace(/\D/g, '');
  };

  widthCalc.addEventListener('change', function () {
    obj.widthValue = this.value;
  });
  heightCalc.addEventListener('change', function () {
    obj.heightValue = this.value;
  });
  choiceType.addEventListener('change', function () {
    obj.typeWin = this.options[this.selectedIndex].value;
  });
  checkboxCold.addEventListener('change', function () {
    if (checkboxCold.checked) {
      checkboxWarm.checked = false;
      obj.profile = 'cold';
    }
  });
  checkboxWarm.addEventListener('change', function () {
    if (checkboxWarm.checked) {
      checkboxCold.checked = false;
      obj.profile = 'warm';
    }
  });
  var message = new Object();
  message.loading = "Загрузка... ";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Что-то пошло не так... ";
  var statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  formCalc.addEventListener('submit', function (event) {
    event.preventDefault();
    formCalc.appendChild(statusMessage);
    obj.name = inputName.value;
    obj.phone = inputPhone.value; // AJAX

    var request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formData = JSON.stringify(obj);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    };
  });
}

module.exports = calc;
},{"core-js/modules/es6.regexp.replace":22}],24:[function(require,module,exports){
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
    var target = e.target;

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
},{}],25:[function(require,module,exports){
"use strict";

function popupImg() {
  var works = document.getElementsByClassName('works')[0],
      imag = document.getElementsByClassName('imag');
  works.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('imag')) {
      for (var i = 0; i < imag.length; i++) {
        if (target == imag[i]) {
          event.preventDefault();
          var myDiv = document.createElement('div');
          myDiv.classList.add('popup_img');
          document.body.appendChild(myDiv);
          var pic = document.createElement("IMG");
          pic.classList.add('img_big');
          pic.src = "img/our_works/big_img/".concat(i + 1, ".png");
          myDiv.appendChild(pic);
          document.body.style.overflow = 'hidden';
        }
      }
    }
  });
  document.body.addEventListener('click', function (e) {
    var target = event.target;

    if (target.classList.contains('popup_img')) {
      var myDiv = document.getElementsByClassName('popup_img')[0],
          pic = document.getElementsByClassName('img_big')[0];
      myDiv.classList.remove('popup_img');
      pic.classList.remove('img_big');
      pic.src = '';
      document.body.style.overflow = '';
    }
  });
}

module.exports = popupImg;
},{}],26:[function(require,module,exports){
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
},{"core-js/modules/es6.regexp.replace":22}],27:[function(require,module,exports){
"use strict";

function tabGlazingBlock() {
  var tabGlazing = document.getElementsByClassName('tab'),
      tabContent = document.getElementsByClassName('tabcontent'),
      tabGlazingContent = document.getElementsByClassName('glazing_slider')[0];

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabGlazing[i].classList.remove('active');
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
      tabGlazing[b].classList.add('active');
    }
  }

  tabGlazingContent.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('tab')) {
      for (var i = 0; i < tabGlazing.length; i++) {
        if (target == tabGlazing[i]) {
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabGlazingBlock;
},{}],28:[function(require,module,exports){
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
},{}],29:[function(require,module,exports){
"use strict";

function timer() {
  var deadLine = '2018-09-13';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementsByClassName(id)[0],
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      if (String(t.days).length < 2) {
        days.innerHTML = '0' + t.days;
      } else {
        days.innerHTML = t.days;
      }

      if (String(t.hours).length < 2) {
        hours.innerHTML = '0' + t.hours;
      } else {
        hours.innerHTML = t.hours;
      }

      if (String(t.minutes).length < 2) {
        minutes.innerHTML = '0' + t.minutes;
      } else {
        minutes.innerHTML = t.minutes;
      }

      if (String(t.seconds).length < 2) {
        seconds.innerHTML = '0' + t.seconds;
      } else {
        seconds.innerHTML = t.seconds;
      }

      if (t.total < 0) {
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
      }
    }

    ;
    updateClock();
    setInterval(updateClock, 1000);
  }

  ;
  setClock('eTimer', deadLine);
}

module.exports = timer;
},{}]},{},[1]);
