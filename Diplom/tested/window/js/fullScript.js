"use strict";
window.addEventListener('DOMContentLoaded', function() {
    // // Модальные окна
    // // Хедер, функционал;
    // // вызов инженера;

    // function checkUp() {};

    function engineerCall() {
        let callButton = document.getElementsByClassName('header_btn')[0],
            engineerCall = document.getElementsByClassName('popup_engineer')[0];

        callButton.addEventListener('click', function() {
            engineerCall.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

        engineerCall.addEventListener('click', function(event) {
            let target = event.target;
            if (target.classList.contains('popup_close') || target.classList.contains('popup_engineer') || target.tagName == 'STRONG') {
                engineerCall.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    };

    engineerCall();

    // //Телефон;
    function phones() {
        let phone = document.getElementsByClassName('popup')[0];

        document.body.addEventListener('click', function(event) {

            let target = event.target;
            if (target.classList.contains('phone_link')) {
                phone.classList.add('show');
                document.body.style.overflow = 'hidden';
                event.preventDefault();
            }
        });

        phone.addEventListener('click', function(event) {
            let target = event.target;
            if (target.classList.contains('popup_close') || target.classList.contains('popup') || target.tagName == 'STRONG') {
                phone.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    };

    phones();

    // //Баннер
    let minute = 60000 + Date.parse(new Date());

    function getTimeRemaining(endtime) {
        let time = endtime - Date.parse(new Date());
        return time;
    }

    function setClock(endtime) {
        let popup = document.getElementsByClassName('popup')[0];

        function updateClock() {
            let time = getTimeRemaining(endtime);
            if (time < 0 && time > -2000) {
                popup.classList.add('show');
                document.body.style.overflow = 'hidden';
            }

        };
        updateClock();
        setInterval(updateClock, 1000);
    };

    setClock(minute);

    // //Формы, ajax
    function form() {

        let message = new Object();
        message.loading = "Загрузка... ";
        message.success = "Спасибо! Скоро мы с вами свяжемся!";
        message.failure = "Ошибка при отправке. ";

        // let message = {
        //     loading = "Загрузка... ",
        //     success = "Спасибо! Скоро мы с вами свяжемся!",
        //     failure = "Ошибка при отправке. "
        // }

        let form = document.getElementsByClassName('form'),
            input = document.getElementsByTagName('input'),
            statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

        for (let i = 1; i < 16; i = i + 2) {
            input[i].oninput = event => event.target.value = event.target.value.replace(/\D/g, '');
        }

        document.body.addEventListener('submit', function(event) {

            let target = event.target;
            if (target.classList.contains('form')) {
                for (let i = 0; i < 8; i++) {
                    if (target == form[i]) {
                        event.preventDefault();

                        form[i].appendChild(statusMessage);


                        let request = new XMLHttpRequest();
                        request.open("POST", 'server.php');

                        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                        let formData = new FormData();

                        request.send(formData);

                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                statusMessage.innerHTML = message.loading;
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 300) {
                                    statusMessage.innerHTML = message.success;
                                } else {
                                    statusMessage.innerHTML = message.failure;
                                }
                            }
                        }
                    }
                }
            }
        });

    }

    form();

    //Табы;

    function tabGlazing() {
        let tabGlazing = document.getElementsByClassName('tab'),
            tabContent = document.getElementsByClassName('tabcontent'),
            tabGlazingContent = document.getElementsByClassName('glazing_slider')[0];

        function hideTabContent(hide) {
            for (let i = hide; i < tabContent.length; i++) {
                tabGlazing[i].classList.remove('active');
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        };

        hideTabContent(1);

        function showTabContent(show) {
            if (tabContent[show].classList.contains('hide')) {
                hideTabContent(0);
                tabContent[show].classList.remove('hide');
                tabContent[show].classList.add('show');
                tabGlazing[show].classList.add('active');
            }
        };

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
    };

    tabGlazing();

    //Табы iternal
    function tabInternal() {

        let tabDecor = document.getElementsByClassName('no_click'),
            a = document.getElementsByClassName('text'),
            tabContentDecor = document.getElementsByClassName('decorat'),
            tabDecorSlider = document.getElementsByClassName('decoration_slider')[0];

        function hideTabContent(a) {
            for (let i = a; i < tabContentDecor.length; i++) {
                tabDecor[i].classList.remove('after_click');
                tabContentDecor[i].classList.remove('show');
                tabContentDecor[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContentDecor[b].classList.contains('hide')) {
                hideTabContent(0);
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
                        showTabContent(i);
                        break;
                    }
                }
            }


        });
    }
    tabInternal();


    //Таймер до конца акции
    function timer() {
        let deadLine = '2018-12-04';

        function getTimeRemaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()),

                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                days = Math.floor((t / (1000 * 60 * 60 * 24)));


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

            };
            updateClock();
            setInterval(updateClock, 1000);
        };

        setClock('eTimer', deadLine);
    }

    timer();

    //Наши работы;

});