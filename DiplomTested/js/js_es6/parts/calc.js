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



		// Сalculation

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
			message.failure = "Что-то пошло не так... ";

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
