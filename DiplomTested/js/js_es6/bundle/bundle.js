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
},{"../parts/calc.js":2,"../parts/modal.js":3,"../parts/popupImg.js":4,"../parts/submitForm.js":5,"../parts/tabGlazingBlock.js":6,"../parts/tabInternalLink.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function calc() {

		// start popup_calc 

		let popupCalc = document.getElementsByClassName('popup_calc')[0],
						glazing = document.getElementsByClassName('glazing')[0];

		glazing.addEventListener('click', function(e) {

			let target = event.target;
			if (target.classList.contains('glazing_price_btn')) {
				popupCalc.classList.add('show');
				document.body.style.overflow = 'hidden';


			}
		});



		// start popup_calc_profile 

		let calcBtn = document.getElementsByClassName('popup_calc_button')[0],
						calcProfile = document.getElementsByClassName('popup_calc_profile')[0];

		calcBtn.addEventListener('click', function() {

			popupCalc.classList.remove('show');
			calcProfile.classList.add('show');
		});



		// start popup_calc__end

		let profileBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
						calcEnd = document.getElementsByClassName('popup_calc_end')[0];


		profileBtn.addEventListener('click', function() {

			calcProfile.classList.remove('show');
			calcEnd.classList.add('show');
		});



	// close popup_calc

	document.body.addEventListener('click', function(e) {

		let target = event.target;
		if (target.classList.contains('popup_calc_close') || target.tagName == 'STRONG' || target.classList.contains('popup_calc_profile_close') || target.classList.contains('popup_calc_end_close')) {
			popupCalc.classList.remove('show');
			showTabBalconIcon(0);
			calcProfile.classList.remove('show');
			calcEnd.classList.remove('show');
			document.body.style.overflow = '';
			obj = {widthValue : 0,heightValue : 0,typeWin : 'tree',profile : '',name : '',phone : 0};
			widthCalc.value = '';
			heightCalc.value = '';
			checkboxCold.checked = false;
			checkboxWarm.checked = false;
			inputName.value = '';
			inputPhone.value = '';
			statusMessage.innerHTML = '';
		}

	});

	// tab popup_calc


	let balconIcons= document.getElementsByClassName('balcon_icons')[0],
					balconIcon = document.getElementsByClassName('balcon_icon');
					


		function hideTabBalconIcon(a) {
		  for (let i = a; i < balconIcon.length; i++) {
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


		balconIcons.addEventListener('click', function(event) {
			event.preventDefault();
		        let target = event.target,
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


		});



		// ╨бalculation

		let widthCalc = document.getElementById('width'),
						heightCalc = document.getElementById('height'),
						choiceType = document.getElementById('view_type'),
						checkboxCold = document.getElementsByClassName('checkbox')[0],
						checkboxWarm = document.getElementsByClassName('checkbox')[1],
						formCalc = document.getElementsByClassName('form')[8],
						inputName = formCalc.getElementsByClassName('form_input')[0],
						inputPhone = formCalc.getElementsByClassName('form_input')[1],
						obj = {
							widthValue : 0,
							heightValue : 0,
							typeWin : 'tree',
							profile : '',
							name : '',
							phone : 0
						};


			widthCalc.oninput = e => e.target.value = e.target.value.replace(/\D/g, '');
			heightCalc.oninput = e => e.target.value = e.target.value.replace(/\D/g, '');
			inputPhone.oninput = e => e.target.value = e.target.value.replace(/\D/g, '');			


			widthCalc.addEventListener('change', function() {
				obj.widthValue = this.value;
			});

			heightCalc.addEventListener('change', function() {
				obj.heightValue = this.value;
			});

			choiceType.addEventListener('change', function() {
				obj.typeWin = this.options[this.selectedIndex].value;
			});

			checkboxCold.addEventListener('change', () => {
				if (checkboxCold.checked) {
					checkboxWarm.checked = false;
					obj.profile = 'cold';
				}
			}); 

			checkboxWarm.addEventListener('change', () => {
				if (checkboxWarm.checked) {
					checkboxCold.checked = false;
					obj.profile = 'warm';
				}
			});


			let message = new Object();
			message.loading = "Загрузка... ";
			message.success = "Спасибо! Скоро мы с вами свяжемся";
			message.failure = "╨Что-то пошло не так... ";

			let statusMessage = document.createElement('div');
							statusMessage.classList.add('status');

			formCalc.addEventListener('submit', function(event) {
				event.preventDefault();
				formCalc.appendChild(statusMessage);
				obj.name = inputName.value;
				obj.phone = inputPhone.value;

				// AJAX

				let request = new XMLHttpRequest();
				request.open("POST", 'server.php');


				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

				let formData = JSON.stringify(obj);

				request.send(formData);

					request.onreadystatechange = function() {
						if (request.readyState < 4) {
							statusMessage.innerHTML = message.loading;
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								statusMessage.innerHTML = message.success;
							}
							else {
								statusMessage.innerHTML = message.failure;
							}
						}
					}
			});

}

module.exports = calc;
},{}],3:[function(require,module,exports){
function modal() {

	// Modal 60 sec


	let deadLine60 = 60000 + Date.parse(new Date());

	function getTimeRemaining60(endtime60) {
		let t60 = endtime60 - Date.parse(new Date());
						return t60;
	}

	function setClock60(endtime60) {
		let popup = document.getElementsByClassName('popup')[0];
						function updateClock60() {
							  let t60 = getTimeRemaining60(endtime60);
							  if (t60 < 0 && t60 > -2000) {
							  		popup.classList.add('show');
							  		document.body.style.overflow = 'hidden';
							  }
	
						};
						updateClock60();
						setInterval(updateClock60, 1000);
	};

	setClock60(deadLine60);

	// Modal popup

	let popup = document.getElementsByClassName('popup')[0];

	document.body.addEventListener('click', function(e) {

		target = e.target;
		if (target.classList.contains('phone_link')) {
			popup.classList.add('show');
			document.body.style.overflow = 'hidden';
			event.preventDefault();
		}
	});


	popup.addEventListener('click', function(e) {
		let target = e.target;
		if (target.classList.contains('popup_close') || target.classList.contains('popup') || target.tagName == 'STRONG') {
		  popup.classList.remove('show');
		  document.body.style.overflow = '';
		  }	
	});


	// Modal engineer

	let headerBtn = document.getElementsByClassName('header_btn')[0],
					popupEng = document.getElementsByClassName('popup_engineer')[0];

	headerBtn.addEventListener('click', function() {
			popupEng.classList.add('show');
			document.body.style.overflow = 'hidden';

	});

	popupEng.addEventListener('click', function(e) {
		let target = e.target;
		if (target.classList.contains('popup_close') || target.classList.contains('popup_engineer') || target.tagName == 'STRONG') {
		  popupEng.classList.remove('show');
		  document.body.style.overflow = '';
		  }	
	});

}

module.exports = modal;
},{}],4:[function(require,module,exports){
function popupImg() {
	let works = document.getElementsByClassName('works')[0],
	imag = document.getElementsByClassName('imag');


	works.addEventListener('click', function(event) {

		let target = event.target;
		if (target.classList.contains('imag')) {
		  for (let i = 0; i < imag.length; i++) {
		    if (target == imag[i]) {
		    	event.preventDefault();
							let myDiv = document.createElement('div');
							myDiv.classList.add('popup_img');
							document.body.appendChild(myDiv);
							let pic = document.createElement("IMG");
							pic.classList.add('img_big');
							pic.src = `img/our_works/big_img/${i+1}.png`;
							myDiv.appendChild(pic);
							document.body.style.overflow = 'hidden';
		      
		    }
		  }
		}
			
	});

	

		document.body.addEventListener('click', function(e) {

			let target = event.target;
			if (target.classList.contains('popup_img')) {

				let myDiv = document.getElementsByClassName('popup_img')[0],
								pic = document.getElementsByClassName('img_big')[0];

				myDiv.classList.remove('popup_img');
				pic.classList.remove('img_big');
				pic.src = '';
				document.body.style.overflow = ''

			}

	});
}

module.exports = popupImg;
},{}],5:[function(require,module,exports){
function submitForm() {

	let message1 = new Object();
	message1.loading = "Загрузка... ";
	message1.success = "Спасибо! Скоро мы с вами свяжемся";
	message1.failure = "Что-то пошло не так... ";

	let form = document.getElementsByClassName('form'),
					input = document.getElementsByTagName('input'),
					statusMessage1 = document.createElement('div');
					statusMessage1.classList.add('status');

					for (let i = 1; i < 16; i=i+2) {
						input[i].oninput = e => e.target.value = e.target.value.replace(/\D/g, '');
					}

					document.body.addEventListener('submit', function(event){

									let target = event.target;
									if (target.classList.contains('form')) {
									  for (let i = 0; i < 8; i++) {
									    if (target == form[i]) {
									    	event.preventDefault();

									    		form[i].appendChild(statusMessage1);

									    		// AJAX

									    		let request = new XMLHttpRequest();
									    		request.open("POST", 'server.php');

									    		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

									    		let formData = new FormData(form);

									    		request.send(formData);

									    		request.onreadystatechange = function() {
									    		if (request.readyState < 4) {
									    			statusMessage1.innerHTML = message1.loading;
									    		} else if (request.readyState === 4) {
									    			if (request.status == 200 && request.status < 300) {
									    				statusMessage1.innerHTML = message1.success;
									    			}
									    			else {
									    				statusMessage1.innerHTML = message1.failure;
									    			}
									    		}
									    	}

									      
									    }
									  }

									 }
									


					});

}

module.exports = submitForm;
},{}],6:[function(require,module,exports){
function	tabGlazingBlock() {

	let tabGlazing 							= document.getElementsByClassName('tab'),
					tabContent = document.getElementsByClassName('tabcontent'),
					tabGlazingContent = document.getElementsByClassName('glazing_slider')[0];


	function hideTabContent(a) {
	  for (let i = a; i < tabContent.length; i++) {


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


	tabGlazingContent.addEventListener('click', function(event) {

		let target = event.target;
		if (target.classList.contains('tab')) {
		  for (let i = 0; i < tabGlazing.length; i++) {
		    if (target == tabGlazing[i]) {
		      showTabContent(i);
		      break;
		    }
		  }
		}


	});

}

module.exports = tabGlazingBlock;
},{}],7:[function(require,module,exports){
function tabInternalLink() {

	let tabDecor = document.getElementsByClassName('no_click'),
					a = document.getElementsByClassName('text'),
					tabContentDecor = document.getElementsByClassName('decorat'),
					tabDecorSlider = document.getElementsByClassName('decoration_slider')[0];


		function hideTabContentDec(a) {
		  for (let i = a; i < tabContentDecor.length; i++) {
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


		tabDecorSlider.addEventListener('click', function(event) {

			let target = event.target;
			if (target.classList.contains('no_click') || target.classList.contains('text')) {
			  for (let i = 0; i < tabDecor.length; i++) {
			    if (target == tabDecor[i] || target == a[i]) {
			      showTabContentDec(i);
			      break;
			    }
			  }
			}


		});
}

module.exports = tabInternalLink;

},{}],8:[function(require,module,exports){
function timer() {
	let deadLine = '2018-12-13';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),

						seconds = Math.floor( (t/1000) % 60 ),
						minutes = Math.floor( (t/1000/60) % 60 ),
						hours = Math.floor( (t/(1000*60*60)) % 24 ),
						days = Math.floor( (t/(1000*60*60*24)) );


						return {
							'total': t,
							'days': days,
							'hours': hours,
							'minutes': minutes,
							'seconds': seconds
						};
	}

	function setClock(id, endtime) {

		let timer = document.getElementsByClassName(id)[0],
						days = timer.querySelector('.days'),
						hours = timer.querySelector('.hours'),
						minutes = timer.querySelector('.minutes'),
						seconds = timer.querySelector('.seconds');

						function updateClock() {
							  let t = getTimeRemaining(endtime);
							  if ( String(t.days).length < 2) {
							  	days.innerHTML = '0' + t.days;
							  } else {
							  	days.innerHTML = t.days;
							  }

							  if ( String(t.hours).length < 2) {
							  	hours.innerHTML = '0' + t.hours;
							  } else {
							  	hours.innerHTML = t.hours;
							  }

							  if ( String(t.minutes).length < 2) {
							  	minutes.innerHTML = '0' + t.minutes;
							  } else {
							  	minutes.innerHTML = t.minutes;
							  }
							  if ( String(t.seconds).length < 2) {
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
	
						};
						updateClock();
						setInterval(updateClock, 1000);
	};

	setClock('eTimer', deadLine);
}

module.exports = timer;
},{}]},{},[1]);
