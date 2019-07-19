'use strict';
/* Загрузка документа. События в JS. Обработчики событий и особенности их работы. */


/* 1. События в JS */

// На JS в оснвном пишется UI. Это значит, что нам необходимо обрабатывать действия пользователя и на них реагировать.
// Для этого и есть события в JS. Работы с слбытиями строиться с помощью функции. 
// Т.е. мы создаем функцию и говорим браузеру - "Выполни эту функцию, когда произойдет определенное".
// JS умеет лтлавливать поведение пользователя. Что же подразумевается под поведением пользователя?
// Это наведения мишки на блоки, нажатие на кнопки, нажатие на кнопок на клавиатуре, 
// скролл страницы, изменение размеров экрана. 
// В браузере на каждое такое поведение, навешано событие. Т.е. оно запускается когда какой-то обработчик говорит - 
// - что при клике мышкой, нужно что-то сделать.
// Эти все события описаны вместе с DOM. События являются частью DOM. 
// Браузер отлавливает, что происходит на странице и вызывает соответствуещие обработчики. 

// Самый устаревший способ написать событие внутри html кода. Пример на строке - 51, html файл.

// onclick - это стандартный атрибут, внутри него можно написать вызов функции.

// Примеры старых методов использования события в JS. строка 23 до 69
// let square = document.querySelector('.square');
// console.log(square);
// console.dir(square); // console.dir() - команда, которая показывает код в виде объекта

// square.onclick = function () {
//     console.log('Вы кликнули на квадрат');
// };

// //Если я хочу сделать ограниченное кол-во кликов
// let square2 = document.querySelector('.square');
// let count = 0;

// square2.onclick = function () {

//     if (count === 3) {
//         square2.onclick = null;
//         console.log('Опачки');
//         return;
//     }

//     count++;
//     console.log('Вы кликнули на квадрат');
// };

// // Если необходимо, чтобы две функции запускались по клику

// let square3 = document.querySelector('.square');
// let count2 = 0;

// square3.onclick = function () {

//     if (count2 === 3) {
//         square3.onclick = null;
//         console.log('Опачки');
//         return;
//     }

//     count2++;
//     console.log('Вы кликнули на квадрат');
// };

// square3.onclick = function () {

//     console.log('Это вторая функция'); // Функция перезаписалась и теперь не работает
    
// };


// Правильный вариант!
// Называют еще как - навешиватель слушателя.

// let square4 = document.querySelector('.square');
// let count3 = 0;

//addEventListener - в переводе === добавить событие слушателя
// У этого метода есть три параметра, два из которых обязательные.
// К addEventListener можно присваивать несколько обытий!
// square4.addEventListener('click', function () {
//     console.log('Произошел клик по квадрату');
// });
// square4.addEventListener('click', function () {
//     console.log('Произошел клик по квадрату 2');
// });
// square4.addEventListener('click', function () {
//     console.log('Произошел клик по квадрату 3');
// });

// Чтобы ограничить кол-во кликов, как мы пытались сделать это выше
let square5 = document.querySelector('.square');
let count4 = 0;
let clicked = function () {
    count4++;
    if (count4 === 3) {
        square5.removeEventListener('click', clicked);
    }
    console.log('Произошел клик по квадрату');
};
// Вторым параметром передаем только название функции
square5.addEventListener('click', clicked);


/* 2. Объект событий */

// У каждого события, есть объект события. Этот объект доступен только функции обработчика событии.
// Чтобы его получить, необходимо первым параметром функции, указать его имя.
// Называть его можно как угодно, но принято называть его event или просто буквой e.

let square6 = document.querySelector('.square');

square6.addEventListener('click', function (event) {
    console.log(event);
});

// События мыши
let square7 = document.querySelector('.square');
let eventFunc = function (event) {
    console.log(event.type);
};

square7.addEventListener('click', eventFunc);
// square7.addEventListener('mouseup', eventFunc);
// square7.addEventListener('mousedown', eventFunc);

square7.addEventListener('mouseenter', eventFunc); // Функция срабатывает на родителя
square7.addEventListener('mouseleave', eventFunc); // Функция срабатывает на родителя

// square7.addEventListener('mouseover', eventFunc); // Функция срабатывает на детей родителя
// square7.addEventListener('mouseout', eventFunc); // Функция срабатывает на детей родителя

//square7.addEventListener('mousemove', eventFunc);


/* 3. События при работе с формами */

let eventFuncInput = function (event) {
    console.log(event.type);
};

// document.querySelector('#text').addEventListener('input', eventFuncInput);
// document.querySelector('#text').addEventListener('change', eventFuncInput);

// document.querySelector('#text').addEventListener('keyup', eventFuncInput);
// document.querySelector('#text').addEventListener('keydown', eventFuncInput);

document.querySelector('#text').addEventListener('focus', eventFuncInput);
document.querySelector('#text').addEventListener('blur', eventFuncInput);

let eventFuncRange = function (event) {
    console.log(event.type);
    console.log(event.target.value);
};

document.querySelector('#range').addEventListener('change', eventFuncRange);


/* 4. События при загрузке html документа */

// Процес загрузки html документа состоит из трех стадий (DOMContentLoaded, DOM Content Load, DOM Content Onload)
// 1. DOMContentLoaded - когда браузер загрузил полностью html страницу
// 2. DOM Content Load - когда браузер загрузил все ресурсы
// 3. DOM Content Onload - событие рпоисходит на самом документе. -
// - Возможно повесить обработчик событий на сам document.addEventListener, пример ниже...

document.addEventListener('DOMContentLoaded', function () {
   console.log('Страница загрузилась');
   // Так делают обычно в начале документа как обвертку, чтобы знать, если страница назрузилась
});

// Так же есть событие Window On Load - срабатывает, когда загружается вся страница, включая ее ресурсы, стили, картинки и т.д.
// Используется это событие очень редко, поскольку обычно нет нужды подгружать все ресурсы 
// и это может очень сильно задержать загрузку страницы. Если нужен определенный ресурс, 
// то можно поставить событие On Load, непосредственно на нем

// UnLoad - когда человек уходит со страницы или закрывает окно браузера. 

// beforeunload - может отменить переход со страницы. 
// Можно вызвать этот обработчик события и спросить пользователя - "Вы уверены что хотите перейти со страницы?"

// window.onbeforeunload = function () {
//   return 'Вы уверены что хотите уйти со страницы?';  
// };


/* 5. Событие event.preventDefault() */

// event.preventDefault() - этот метод отменяет стандартное событие браузера, т.е. стандартное поведение браузера.
// Например по клику на ссылку у нас должна открыватся другая страница или клику на кнопку submit отправляется форма.
// Можно отменять эти события, например пока пользователь не заполнил форму 
// или вместо перехода на другую страницу, сделать свои действия

document.querySelector('#link').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('click');
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    console.log('click');
});


/* 6. Всплытие и захват событий */

// Помимо event.target(виновник события), есть current.target(элемент в котором событие на данный момент обрабатывается)
// current.target не всегда совпадает с target. 

let clickElem = null;

function greenHundler(event) {
    
    if (clickElem) {

        clickElem.classList.remove('green');

    }

    clickElem = event.currentTarget;
    clickElem.classList.add('green');
    
}

document.querySelector('.event_btn').addEventListener('click', greenHundler, true);
document.querySelector('.circle').addEventListener('click', greenHundler, true);
document.querySelector('.square').addEventListener('click', greenHundler, true);
document.querySelector('body').addEventListener('click', greenHundler, true);