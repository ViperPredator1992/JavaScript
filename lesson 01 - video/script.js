'use strict';

//ПЕРЕМЕННЫЕ

//var устаревшая переменная, старый стандарт.
// переменная var создается до выполнения скрипта + она видна везде

// console.log(leftBorderWidth); //undefined - переменная создана, но не имеет никакого значения
var leftBorderWidth = 1;
console.log(leftBorderWidth); // теперь всё ок
// let и const современные переменные, которые используют в ES6

//console.log(second); // получим ошибку - second is not defined, значить код не моэет найти переменную 
let second = 2; // let создается только тогда, когда код доходит до нее. 
//не видна везде, как var
// Например: 
// {
//     let second = 2;
// }
console.log(second); // теперь всё ок

const pi = 3.14; //константа 

//Ошибки консоли
//1. undefined - переменная создана, но не имеет никакого значения
//2. is not defined - значить код не может найти
//3. Infinity - числовое значение
//4. NaN - нереальное значение (пример: разделить строку на число)
//5. null - чего то в коде не существует

//Типы данных - 7 штук
let number = 2; // Числа
let string = 'Hello'; //Строка 
let sym = Symbol(); //Символ
let boolean = true; // или false - правда или лож
null; //Чего то в коде не существует
undefined; //Объект есть, но значения к нему нет
let odj = {} // Объект

console.log(4 / 0); //Infinity - числовое значение
console.log('string' * 9); //NaN
let something; // undefined
console.log(something); // null

//Объект
let obj = {} //Объект это коллекция данных, структура, которая используется для хранения любых данных. 
//Пример:
let persone = {
    name: 'John',
    age: 25,
    isMarried: false
};
//Как достать или обратится к объекту, есть 2 способа
//1. console.log(persone.name);
console.log(persone.name);
//2. console.log(persone["name"]);
console.log(persone["name"]);



// Массив используется для храниния данных, которые идут по порядку.
//Массив заключается в квадратные скобки "[]" и построен так, что каждому значению автоматически присваевается порядковый номер

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]);



//Виды модальных окн

//1. confirm с ответом true else false
let answer = confirm('Are you here?');
console.log(answer);

//2. prompt с возможностью ввода данных пользователя
// let answer = prompt('Есть ли вам 18?', 'Да');
// console.log(typeof (answer));

//Операторы инкримент и декримент
let incr = 10,
    decr = 10;

// incr++;
// decr--;

//Префиксная форма возвражает уже измененное выражение
// console.log(--incr);
// console.log(++decr);

//Постфиксная форма 
console.log(incr++);
console.log(decr++);