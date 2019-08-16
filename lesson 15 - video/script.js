'use strict';

// const header = document.querySelector('h1'),
//     link = document.getElementById('googl'),
//     img = document.querySelector('img');

// console.log(img.attributes);
// console.log(img.classList);
// console.log(img.hasAttributes());
// console.log(img.getAttribute('alt'));
// console.log(img.setAttribute('alt', 'logotype'));
// console.log(img.removeAttribute('alt'));
// console.log(img.classList);
// console.log(img.classList.contains('image'));
// console.log(img.classList.add('pic'));
// console.log(img.classList.remove('image'));
// console.log(img.classList.toggle('new_image'));

// img.addEventListener('mouseenter', (event) => {
//     event.target.src = event.target.dataset.img;
// });

//Регулярные выражения 
/* Регулярные выражения это объект, 
который описывает набор символов, которые в последующем используются для поиска подстрок в тексте */

const reg = /привет/;
const reg2 = new RegExp('привет');//RegExp это конструктор, который принимает два выражения

console.log("TCL: reg", reg);
console.log("TCL: reg2", reg2);
console.log("TCL: reg", reg.test('всем привет, добро пожаловать'));
console.log("TCL: reg", reg.test('всем хай, добро пожаловать'));
console.log("TCL: reg", /привет/.test('всем привет, добро пожаловать'));
console.log("TCL: reg", /привет/.test('всем Привет, добро пожаловать'));

/* Как найти строку, которая начинается со слова - привет
для этого есть оператор - ^*/
console.log("TCL: reg", /^привет/.test('всем привет, добро пожаловать'));
console.log("TCL: reg", /^привет/.test('привет всем, добро пожаловать'));

/* Есть нужно найти слово в конце предложения */
console.log("TCL: reg", /привет$/.test('всем привет, добро пожаловать'));
console.log("TCL: reg", /привет$/.test('привет всем, добро пожаловать'));
console.log("TCL: reg", /привет$/.test('какие люди? ну привет'));

/* Если нужно найти конкретно слово - привет, чтобы строка начиналась и заканчивалась этим словом */
console.log("TCL: reg", /^привет$/.test('всем привет, добро пожаловать'));
console.log("TCL: reg", /^привет$/.test('привет всем, добро пожаловать'));
console.log("TCL: reg", /^привет$/.test('какие люди? ну привет'));
console.log("TCL: reg", /^привет$/.test('привет'));

/* Метод match() - этот метод как раз и принимает регулярные выражения в виде параметра */

const string = `Привет друг, добро Пожаловать, прошу проходите`;

// Найти букву - п
const result = string.match(/п/);
console.log("TCL: result1", result);

// Найти букву - п игнорируя регистр
const result2 = string.match(/п/i);
console.log("TCL: result2", result2);

// Найти букву - п, глобальным поиском
const result3 = string.match(/п/g);
console.log("TCL: result3", result3);

// Найти букву - п, со всеми подстроками(игнорируя регистр и глобальным поиском)
const result4 = string.match(/п/ig);
console.log("TCL: result5", result4);

/* Спец символы в регулярных выражениях */
const string2 = 'Спец символы: + * / и обратный слеш . ^ $ ][ {} () ?';
console.log("TCL: string2", string2);

/* Для поиска спецсимволов нужно применыть обратсный слеш, т.е. экранирование - \ */
const result5 = string2.match(/\+/);
console.log("TCL: result5", result5);

/* Для получения всех вимволов в строке используется точка - . */
const result6 = string2.match(/./g);
console.log("TCL: result6", result6);

/* Квадратные скобки( [] ) нужны для объединения символов или для того чтобы задать диапазон */
const result7 = string.match(/[абв]/g);
console.log("TCL: result7", result7);

/* Работа с диапазоном */
const string3 = 'Hello friend, welcome. Please заходите 25525_.';

/* Найти все большие и маленткие буквы(букву - ё, нужно дописывать) */
const result8 = string.match(/[А-Яа-яЁё]/g);
console.log("TCL: result8", result8);

/* Найти все буквы учитывая большие, но не прописывая их */
const result9 = string.match(/[а-яё]/gi);
console.log("TCL: result9", result9);
const result10 = string3.match(/[a-z]/gi);
console.log("TCL: result10", result10);

const string4 = `Привет друг, добро Пожаловать, прошу проходите
мой номер телефона   _   8-999-123-45-67`;

/* Есть нужно найти все цифры */
const result11 = string4.match(/[0-9]/gi);
console.log("TCL: result11", result11);

/* Есть нужно найти все символы кроме без цифр */
const result12 = string4.match(/[^0-9]/gi);
console.log("TCL: result12", result12);

/* Работа только с цифрами */
const result13 = string4.match(/\d/gi);
console.log("TCL: result13", result13);

/* Работа только с буквами */
const result14 = string4.match(/\D/g);
console.log("TCL: result14", result14);

/* Найти только все пустые символы */
const result15 = string4.match(/\s/gi);
console.log("TCL: result15", result15);

/*  Найти только все буквы без переносов строки, отступов, запятых */
const result16 = string4.match(/\S/g);
console.log("TCL: result16", result16);

/*  Найти только все буквы и числа, а так же символы нижнего подчеркивания */
const result17 = string4.match(/\w/g);
console.log("TCL: result17", result17);

/*  Находит всё наоборот, что не относится к мальнькой - w */
const result18 = string4.match(/\W/gi);
console.log("TCL: result18", result18);

