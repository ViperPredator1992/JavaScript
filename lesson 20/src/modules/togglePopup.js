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

export default togglePopup;