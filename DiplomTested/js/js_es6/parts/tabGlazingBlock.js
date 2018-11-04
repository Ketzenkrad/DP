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