'use strict';

//Задача №1
// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке.
// Решите задачу через if, switch, через многомерный массив без ифов и switch.

// let lang = 'ru, en',
//     russian = prompt('Введите день недели на русском или английском языке', '');

    
// if (lang[0] == russian) {
//     console.log(russian = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Вокресенье']);
// } else if (lang[1] == russian) {
//     console.log(russian = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
// }

//console.log(lang.split(', '));

let lang = prompt('Введите день недели на русском или английском языке', ''),
    ruDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Вокресенье'],
    enDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (lang == 'ru') {
        console.log(lang);
    } else {
        console.log(lang);
    }

    
    

//Задача №2
// У нас есть переменная namePerson.Если значение этой переменной“ Артем” то вывести в консоль“ директор”, 
// если значение“ Максим” то вывести в консоль“ преподаватель”, с любым другим значением вывести в консоль“ студент”
// Решить задачу с помощью нескольких тернарных операторов, без использования if или switch