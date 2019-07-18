'use strict';
//Типы данных, операторы, методы и свойства

// 1. Типы данных
let myVar;

myVar = 10; // Число - number
console.log(typeof myVar);

myVar = 'Hello World'; // Строка - string
console.log(typeof myVar);

myVar = true; // Логическое или булевое значение - boolean (true || false или еще 1 || 0),
// может принимать два значения: лож = false и правда = true.
// true = 1 and false = 0
// Любое значение можно преобразовать в булевый тип с помощью конструктора булевого типа(пример строка - 93 до 97).
// После преобразования все значения будут принимать значение - true. Но есть исключения(пример строка - 99 до )
// Пример строка - 86 до 103
console.log(typeof myVar);

myVar = null; // Это пустое или неизвестное значение. null это то чего не существует в коде.
// null - переводится как "пусто" или 0. Иногда в практике присваивают значение null чтобы иметь пустую переменную.
// Пример строка - 67 до 71
console.log(typeof myVar); // Это ошибка JS

myVar = undefined; // undefined - это значит, что значение полностью отсутствует.
//Т.е. переменная объявлена, но в нее ничего не записано! Т.е. её значение и есть undefined
// Также можно получить undefined, если обратится к не существующим свойствам или к элементам массива.
// Т.е. это полное отсутствие значания! 
// Пример строка - 74 до 81
console.log(typeof myVar);

myVar = Symbol(); // Новый тип данных - Символ. Появился в стандарте ES6.
// Символ очень редко используется на практике. Необходим для уникальных идентификаторов имён. Это уникальное и неизменное значение.
// Создать два одинаковых символа нельзя! 
// Даже если мы зададим одинаковое описание, всё равно получим - false
// Смотреть пример на строке - 56 до 63
console.log(typeof myVar);

//number, string, boolean, null, undefined, Symbol() - это примитивные типы данных

myVar = {}; // Объект - object
console.log(typeof myVar);

/* Объектные типы даных */

myVar = []; // Массив
console.log(typeof myVar);

let regExp = /w+/g; // Регулярные выражения 
console.log(typeof myVar);

let func = function() {}; // Функции
console.log(typeof myVar);

let error = Error('error message'); // Ошибки
console.log(typeof myVar);

let date = new Date(); // Дата
console.log(typeof myVar);

// Оператор typeof - унарный оператор для определения типа данных
//console.log(typeof myVar);

let mySumbol1 = Symbol();
let mySumbol2 = Symbol();
console.log(mySumbol1 == mySumbol2);

let mySumbol3 = Symbol('hello');
let mySumbol4 = Symbol('hello');
console.log(mySumbol3 == mySumbol4);

console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);

let myLet;
console.log('myLet:', myLet);

let obj = {};
console.log('obj.prop:', obj.prop);

let arr = [1, 2, 3];
console.log('arr[5]:', arr[5]);

let myTrue = true;
let myFalse = false;
console.log(2 === 2);
console.log(2 === 3);

console.log(Boolean(5));
console.log(Boolean('Hello'));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function () {}));

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(''));

/* 2. Операторы */

// || - или
// && - и
// ! - не, т.е. оператор отрицания

// Оператор || - возвращает истину(true), когда один из операндов истина. 

console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false

// Оператор && - возвращает истину(true), только если оба операнда истина. 

console.log(true && true); //true
console.log(true && false); //true
console.log(false && false); //false

// Оператор ! - логическое не, это унарный оператор, он принимает операнд и изменяет его значение на противоположенное . 

console.log(!true); //false
console.log(!false); //true

/* 3. Числа */

console.log(50);
console.log(8.5);
console.log(0.5);
console.log(.5);

console.log(5e6); // Экспоненциальная форма записи числа
console.log(0b1111); // Двоичная форма записи числа
console.log(0o11); // Восьмеричная форма записи числа
console.log(0x22aacc); // Шестандцатиричная форма записи числа

// Еще числа могут быть преставлены глобальными свойствами. Эти типы данных являются числом.

