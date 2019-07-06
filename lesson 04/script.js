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

addExpenses.split(', ');    

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

function getbudgetMonth() {
    let budgetMonth = money - howMuchCost1 - howMuchCost2;
    return budgetMonth;
}

function getExpensesMonth() {
    return howMuchCost1 + howMuchCost2;
}

let getAccumulatedMonth = function () {
    return money - getExpensesMonth();
};
let accumulatedMonth = getExpensesMonth();

function getTargetMonth() {
    let target = money / getExpensesMonth();
    return Math.floor(target);
}
getTargetMonth();


console.log('Сумма всех расходов за месяц:', getExpensesMonth());
console.log('Накопления за период:', getbudgetMonth());
console.log('Cрок достижения цели в месяцах:', getTargetMonth());