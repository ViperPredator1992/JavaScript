'use strict';

/* Выполнение скрипта через определенное время */
// setTimeout принимает два аргумента, callback и кол-во милисекунд
// setTimeout(() => {
//     console.log('Сообщение в консоль!');
// }, 3000);//3000 = 3 секунды

// //setInterval вызывает callback функцию через какой то интервал
// let count = 0;
// setInterval(() => {
//     count++;
//     console.log('Привет, я setInterval ' + count);
// }, 2000);

/* Функция останавливающая setInterval - clearInterval(принимает id setTimeout или setInterval) */
clearInterval();

/* Как получить id */
// let count2 = 0;
// console.log(
//     setInterval(() => {
//         count2++;
//         console.log('Привет, я setInterval ' + count2);
//     }, 2000)
// );

/* Как получить id без лишнего кода */
// Такой код без смысленный, он сразу очишает функцию и никогда не даст запустить код

// let count3 = 0,
//     idInterval = setInterval(() => {
//     count3++;
//     console.log('Привет, я setInterval ' + count3);
// }, 2000);
// clearInterval(idInterval);

// let count4 = 0,
//     idInterval = setInterval(() => {
//     count4++;
//     console.log('Привет, я setInterval ' + count4);
// }, 2000);

// setTimeout(() => {
//     clearInterval(idInterval);
// }, 5000);


// let getMessage = function (name) {
//     console.log('Привет ' + name + '!');
// };

// let count5 = 0,
//     idInterval5 = setInterval(getMessage, 2000, 'Василий');

// setTimeout(getMessage, 5000, 'Иван');


/* clearInterval() и clearTimeout() необходимы для сброса(очистки) времени выполнения функции */

// let getMessag6 = function (name) {
//     console.log('Привет ' + name + '!');
// };

// let count6 = 0,
//     idInterval6 = setInterval(getMessag6, 2000, 'Василий');

// let idTimeout = setTimeout(getMessag6, 5000, 'Иван');

// clearTimeout(idTimeout);

/* Анимация */

// let skydiver = document.querySelector('.skydiver'),
//     airplane = document.querySelector('.airplane'),
//     count7 = 0;

// let skydiverDown = function () {

//     count7++;  
//     skydiver.style.top = count7 + 'px';
//     airplane.style.left = count7 * 2 + 'px';
//     if (count7 < 350) {
//         setTimeout(skydiverDown, 10);
//     }

// };
// skydiverDown();

// let skydiver8 = document.querySelector('.skydiver'),
//     airplane8 = document.querySelector('.airplane'),
//     count8 = 0;

// let skydiverDown8 = function () {

//     count8++;
//     if (count8 < 350) {
//         skydiver8.style.top = count8 + 'px';
//         airplane8.style.left = count8 * 2 + 'px';
//     } else if (count8 < 500) {
//         airplane8.style.left = count8 * 2 + 'px';
//     } else {
//         clearInterval(idInterval8);
//     }
//     console.log(count8);

// };

// let idInterval8 = setInterval(skydiverDown8, 10);


// let skydiver9 = document.querySelector('.skydiver'),
//     airplane9 = document.querySelector('.airplane'),
//     count9 = 0,
//     flyInterval;

// let flyAnimate = function () {

//     flyInterval = requestAnimationFrame(flyAnimate);
//     count9++;
//     if (count9 < 350) {
//         skydiver9.style.top = count9 + 'px';
//         airplane9.style.left = count9 * 2 + 'px';
//     } else if (count9 < 500) {
//         airplane9.style.left = count9 * 2 + 'px';
//     } else {
//         cancelAnimationFrame(flyInterval);
//     }

// };

// flyInterval = requestAnimationFrame(flyAnimate);


let skydiver10 = document.querySelector('.skydiver'),
    airplane10 = document.querySelector('.airplane'),
    count10 = 0,
    flyInterval10;

let flyAnimate10 = function () {

    flyInterval10 = requestAnimationFrame(flyAnimate10);
    count10++;
    if (count10 < 350) {
        skydiver10.style.top = count10 + 'px';
        airplane10.style.left = count10 * 2 + 'px';
    } else if (count10 < 500) {
        airplane10.style.left = count10 * 2 + 'px';
    } else {
        cancelAnimationFrame(flyInterval10);
    }

};

let animate = false;
document.addEventListener('click', () => {

    if (animate) {
        flyInterval10 = requestAnimationFrame(flyAnimate10);
        animate = false;
    } else {
        animate = true;
        cancelAnimationFrame(flyInterval10);
    }

});


/* Класс new Date() */

let date = new Date();
//let date = new Date('10 march 1870');
//let date = new Date(1870, 2, 10, 9, 30, 15, 100);
// console.log(date);
// console.log('year ', + date.getFullYear());
// console.log('month ', + date.getMonth());
// console.log('day ', + date.getDate());
// console.log('день недели ', + date.getDay());
// console.log('hour ', + date.getHours());
// console.log('minets ', + date.getMinutes());
// console.log('seconds ', + date.getSeconds());
// console.log('milliseconds ', + date.getMilliseconds());
//дата по гринвичу
// console.log('year ', + date.getUTCFullYear());
// console.log('month ', + date.getUTCMonth());
// console.log('day ', + date.getUTCDate());
// console.log('день недели ', + date.getUTCDay());
// console.log('hour ', + date.getUTCHours());
// console.log('minets ', + date.getUTCMinutes());
// console.log('seconds ', + date.getUTCSeconds());
// console.log('milliseconds ', + date.getUTCMilliseconds());
// задавать компоненты даты
date.setFullYear(2000);
date.setMonth(2, 15);
console.log();
console.log(date);
console.log('year ', + date.getFullYear());
console.log('month ', + date.getMonth());
console.log('day ', + date.getDate());