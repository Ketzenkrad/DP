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