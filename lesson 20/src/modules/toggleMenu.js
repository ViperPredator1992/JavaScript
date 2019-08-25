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

export default toggleMenu;