'use strict';

// Восстановить порядок книг.
let boxes = document.querySelectorAll('.books'),
    box = document.querySelectorAll('.book'),
    replaceImage = document.querySelector('body'),
    toFix = document.querySelectorAll('a'),
    deleteAdvertising = document.querySelector('.adv');
    
boxes[0].insertBefore(box[1], box[0]);
boxes[0].insertBefore(box[2], box[null]);
boxes[0].insertBefore(box[4], box[3]);

// Заменить картинку заднего фона на другую из папки image

replaceImage.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

toFix[4].textContent = 'Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы

deleteAdvertising.remove();

//Восстановить порядок глав во второй и пятой книге

let restore = document.querySelectorAll('ul'),
    restoreOrder = document.querySelectorAll('li');

restore[1].insertBefore(restoreOrder[12], restoreOrder[10]);
restore[1].insertBefore(restoreOrder[14], restoreOrder[10]);
restore[1].insertBefore(restoreOrder[8], restoreOrder[16]);
restore[4].insertBefore(restoreOrder[41], restoreOrder[45]);
restore[4].insertBefore(restoreOrder[45], restoreOrder[38]);
restore[4].insertBefore(restoreOrder[38], restoreOrder[40]);
restore[4].insertBefore(restoreOrder[40], restoreOrder[38]);
restore[4].insertBefore(restoreOrder[41], restoreOrder[44]);

//В шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

// restoreOrder = document.createElement('li');
// restoreOrder.textContent = 'Глава 8: За пределами ES6';
// restore[5].appendChild(restoreOrder);
// restore[5].insertBefore(restoreOrder[55], restoreOrder[55]);
// console.log(restoreOrder);
let naewRestore = document.createElement('li');
naewRestore.textContent = 'Глава 8: За пределами ES6';
restore[5].appendChild(naewRestore);
restore[5].insertBefore(restoreOrder[56], restoreOrder[57]);
console.log(naewRestore);
console.log(restoreOrder);