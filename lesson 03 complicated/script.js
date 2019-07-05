'use strict';

let lang = ['ru', 'en'],
    russian = prompt('Введите день недели на русском или английском языке', '');
if (lang[0]) {
    console.log(lang[0]);
    
} else if (lang[1]) {
    console.log(lang[1]);
}
console.log(lang);
