'use strict';

let money = +prompt('Ваш месячный доход?', ''),
    //addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''),
    //deposit = confirm('Есть ли у вас депозит в банке?'),
    //requiredMonthlyExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    howMuchCost1 = +prompt('Во сколько это обойдется?', ''),
    //requiredMonthlyExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    howMuchCost2 = +prompt('Во сколько это обойдется?', ''),
    income = 'Фриланс',
    budgetMonth = money - howMuchCost1 - howMuchCost2,
    mission = 65400,
    budgetDay = budgetMonth / 30;

    if (budgetDay >= 800) {
        console.log('Высокий уровень дохода');
    } else if (budgetDay >= 300 && budgetDay < 800) {
        console.log('Средний уровень дохода');
    } else if (budgetDay >= 0 && budgetDay < 300) {
        console.log('Низкий уровень дохода');
    } else {
        console.log('Что то пошло не так');
    }

function getExpensesMonth() {
    return howMuchCost1 + howMuchCost2;
}
console.log('Сумма всех расходов за месяц:', getExpensesMonth());

let getAccumulatedMonth = function () {
    let accumulatedMonth = money - howMuchCost1 - howMuchCost2;
    return accumulatedMonth;
};
console.log('Накопления за месяц:', getAccumulatedMonth());

function getTargetMonth() {
    let target = mission / getExpensesMonth();
    return Math.ceil(target);
}
console.log(getTargetMonth());


console.log(money);
// console.log(addExpenses.split(', '));
// console.log(deposit);
// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);
// console.log(requiredMonthlyExpenses1);
// console.log(requiredMonthlyExpenses2);
// console.log(howMuchCost1);
// console.log(howMuchCost2);
//console.log(budgetMonth);
// console.log(Math.ceil(target));
// console.log(Math.floor(budgetDay));