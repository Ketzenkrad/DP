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