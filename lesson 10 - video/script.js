'use strict';
// Наследование, прототипы, конструкторы и классы

/* ООП это методика, организация программы, структурирование кода, объединение сущности и
и методов в единой целое. Принцип ООП хорош тем, что обязывает программиста структурировать свой код.
JavaScript является прототипно ориентированым языком программирования.

Прототип это объект из которого текущий объект черпает не достающие методы и свойства.*/

let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(arr.__proto__ == Array.prototype);

let car = {
    doors: 4,
    turbocharging: false,
    ride: function () {

        console.log('Машина едет');

    }
};

/* метод Object.create() */

let newCar = Object.create(car);

newCar.model = 'mazda 3';

console.log('newCar: ', newCar);
console.log('newCar: ', newCar.doors);

console.log('newCar.hasOwnProperty: ', newCar.hasOwnProperty('model'));
console.log('newCar.hasOwnProperty: ', newCar.hasOwnProperty('doors'));

console.log('newCar.hasOwnProperty: ', newCar.__proto__.hasOwnProperty('model'));
console.log('newCar.hasOwnProperty: ', newCar.__proto__.hasOwnProperty('doors'));

console.log('car: ', car.isPrototypeOf(newCar));


/* Конструкторы */

/* Конструкторы это обычная функция, которая имеет локальные переменные и параметры и т.д.
Создана она для определенной цели. Она используется как описание какой-то сущности как инструкция у пазла. 
Эта функция вызывается когда начинаем собирать пазл, смотреть инструкцию и собирать его. 
Конечный результат, пазл который создали это и будет пораждением конструктора */

function Car () {
    this.model = 'Mazda';
}

let car1 = new Car();

console.log('car1: ', car1);

Car.prototype.ride = function () {
    console.log('Ехать');
};
car1.ride();
/* Оператор new - пораждает новый пустой объект, после вызывает функцию(Car),
прототип функции конструктора Car становится прототипом нового объекта. 
Новосозданый объект становится this для вызова конструктора, т.е. перенаправляет this на новосозданый объект.
Дальше возвращает на новосозданый объект и пристававивается к переменной car1.
Если объект создан через оператор new, то this будет указывать на этот объект.*/

let carTest = {
   model: 'Mazda'
};
console.log('carTest: ', carTest);



function Car2(model, color) {
    this.model = model;
    this.color = color;
}
let car2 = new Car2('Mazda','Red');
console.log('car2: ', car2);

/*  Классы ООП  */

/* ООП это подход к решению задачи, манипулируя объектами. Задача разбивается на объекты и с их помощью решается. 
А Класс это важная единица ООП. Самое простое описание класса, то что это абстрактная единица, описывающая объект. */

function Car3(brand, model, options) {
    this.brand = brand;
    this.model = model;
    options = options || {};
    this.color = options.color;
    this.transmission = options.transmission;
}

Car3.prototype.ride = function () {
    console.log(this.brand + ' ' + this.model + ' поехала!');
}

let car3 = new Car3 ('mazda', '3', {color: 'blue'});
let car4 = new Car3 ('BMW', 'Х3', {ABS: true});

console.log(car3);
console.log(car4);

car3.ride();
car4.ride();

/* Можно проверить является ли прототип Car объектом прототипа car3 */
console.log(Car3.prototype.isPrototypeOf(car3));

/* + существует оператор instanseOf */
console.log(car4 instanceof Car3);

/* Наследование классов */

function Car4(countryBuild, options) {
    this.countryBuild = countryBuild;
    options = options || {};
    this.color = options.color;
    this.transmission = options.transmission;
}

Car4.prototype.ride = function () {
    console.log(this.brand + ' ' + this.model + ' поехала!');
};

function Audi(countryBuild, options, model, type) {
    this.brand = 'Audi';
    Car4.apply(this, arguments);
    this.model = model;
    this.type = type;
}

Audi.prototype = Object.create(Car4.prototype); 
Audi.prototype.constructor = Audi;

let car_q7 = new Audi('germany', {color: 'red'}, 'Q7', 'S');
console.log(car_q7);

/* От кого наследуется */
console.log(car_q7 instanceof Audi);
console.log(car_q7 instanceof Car4);

car_q7.ride();


/* Наследование - это отношение между классами при котором класс использует структуру или поведение другого класса.
Это одиночное наследование или других классов - это множественное наследование.*/