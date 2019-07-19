'use strict';

// 1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
// 2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры(из 1.6 .2018 сделает 01.06 .2018)

function getNowDate(dateNull) {

    if (dateNull < 10) {

        dateNull = '0' + dateNull;

    }
    
    return dateNull;
    
}

let dateNow = new Date(),
    hours = dateNow.getHours(),
    minets = dateNow.getMinutes(),
    second = dateNow.getSeconds(),
    year = dateNow.getFullYear(),
    month = dateNow.getMonth() + 1,
    days = dateNow.getDate();
    
document.write(getNowDate(hours) + ':' + getNowDate(minets) + ':' + getNowDate(second) + ' ' + getNowDate(days) + '.' + getNowDate(month) + '.' + year);