'use strict';

let lang = ['ru', 'en'],
    russian = prompt('Введите день недели на русском или английском языке', '');

    
if (lang[0]) {
    console.log(russian = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Вокресенье']);
} else if (lang[1]) {
    console.log(russian = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
} else {
    console.log('');
    
}

console.log(lang);
console.log(russian);
//console.log(lang.split(', '));
