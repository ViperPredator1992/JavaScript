window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // Timer
    const countTimer = (deadline) => {
        
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

            const getTimeRemaining = () => {

                const dateStop = new Date(deadline).getTime(),
                    dateNow = new Date().getTime(),
                    timeRemaining = (dateStop - dateNow) / 1000,
                    seconds = Math.floor(timeRemaining % 60),
                    minutes = Math.floor((timeRemaining / 60) % 60),
                    hours = Math.floor(timeRemaining / 60 / 60);   

                return { timeRemaining, hours, minutes, seconds };

            };

            const upDateClock = () => {
                
                const timer = getTimeRemaining();

                timerHours.textContent = timer.hours; 
                if (timer.hours < 10) {
                    timerHours.textContent = '0' + timer.hours;
                }

                timerMinutes.textContent = timer.minutes;
                if (timer.minutes < 10) {
                    timerMinutes.textContent = '0' + timer.minutes;
                }

                timerSeconds.textContent = timer.seconds;
                if (timer.seconds < 10) {
                    timerSeconds.textContent = '0' + timer.seconds;
                }
                
                
                if (timer.timeRemaining > 0) {
                    setInterval(upDateClock, 1000);
                } 
                else if (timer.timeRemaining < 0) {
                    timerHours.textContent = '00';
                    timerMinutes.textContent = '00';
                    timerSeconds.textContent = '00';
                }

            };
            upDateClock();

    };

    countTimer('15 august 2019');

    // Menu
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul > li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));

    };

    toggleMenu();

    // Popup
    const togglePopup = () => {

        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup .popup-content');

        let popupCount = 0,
            modalDownInterval;

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (screen.width > 425) {
                    modalDownInterval = requestAnimationFrame(modalDownAnimate);
                }
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        const modalDownAnimate = () => {

            modalDownInterval = requestAnimationFrame(modalDownAnimate);
            popupCount++;

            if (popupCount < 20) {
                popupContent.style.top = popupCount + '%';
            } else {
                popupCount = 0;
                cancelAnimationFrame(modalDownInterval);
            }

        };

    };

    togglePopup();

});