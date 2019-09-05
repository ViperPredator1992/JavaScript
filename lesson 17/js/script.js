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

    countTimer('30 september 2019');

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
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval;

        for (let i = 0; i < slide.length; i++) {

            const dotsParent = document.querySelectorAll('.portfolio-dots'),
                dots = document.createElement('li');

            if (i === 0) {
                dots.setAttribute('class', 'dot dot-active');
                dotsParent[0].appendChild(dots);
            } else {
                dots.setAttribute('class', 'dot');
                dotsParent[0].appendChild(dots);
            }

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

    // Team
    const teamImage = () => {

        const image = document.querySelectorAll('.command__photo');
        let teamFoto;

        image.forEach((elem, index) => {

            image[index].addEventListener('mouseenter', (event) => {
                teamFoto = event.target.getAttribute('src');
                event.target.src = event.target.dataset.img;
            });

            image[index].addEventListener('mouseleave', (event) => {
                event.target.src = teamFoto;
            });

        });


    };

    teamImage();

    // Calc
    const calc = (price = 100) => {

        const inputsCalc = document.querySelectorAll('.calc-block > input');

        inputsCalc.forEach((elem) => {
            elem.addEventListener('keyup', (event) => {
                let target = event.target;
                target.value = target.value.replace(/[^\d,]/g, '');
            });
        });

        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {

            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = total;

        };

        calcBlock.addEventListener('change', (event) => {

            const target = event.target;

            if (target.matches('select') || target.matches('input')) {
                countSum();
            }

        });

    };

    calc(100);

    // send-ajax-form
    const sendForm = () => {

        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const form = document.getElementById('form1'),
            form2 = document.getElementById('form2'),
            form3 = document.getElementById('form3');

        const formName = document.querySelector('#form2-name');    
        formName.innerHTML = formName.innerHTML.replace(/(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/);

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

        const form1Name = document.getElementById('form1-name'),
            form2Name = document.getElementById('form2-name'),
            form2Message = document.getElementById('form2-message'),
            form3Name = document.getElementById('form3-name'),
            form1Phone = document.getElementById('form1-phone'),
            //form2Phone = document.getElementById('form2-phone'),
            form3Phone = document.getElementById('form3-phone');

        form1Name.addEventListener('input', (event) => {
            let target = event.target;
            target.value = target.value.replace(/[^а-яё\s]/ig, '');
        });

        form2Name.addEventListener('input', (event) => {
            let target = event.target;
            target.value = target.value.replace(/[^а-яё\s]/ig, '');
        });

        const form2Phone = document.getElementById('form2-phone').value;

        const validPhone = () => {

            const reg = /^\+?[78]([()-]*\d){10}$/;
            const valid = reg.test(form2Phone);
            if (valid) {
                console.log('true');
            }
            else {
                console.log('false');
            }
            return valid;

        };


        form2Message.addEventListener('input', (event) => {
            let target = event.target;
            target.value = target.value.replace(/[^а-яё\s]/ig, '');
        });

        form3Name.addEventListener('input', (event) => {
            let target = event.target;
            target.value = target.value.replace(/[^а-яё\s]/ig, '');
        });

        const allForm = document.querySelectorAll('form'),
            allInput = document.querySelectorAll('input');

        allForm.forEach((elem) => {

            elem.addEventListener('submit', (event) => {

                event.preventDefault();
                elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                const formData = new FormData(elem);
                let body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                postData(body, () => {
                    statusMessage.textContent = successMessage;
                }, (error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });

            });

            validPhone();

        form3.addEventListener('submit', (event) => {

            event.preventDefault();
            form3.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(form3);
            let body = {};

            elem.addEventListener('input', (elem) => {

                if (elem.target.name === 'user_name') {
                    elem.srcElement.value = elem.srcElement.value.replace(/[^а-яёА-ЯЁ\s]/gi, ``);
                } else if (elem.target.name === 'user_phone') {
                    elem.srcElement.value = elem.srcElement.value.replace(/[^+0-9]/gi, ``);
                } else if (elem.target.name === 'user_message') {
                    elem.srcElement.value = elem.srcElement.value.replace(/[^а-яёА-ЯЁ\s]/gi, ``);
                } else {
                    return;
                }

            });

        });

        const postData = (body, outputData, errorData) => {

            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {

                if (request.readyState !== 4) {
                    return;
                }

                if (request.status === 200) {
                    outputData();
                    allInput.forEach((item) => item.value = '');
                } else {
                    errorData(request.status);
                }

            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));

        };

        });
    };

    sendForm();

});