const string5 = `Привет друг, добро Пожаловать, прошу проходите
мой номер телефона  8-999-123-45-67 номер домофона 55`;

/* Найти несколько вариантов  */
const result19 = string5.match(/телефона|домофона/gi);
console.log("TCL: result19", result19);

/* Группировать альтернативные варианты  */
const result20 = string5.match(/(теле|домо)фона/gi);
console.log("TCL: result20", result20);

const string6 = `Привет друг, добро Пожаловать, прошу проходите
мой номер телефона  8-999-123-45-67 номер домофона 55
девушка
дедушка
номера
номераа
номераааа`;

/* Группировать альтернативные варианты с разницей в одну букву
Вариант №1 */
const result21 = string6.match(/де(в|д)ушка/gi);
console.log("TCL: result21", result21);

/* Группировать альтернативные варианты с разницей в одну букву
Вариант №2 */
const result22 = string6.match(/де[вд]ушка/gi);
console.log("TCL: result22", result22);

/* Операторы квантификации - ?, +, *
квантификация - это возможность указывать колличество повторении группы или классов */

/* Буква - а, была или не была */
const result23 = string6.match(/номера?/gi);
console.log("TCL: result23", result23);

/* Чтобы применить к нескольким символам */
const result24 = string6.match(/номе(ра)?/gi);
console.log("TCL: result24", result24);

/* Буква - а, была обязательно */
const result25 = string6.match(/номера+/gi);
console.log("TCL: result25", result25);

/* Буква - а, может присутствовать и может не присутствовать */
const result26 = string6.match(/номера*/gi);
console.log("TCL: result26", result26);

/* Буква - а, сколько раз может этот символ повторится */
const result27 = string6.match(/номера{2}/gi);
console.log("TCL: result27", result27);

/* Буква - а, от скольки и до скольки */
const result28 = string6.match(/номера{1,3}/gi);
console.log("TCL: result28", result28);

/* Подстрока которая начинается и заканчиватся буквой - о */
const result29 = string6.match(/о.о/gi);
console.log("TCL: result29", result29);

/* Вместо одного символа будет 2 */
const result30 = string6.match(/о.{2}о/gi);
console.log("TCL: result30", result30);

/* Вместо одного символа будет 2 */
const result31 = string6.match(/о.{1,3}о/gi);
console.log("TCL: result31", result31);

const string7 = `Привет друг, добро Пожаловать, прошу проходите
мой номер телефона  8-999-123-45-67 номер домофона 55
девушка
дедушка
номера
номераа
номераааа
<div class="best">Привет мир!</div>`;

/* Получить только тэги c текстом внутри */
const result32 = string7.match(/<.+>/gi);
console.log("TCL: result32", result32);

/* Получить только тэги c текстом внутри */
const result33 = string7.match(/<.+?>/gi);
console.log("TCL: result33", result33);

/* Подстрока после которой написано слово - домофона, через match */
const result34 = string7.match(/номер(?= домофона)/gi);
console.log("TCL: result34", result34);

/* Подстрока с заменой слов */
const result35 = string7.replace(/номер(?= домофона)/gi, 'пинкод');
console.log("TCL: result35", result35);

/* Подстрока с заменой слов с отрицанием */
const result36 = string7.replace(/номер(?! домофона)/gi, 'пинкод');
console.log("TCL: result36", result36);

/* Индекс где находится первое регулярное выражение */
const result37 = string7.search(/номер/gi);
console.log("TCL: result37", result37);

const string8 = `Привет друг, добро Пожаловать, прошу проходите
мой номер телефона  8-999-123-45-67 номер домофона 55
девушка
дедушка
номера
номераа
номераааа
+79080500500
+7(999)123-4567
master@yandex.ru
boss@gmail.com
<div class="best">Привет мир!</div>`;

const email = string8.match(/\w+@\w+\.\w{2,3}/g);
console.log("TCL: email", email);

const mobile = string8.match(/\+?[78]([-()]*\d){10}/g);
console.log("TCL: mobile", mobile);

/* Скрыть номер */
const mobile2 = string8.replace(/\+?[78]([-()]*\d){10}/g, '***');
console.log("TCL: mobile", mobile2);

/* Получить чисты массив без запятых и т.д. */
const res = string8.split(/[\s,]+/);
console.log("TCL: res", res);

const input = document.querySelector('input'),
    output = document.querySelector('.output');

// input.addEventListener('input', () => {
//     let text = input.value;
//     output.textContent = text.replace(/a/g, '');
// });

// input.addEventListener('input', () => {
//     let text = input.value;
//     output.textContent = text.replace(/ace/g, '');
// });

// input.addEventListener('input', () => {
//     let text = input.value;
//     output.textContent = text.replace(/\d/g, '');
// });

// input.addEventListener('input', () => {
//     let text = input.value;
//     output.textContent = text.replace(/Максим/gi, (match) => match.toUpperCase());
// });

// input.addEventListener('input', () => {
//     let text = input.value;
//     output.textContent = text.replace(/(\w+)@\w+\.\w{2,3}/gi, (match, val1, val2) => val1);
// });

// input.addEventListener('input', () => {
//     let text = input.value;
//     output.textContent = text.replace(/(\w+)@(\w+\.\w{2,3})/gi, (match, val1, val2) => val2);
// });

// input.addEventListener('input', () => {
//     input.value = input.value.replace(/\d/g, '');
// });

// input.addEventListener('input', () => {
//     input.value = input.value.replace(/\D/g, '');
// });

input.addEventListener('input', () => {
    input.value = input.value.replace(/\d/g, '*');
});