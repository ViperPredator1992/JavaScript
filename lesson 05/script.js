'use strict';

let money,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    requiredMonthlyExpenses1,
    requiredMonthlyExpenses2,
    income = 'Фриланс',
    period = 10,
    mission = 65400;

addExpenses.split(', ');

let start = function () {
    money = prompt('Ваш месячный доход?', '');
    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш месячный доход?', '');
        console.log(money);
    }
};
start();

let showTypeof = function (item) {
    console.log(item, typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let budgetDay = getbudgetMonth() / 30;

function getStatusIncome() {
    if (budgetDay >= 800) {
        return ('Высокий');
    } else if (budgetDay >= 300 && budgetDay < 800) {
        return ('Средний');
    } else if (budgetDay >= 0 && budgetDay < 300) {
        return ('Низкий');
    } else {
        return ('Что то пошло не так');
    }
}

function getExpensesMonth() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            requiredMonthlyExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', '');
        } else if (i === 1) {
            requiredMonthlyExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', '');
        }
        sum += +prompt('Во сколько это обойдется?', '');
    }
    return sum;
}
let howMuchCost = getExpensesMonth();

let getAccumulatedMonth = function () {
    return money - (howMuchCost);
};
let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    let target = mission / accumulatedMonth;
    return Math.floor(target);
}
getTargetMonth();


console.log('Сумма всех расходов за месяц:', getExpensesMonth());
console.log('Накопления за период:', getbudgetMonth());
console.log('Cрок достижения цели в месяцах:', getTargetMonth());