// Infinity
console.log(Infinity);
console.log(-Infinity); // Infinity может быть и отрицательным
console.log(NaN);

console.log(10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000); // Бесконечность
console.log(-10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000); // Бесконечность
console.log(5 / 0);
console.log(-5 / 0);

// NaN - not a number
console.log(0 / 0);
console.log('0' / 0);
console.log('dfdfdf' * 0);
console.log(Infinity / Infinity);

/* 4. Арифметические операторы */

// Унарный плюс

console.log(+5);

// Унарный минус

console.log(-5);

// Инкремент и дикремент

let i = 5;

console.log(++i);// Префиксная форма
console.log(i);

console.log(--i);// Префиксная форма
console.log(i);

console.log(i++);// Постфиксная форма
console.log(i);

console.log(i--);// Постфиксная форма
console.log(i);

/* 5. Бинарные операторы */

console.log(3 + 4); // Плюс
console.log(4 - 3); // Минус
console.log(2 * 3); // Умножение
console.log(9 / 2); // Деление
console.log(9 % 2); // Остаток от деления

/* 6. Виды операции */

let n = 15;

//n = n + 3;
n += 3;
console.log('n:', n);
//n = n - 6;
n -= 6;
console.log('n:', n);
//n = n / 3;
n /= 3;
console.log('n:', n);

/* 7. Операторы сравнения */

console.log(3 > 2); // Больше
console.log(3 < 2); // Меньше
console.log(5 >= 3); // Больше или равно
console.log(10 <= 5); // Меньше или равно
console.log(5 === 5); // Строгое равенство без привидения типов данных
console.log(5 !== 6); // Строгое не равенство без привидения типов данных
console.log(5 == '5'); // Равенство с привидением типов данных
console.log(5 != '5'); // Не равенство с привидением типов данных

// Для более сложных операции есть объект Math();

console.log(Math.sqrt(25)); // Метод извлечения корня
console.log(Math.pow(5, 3)); // Метод возведения в степень
console.log(Number.isInteger(5)); // Метод для проверки, является ли число целым === true
console.log(Number.isInteger(5.5)); // Метод для проверки, является ли число дроблым === false

/* 8. Cтроки */

let myString = 'Hello world!';
let myStr = "\t Hello, \"my\"\n friends!";
console.log('myStr:', myStr);
// \t = табуляция
// \n = перевод строки
console.log('Hello, "my" friends!');
// + оператор конкотинации
console.log('Hello' + 'world!');

let str = 'Hello my friends!';
console.log(myString + str);

/* 9. Методы и свойства */

let str2 = 'Hello my friends!';

// Свойство - length === Длина строки
console.log(str2.length); 

// Метод toUpperCase() === Все символы с заглавной буквы
console.log(str2.toUpperCase()); 

// Метод toLowerCase() === Все символы с нижней буквы
console.log(str2.toLowerCase()); 

// Метод charAt() === Возвращает символ в указанным индексом
console.log(str2.charAt(0));
console.log(str2.charAt(2));

// Альтернатива метода charAt()
console.log(str2[0]);
console.log(str2[1]);


// Методы возвращающие подстроку

console.log(str2.substring(6)); // Возвращает подстроку начиная с индекса, который мы укажем и до конца строки
console.log(str2.substring(9, 15)); // Возвращает подстроку до индекса, который мы укажем 
console.log(str2.slice(6)); // Возвращает подстроку начиная с индекса, который мы укажем и до конца строки
console.log(str2.slice(-8)); // Можно указывать отрицательные значения
console.log(str2.substr(6, 9)); // Возвращает подстроку начиная с индекса, который мы укажем и сколько символов нам необходимо взять
console.log(str2.indexOf('friends')); // Для поиска подстроки
console.log(str2.replace('my friends', 'World')); // Для замены подстроки. 1. Указываем строку. 2. На что хотим заменить
console.log(str2.split(' ')); // Разбивает строку на массив
