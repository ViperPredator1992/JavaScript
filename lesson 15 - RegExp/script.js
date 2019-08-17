'use strict';

/* 1.Написать скрипт, 
    которые заменяет слово функция и его однокоренные слова в div с id=task1
     на <strong>функция</strong>. 
 */

const changeNameFunction = document.getElementById('task1').innerHTML;
const resultChangeNameFunction = changeNameFunction.replace(/функция/g, '<strong>функция</strong>');
document.getElementById('task1').innerHTML = resultChangeNameFunction;

/* 2. Написать скрипт который в div с id=task2 найдет время. 
Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
заключить найденное время в тег <b></b> */

const changeTime = document.getElementById('task2').innerHTML;
const resultChangeTime = changeTime.replace(/<b>\w<b>/gi, '<b></b>');
console.log("TCL: resultChangeTime", resultChangeTime)

/* 3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark> */


/* 4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a> */


/* 5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль */

