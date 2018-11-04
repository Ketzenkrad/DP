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