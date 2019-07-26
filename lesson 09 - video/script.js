//'use strict';

// Контекст вызова - this

console.log(this);

/* this - это ключевое слово. 
Вообще this это ссылка на какой-то объект. this - всегда ссылается на объект. 
Во время функции создается правило активации, именно во время вызова! Не во время чтения её интерпритатором.
Создается запись активация, которая содержит информацию - от куда вызвана функция, как вызвана, какие параметры переданы и т.д.
Одно из свойств я вляется ссылка this, которая будет использоватся на протяжении выполнения этой функции.
У this есть 4 поведения или по другому - правила. Чтобы понять this, надо понимать, что такое call stek(стек вызова функции) и call site(место вызова функции).*/
// Пример что такое call site

function one() {

    console.log('one');
    two();

}

function two() {

    console.log('two');
    three();

}

function three() {

    console.log('three');

}

one();

/* 4 Правила про this */

// 1. Привязка по умолчанию - foo();
// 2. Не явная привязка - obj.foo();
// 3. Явная привязка apply, call, bind
// 4. Привязка new

/* Правило 1 - привязка по умолчанию */

function test() {
    console.log('Hello', this);
}
test();

// без 'use strict';
a = 10; // или var 
function test2() {
    console.log('Hello', this.a);
}
test2();

/* Как понять, что this ссылается на глобальный объект? 
Если функция вызывается без точки( test2(); ), т.е. не как метод, тогда this будет window!
Даже если внутри функции, задать функцию то мы получим глобальный объект window.
this - не как не связан с областями видимости.
*/

a = 10; // или var 

function test2() {

    console.log('Hello', this.a);

    function test3() {
        console.log('Hello', this);
    }
    test3();

}
test2();

/* Правило 2 - Не явная привязка */

// Когда мы указываем объект(window) и его метод(test4();)  
// Пример ниже: строка 82 - 87 

function test4() {

    console.log('Hello', this);

}
window.test4();

// Давайте это сделаем на другом примере, строка 92 

let odj = { //odj будет у нас объектом
    //  В объекте будет 3 свойства
    x: 10,
    y: 15,
    test: function () {
        // Метод с функцией, который будет выводить this
        console.log('this 1: ', this);
    }
};
// Теперь чтобы вызвать функцию test, необходимо обратится к объекту и через точку к методу test
odj.test();
// Стоит обратить внимание - не важно где она описана и как /* test: function () {console.log(this);} */,
// Главное где она вызывается! Важен момент вызова!

// Пример с вызовом внешней функции
let odj2 = {
    x: 10,
    y: 15,
    test: newTest // Таким методом - this будет именно этот объект - odj2
};

function newTest() {
    console.log('this 2: ', this);
}

odj2.test();
// newTest(); // Но если newTest() вызвать отдельно, то this это будет Window - глобальный объект.
// Необходимо понять, что наш this(который в console.log) будет указываться на объект(odj2), 
// через который вызвали функцию. Т.е. важно где мы вызвали функцию, а не где мы ее привязали!

// Пример по сложнее, если есть два объекта

let odj3 = {
    x: 10,
    y: 15,
    test: newTest2 
};

let odj4 = {
    x: 10,
    y: 15,
    testOdj: odj3
};

function newTest2() {
    console.log('this 3: ', this.x);
}

odj3.test();
odj4.testOdj.test();

// Как потерять привязку к this
let odj5 = {
    x: 10,
    y: 15,
    test: newTest3 
};

let foo = odj5.test;

function newTest3() {
    console.log('this 4: ', this);
}

foo();

// Если мы хотим привязать функцию как callback, то тоже произойдет привязка по умолчанию
// Пример

let odj6 = {
    x: 10,
    y: 15,
    test: newTest4
};

function foo2(callback) {
    callback();
}

function newTest4() {
    console.log('this 5: ', this);
}

foo2(odj6.test);

// Также это будет работать на встроенных функциях, например setTimeOut

let odj7 = {
    x: 10,
    y: 15,
    test: newTest5
};

function foo3(callback) {
    callback();
}

function newTest5() {
    console.log('this 6: ', this);
}

setTimeout(odj7.test, 100);


/* 3. Явная привязка */
// Есть объект с двумя свойствами и функция newTest6 (сейчас этот объект и функция никак не связаны)
// Явная привязка существует для того чтобы использовать "конкретный" объект при вызове функции
// Для этого существуют методы функции apply() и call()

let odj8 = {
    x: 10,
    y: 15
};

function newTest6() {
    console.log('this 7: ', this);
}
// apply() - первым параметром принимает объект, тот который мы хотим привязать к контексту вызова this
// этот метод принимает массив аргументов, которые будут разобранные и переданы в функцию, которую мы вызываем
newTest6.apply(odj8);

// call() - первым параметром принимает объект, тот который мы хотим привязать к контексту вызова this
// этот метод принимает сколько угодно параметров через запятую
newTest6.call(odj8);


/* 4. Жесткая привязка */

// Когда мы создаем функцию и внутри неё применяем call() или apply()
let odj9 = {
    x: 10,
    y: 15
};

function newTest7() {
    console.log('this 8: ', this);
}

function hardBind() {
    newTest7.call(odj9);
}
// когда будет вызыватся функция hardBind, 
// то на самом деле будет вызыватся функция - newTest7.call(odj9); с привязанным объектом.
// т.е. в таком случае контекст уже привязан. 
hardBind(); 

// В качестве параметра можно передать какой-нибудь объект
let odj10 = {
    x: 10,
    y: 15
};

function newTest7() {
    console.log('this 9: ', this);
}

function hardBind2(hard) {
    newTest7.call(hard);
}

hardBind2(odj10);
setTimeout(hardBind2, 800, odj10);

// В ES5 появился новый метод bind();
// Он также привязывает контекст к объекту, но он его не вызывает

let odj11 = {
    x: 10,
    y: 15
};

function newTest8() {
    console.log('this 10: ', this);
}

// Т.е. передать первым параметром объект, который будет привязан к newTest8
let foo4 = newTest8.bind(odj11);

// и теперь при вызове функции foo4(); мы будем получать объект
foo4();