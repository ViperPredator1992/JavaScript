'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < week.length; i++) {

    let dayOff = document.createElement('div');
    dayOff.innerHTML = week[i];

    if (week[i] == 'Пятница') {
        dayOff.classList.add('italic');
        let date = new Date(2019, 4, 3);
        console.log(date);
    }
    if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
        dayOff.classList.add('bold');
    }

    document.body.appendChild(dayOff);
}