'use strict';

let lang = 'ru, en',
    russian = prompt('Введите день недели на русском или английском языке', '');

    
if (lang[0] == russian) {
    console.log(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Вокресенье']);
} else if (lang[1] == russian) {
    console.log(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
}

console.log(lang.split(', '));
