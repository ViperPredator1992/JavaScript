'use strict';

let money = +prompt('Ваш месячный доход?', ''),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    requiredMonthlyExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    howMuchCost1 = +prompt('Во сколько это обойдется?', ''),
    requiredMonthlyExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    howMuchCost2 = +prompt('Во сколько это обойдется?', ''),
    income = 'Фриланс',
    period = 10,
    mission = 65400;

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
console.log('Какой уровень дохода:', getStatusIncome());

function getbudgetMonth() {
    let budgetMonth = money - howMuchCost1 - howMuchCost2;
    return budgetMonth;
}
console.log('Накопления за период:', getbudgetMonth());

function getExpensesMonth() {
    return howMuchCost1 + howMuchCost2;
}
console.log('Сумма всех расходов за месяц:', getExpensesMonth());

let getAccumulatedMonth = function () {
    return money - getExpensesMonth();
};
let accumulatedMonth = getExpensesMonth();
console.log('Накопления за месяц:', getAccumulatedMonth());

function getTargetMonth() {
    let target = mission / getExpensesMonth();
    return Math.ceil(target);
}
console.log(getTargetMonth());

function getTargetMonth() {
    let target = mission * getExpensesMonth();
    return Math.floor(target);
}
console.log(getTargetMonth());


console.log(money);
console.log(addExpenses.split(', '));
console.log(deposit);
console.log(requiredMonthlyExpenses1);
console.log(requiredMonthlyExpenses2);
console.log(howMuchCost1);
console.log(howMuchCost2);
//console.log(Math.ceil(target));
console.log(Math.floor(budgetDay));