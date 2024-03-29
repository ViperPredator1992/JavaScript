'use strict';

//Задача №1
// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке.
// Решите задачу через if, switch, через многомерный массив без ифов и switch.

let lang = prompt('Введите день недели на русском или английском языке', ''),
    ruDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Вокресенье'],
    enDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (lang == 'ru') {
        console.log(ruDay);
    } else {
        console.log(enDay);
    }

    switch (lang) {
        case 'ru':
            ruDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Вокресенье'];
            console.log(ruDay);
            break;
        case 'en':
            enDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            console.log(enDay);
            break;
    }

    let languages = {
        'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Вокресенье'],
        'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    };
    if (lang == 'ru') {
        console.log(languages.ru);
    } else {
        console.log(languages.en);
    }
    

//Задача №2
// У нас есть переменная namePerson.Если значение этой переменной“ Артем” то вывести в консоль“ директор”, 
// если значение“ Максим” то вывести в консоль“ преподаватель”, с любым другим значением вывести в консоль“ студент”
// Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = prompt('Введите имя', ''),
    result = (namePerson == 'Артем') ? 'директор' : 
            (namePerson == 'Максим') ? 'преподаватель' :
            'студент';

console.log(namePerson, result);