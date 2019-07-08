'use strict';

// Создайте функцию, которая принимает 1 аргумент(название произвольное)
// 1. Если как аргумент передана не строка - функция оповещает об этом пользователя
// 2. В полученной(как аргумент) строке функция должна убрать все пробелы в начале и в конце
// 3. Если строка более 30 знаков - то после 30 го символа часть текста скрывается и вместо них появляются три точки(...)


let strText = prompt();
function getArgument(str) {

    str = str.trim();

    if (strText == Number(str)) {
        alert('Передана не строка');
    } else {
        console.log('Передана строка');
        if (str.length  > 5) {
            str = str.slice(0, 5) + '...';
            return str;
            //console.log(str);
        } else {
            return str;
        }
    }
}
console.log(getArgument(strText));

// if (typeof str != 'string') {
//     str += '';
//     alert('Передана не строка');
// } else {
//     console.log('Передана строка');
// }
// if (str.length <= 30) return str;
// str = str.slice(0, 30) + '...';
// return str;