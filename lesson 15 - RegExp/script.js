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

/* 4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a> */

// const changeLink = document.getElementById('task2').innerHTML;
// const resultChangeLink = changeLink.replace(/\http\:\//\site.ru\/ )
// const getDomain = (data) => {
//     const a = document.createElement('a');
//     a.href = data;
//     return a.hostname;
// };
// const urls = ['http://site.ru', 'http://google.com'];
// const links = urls.map(link => `<a href="${link}">${getDomain(link)}</a>`);

// console.log(links);