'use strict';

const task1 = document.querySelector('#task1'),
    task2 = document.querySelector('#task2');

/* 1.Написать скрипт, 
    которые заменяет слово функция и его однокоренные слова в div с id=task1
     на <strong>функция</strong>. 
 */

task1.innerHTML = task1.innerHTML.replace(/функция/g, '<strong>функция</strong>');

/* 2. Написать скрипт который в div с id=task2 найдет время. 
Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
заключить найденное время в тег <b></b> */

task2.innerHTML = task2.innerHTML.replace(/(\d{2}:\d{2})/gi, (val1) => `<b>${val1}</b>`);

/* 3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark> */

task1.innerHTML = task1.innerHTML.replace(/("([^"]*)")/gi, (val1) => `<mark>${val1}</mark>`);
task2.innerHTML = task2.innerHTML.replace(/("([^"]*)")/gi, (val1) => `<mark>${val1}</mark>`);

/* 4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a> */

task1.innerHTML = task1.innerHTML.replace(/((http|https):\/\/)(\S+.ru)(\/.+.html)?/gi, 
(val1, val2, val3, val4) => `<a href="${val1}">${val4}</a>`);
task2.innerHTML = task2.innerHTML.replace(/((http|https):\/\/)(\S+.ru)(\/.+.html)?/gi, 
(val1, val2, val3, val4) => `<a href="${val1}">${val4}</a>`);

/* 5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль */

document.body.innerHTML.match(/(\#\w{6})/gi).forEach((elem) => {console.log(elem);});