'use strict';

// Создайте функцию, которая принимает 1 аргумент(название произвольное)
// 1. Если как аргумент передана не строка - функция оповещает об этом пользователя
// 2. В полученной(как аргумент) строке функция должна убрать все пробелы в начале и в конце
// 3. Если строка более 30 знаков - то после 30 го символа часть текста скрывается и вместо них появляются три точки(...)

function getArgument(str) {
    str = prompt('', '');
    if (str == Number(str.trim())) {
        alert('Передана не строка');
        
    } else {
        str == String(str.trim());
        str == str > 5 ? str.slice(0, 5) : '...';
        console.log(' Передана строка ', str);
    }
}
getArgument();