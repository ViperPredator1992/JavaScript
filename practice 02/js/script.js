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
                
                
                if (timer.timeRemaining <= 0) {
                    clearInterval(upDateClockInterval);
                } 

                if (timer.timeRemaining < 0) {
                    timerHours.textContent = '00';
                    timerMinutes.textContent = '00';
                    timerSeconds.textContent = '00';
                }

            };

            let upDateClockInterval = setInterval(upDateClock, 1000);
            
            upDateClock();

    };

    countTimer('14 august 2019');

    const toggleMenu = () => {

        const menu = document.querySelector('menu'),
            body = document.querySelector('body');

        body.addEventListener('click', (event) => {

            let target = event.target;
                
            if (target.closest('.menu')) {
                menu.classList.add('active-menu');
            } else if (target.classList.contains('close-btn')) {
                menu.classList.remove('active-menu');
            } else if (target.tagName !== 'MENU') {
                menu.classList.remove('active-menu');
            } else {
                return;
            }

        });

    };

    toggleMenu();

    // Popup
    const togglePopup = () => {

        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
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

        popup.addEventListener('click', (event) => {

            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');

                if (!target) {
                    popup.style.display = 'none';
                }
            }

        });

    };

    togglePopup();

    // Tabs
    const tabs = () => {

        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {

            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }

        };

        tabHeader.addEventListener('click', (event) => {

            let target = event.target;
                target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }

        });

    };

    tabs();

    // Slider
    const slider = () => {

        const slide = document.querySelectorAll('.portfolio-item'),
            dotsParent = document.querySelectorAll('.portfolio-dots'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval;

        for (let i = 0; i < slide.length; i++) {

            const dots = document.createElement('li');
            dots.className = 'dot';
            dotsParent[0].appendChild(dots);

        }

        const dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, nameClass) => {
            elem[index].classList.remove(nameClass);
        };

        const nextSlide = (elem, index, nameClass) => {
            elem[index].classList.add(nameClass);
        };

        const autoPlaySlide = () => {
            
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {

            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {

            if (event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')) {
                stopSlide();
            }

        });

        slider.addEventListener('mouseout', (event) => {

            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }

        });

        startSlide(1500);

    };

    slider();

});