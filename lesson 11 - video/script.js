'use strict';
/* Особенности современного стандарта ES6.
Интерполяция. Деструктуризация.
Новый синтаксис */

// for (let i = 0; i < 5; i++) {
    
//     setTimeout(() => {
//         console.log(i);
//     }, 1000*i);

// }

/* Урок 1 */
// Шаблонные строки

const str = "Двойные кавычки";
const str2 = 'Одинарные \nкавычки';
console.log(str2);
const newStr = `Обратные кавычки`;
console.log(newStr);

// Старая конструкция
const str3 = '<h1>Hello</h1> \n' + 
             '<div>World</div>';
console.log(str3);

// Новая конструкция
const newStr2 = `<h1>Hello</h1>
<div>World</div>`;
console.log(newStr2);

const name = 'Alex',
age = 30;
// Старая конструкция
const str4 = '<h1>Hello</h1> \n' + 
    '<div>' + name + '</div> \n' + 
    '<div>' + (age + 1) + '</div>';
console.log(str4);

// Новая конструкция
const newStr3 = `<h1>Hello</h1>
<div>${name}</div>
<div>${age + 1}</div>`;
console.log(newStr3);


const createHome = function (wall, doors, window) {
    
    console.log(`Дом имеет:
    стен: ${wall}
    двери: ${doors}
    окна ${window}`);
    
};
createHome(4, 2, 1);

const createHome2 = function ( wall = 4, doors = 1, window = 2 ) {
    
    console.log(`Дом имеет:
    стен: ${wall}
    двери: ${doors}
    окна ${window}`);
    
};
createHome();

/* Стрелочные функции */

const sum = (a, b) => {
    return a + b;
};
console.log('sum(2, 3) =', sum(2, 3));

const sum2 = (a2, b2) => a2 + b2;
console.log('sum(2, 3) =', sum2(2, 3));

const sum3 = (a3, b3) => ({
    a3: a3,
    b3: b3,
    sum: a3 + b3
});
console.log(sum3(2, 4));

/* Урок 2 */

// Rest - ...arr. Параметр должен быть всегда последний
function test (a, b, c, ...arr) {
    
    console.log(a, b, c);
    console.log(arr);
    
}
test('red', 5, 12, 'black', [], true, 9);

// Spread оператоор

const arr2 = ['red', 5, 12];

function test2(a, b, c) {

    console.log(a, b, c);

}
// по старинке
//test2(arr2[0], arr2[1], arr2[2]);
// по новому
test2(...arr2);

const arr3 = ['red', 5, 12];
const arr4 = ['black', true];

function test3(a, b, c, d, e) {

    console.log(a, b, c);
    console.log(d, e);

}
test3(...arr3, 50, ...arr4);


/* Из нескольких операторов собрать один */

const arr5 = [...arr3, 50, ...arr4];
console.log('arr5:', arr5);

/* Деструктуризация */

const car = {
    brand: 'mazda',
    model: 3,
    color: 'red'
};
// раньше писали
// const brand = car.brand;
// const model = car.model;
// const color = car.color;

const {brand, model, color} = car;
console.log(brand, model, color);

/* если у объекта вложенная структура */
const car2 = {
    brand: 'mazda',
    model: 3,
    options: {
        color2: 'red',
        abs: true   
    }
};
const {options:{color2, abs}} = car2;
console.log(color2, abs);

/* Можно менять свойство объекта с помощью переменных */
const car3 = {
    brand: 'mazda',
    model: 3,
    options: {
        color3: 'red',
        abs3: true   
    }
};
const {options:{color3: carColor, abs3: carABS}} = car3;
console.log(carColor, carABS);

/* Значение по умолчанию */
const car4 = {
    brand4: 'mazda',
    //model4: 3,
    options: {
        color3: 'red',
        abs3: true   
    }
};
const {brand4, model4 = 6} = car4;
console.log(brand4, model4);

/* Значение по умолчанию c вложенностью */
const car5 = {
    brand: 'mazda',
    model: 3
};
const {options5: {color5 = 'red'} = {}} = car5;
console.log(color5);

