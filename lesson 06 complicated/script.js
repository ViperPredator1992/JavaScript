'use strict';

// let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// for (let i = 0; i < week.length; i++) {

//     let dayOff = document.createElement('div');
//     dayOff.innerHTML = week[i];

//     if (week[i] == 'Понедельник') {
//         document.write(week[i].bold());
//         let date = new Date(2019, 4, 3);
//         console.log(date);
//     }
//     if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
//         elt.style.cssText('font-weight: italic');
//         //document.write(week[i].italics());
//     }

//     document.body.appendChild(dayOff);
// }


let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0, len = week.length; i < len; i++) {
    let html = week[i];
    if (i === 0) {
        html = html.italics(); // понедельник
    } 
    else if (i > 4) {
        html = html.bold(); // выходные
    } 

    let dayOff = document.createElement('div');
    dayOff.innerHTML = html;
    document.body.appendChild(dayOff);
}