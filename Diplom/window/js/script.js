window.addEventListener('DOMContentLoaded', function() {

    let tabBlock = require('./parts/tabBlock.js');
    let calculate = require('./parts/calculate.js');
    let modals = require('./parts/modals.js');
    let popup = require('./parts/popup.js');
    let submit = require('./parts/submit.js');
    let tabLinks = require('./parts/tabLinks.js');
    let timer = require('./parts/timer.js');

    tabBlock();
    calculate();
    modals();
    popup();
    submit();
    tabLinks();
    timer();

});