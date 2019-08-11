'use strict';

console.log(screen);
console.log(document);
console.dir(document);

const heigth = document.documentElement.clientHeight;
console.log("heigth: ", heigth);

const width = document.documentElement.clientWidth;
console.log("width: ", width);

const block = document.querySelector('.boxing');

const heigth2 = block.clientHeight;
console.log("heigth: ", heigth2);
const width2 = block.clientWidth;
console.log("width: ", width2);

/* Если нужны размеры с полой прокрутки и border */
const heigth3 = block.offsetHeight;
console.log("heigth: ", heigth3);
const width3 = block.offsetWidth;
console.log("width: ", width3);

/* Если нужны размеры всего блока */
const heigth4 = block.scrollHeight;
console.log("heigth: ", heigth4);
const width4 = block.scrollWidth;
console.log("width: ", width4);

document.querySelector('.box__button').addEventListener('click', () => {
    // block.style.heigth = `${block.scrollHeight}px`;
    // block.style.width = `${block.scrollWidth}px`;

    // block.scrollTop = 100;
    // block.scrollLeft = 100;

    // block.scrollTop += 10;
    // block.scrollLeft += 10;

    //block.scrollBy(10, 10);

    //block.scrollTo(0, 20);

    block.getBoundingClientRect();
    console.log("TCL: block", block.getBoundingClientRect());

});
