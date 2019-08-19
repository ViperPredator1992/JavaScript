window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const Validator = (options) => {

        const idForm = document.getElementById(options.id),
            elementsForm = [...idForm.elements].filter(item => item.tagName !== 'BUTTON');

        const showError = (elem) => {

            elem.classList.remove('validator_success');
            elem.classList.add('validator_error');
            const errorDiv = document.createElement('div');
            errorDiv.textContent = 'Ошибка в этом поле';
            errorDiv.classList.add('error-message');
            elem.insertAdjacentElement('afterend', errorDiv);

            if (elem.nextElementSibling.classList.contains('error-message')) {
                elem.nextElementSibling.remove();
            }

        };

        const showSuccess = (elem) => {

            elem.classList.remove('validator_error');
            elem.classList.add('validator_success');

        };

    };

});