/* Функция принимающая объект */
const createCar = (car) => {
    console.log(`
    Запущенно производство автомобиля ${car.brand6} ${car.model6}
    цвет кузова: ${car.color6}
    цвет салона: ${car.colorInt}`);
};
createCar({
    brand6: 'mazda',
    model6: 3,
    color6: 'red',
    colorInt: 'black'
});

/* Деструктуризация объекта */
const createCar2 = ({brand7, model7, color7, colorInt2}) => {
    console.log(`
    Запущенно производство автомобиля ${brand7} ${model7}
    цвет кузова: ${color7}
    цвет салона: ${colorInt2}`);
};
createCar2({
    brand7: 'mazda',
    model7: 3,
    color7: 'red',
    colorInt2: 'black'
});

/* Деструктуризация объекта со значением по умолчанию */
const createCar3 = ({
    brand8 = 'BMW', 
    model8 = 6, 
    color8 = 'black', 
    colorInt3 = 'white'
} = {}) => {
    console.log(`
    Запущенно производство автомобиля ${brand8} ${model8}
    цвет кузова: ${color8}
    цвет салона: ${colorInt3}`);
};
createCar3();

/* Рест объект */
const car9 = {
    brand9: 'mazda',
    model9: 3,
    options: {
        color3: 'red',
        abs3: true
    }
};
const { brand9, ...options } = car9;
console.log(options);

/* Деструктуризация массива */

const cars = ['mazda', 'audi', 'bmw', 'mercedes-benz', 'ЗИЛ'];
const [a, b, c] = cars;
console.log(a);
console.log(b);
console.log(c);

// Можно делать пропуски в массиве
const cars2 = ['mazda', 'audi', 'bmw', 'mercedes-benz', 'ЗИЛ'];
const [,a2,, b2, c2] = cars2;
console.log(a2);
console.log(b2);
console.log(c2);

// Многомерный массив
const cars3 = [['mazda', 'audi'], ['bmw', 'mercedes-benz'], 'ЗИЛ'];
const [a3, b3, c3] = cars3;
console.log(a3);
console.log(b3);
console.log(c3);

// Вложенный массив
const cars4 = [['mazda', 'audi'], ['bmw', 'mercedes-benz'], 'ЗИЛ'];
const [[a4, b4], [c4, d]] = cars4;
console.log(a4);
console.log(b4);
console.log(c4);

// Вложенный массив + значение по умолчанию
const cars5 = [['mazda', 'audi'], ['bmw', 'mercedes-benz']];
const [[a5, b5], [c5, d5], e5 = 'opel' ] = cars5;
console.log(a5);
console.log(b5);
console.log(c5);
console.log(d5);
console.log(e5);

// Рестровый массив + значение по умолчанию
const cars6 = [['mazda', 'audi'], ['bmw', 'mercedes-benz', 'opel2'], 'ЗИЛ'];
const [[a6, b6], [...c6], e6 = 'opel'] = cars6;
console.log(a6);
console.log(b6);
console.log(c6);
console.log(e6);

const carsModel = {
    brand10: 'Volvo',
    models: {
        sedan: ['s60', 's90'],
        cross: ['v60', 'v90']
    }
};
const { 
    models: {
        sedan: [s1, s2], 
        cross: [c1, c10]
    } 
} = carsModel;
console.log(s1, s2, c1, c10);


const car10 = 'bendley';
const cycle = 'bmx';
const bike = 'honda';
/* старый метод */
// const transport = {
//     car: car,
//     cycle: cycle,
//     bike: bike,
//     ride: function () {
//         console.log('GO');
//     }
// };

const transport = {
    car,
    cycle,
    bike,
    // ride() {
    //     //console.log(this);
    //     console.log('go');
    // }
    ride: () => {
        //console.log(this);
        console.log('go');
    }
};
transport.ride();
console.log(transport);


const transport2 = {
    bike: 'honda',
    car: 'bendley',
    cycle: 'bmx'
};
const newTransport2 = {
    bike: 'suzuki',
    quadeBike: 'polaris'
};

Object.assign(transport2, newTransport2)
console.log(transport2);
