'use strict';

let money,
start = function () {
    do {
        money = prompt('Ваш месячный доход?', '');
        console.log(money);
    }
    while (isNaN(money) || money == '' || money == null);
};
start();

let income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 50000,
    period = 10,
    budgetMonth,
    requiredMonthlyExpenses1,
    requiredMonthlyExpenses2;

addExpenses.split(', ');

let showTypeof = function (item) {
    console.log(item, typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

function getExpensesMonth() {
    let sum = 0, cost;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            requiredMonthlyExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', '');
        } else if (i === 1) {
            requiredMonthlyExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', '');  
        }

        do {
            cost = prompt('Ваш месячный доход?', '');
        }
        while (isNaN(cost) || cost === '' || cost === null);
        sum += +cost;
    }
    return sum;
}
let howMuchCost = getExpensesMonth();

let getAccumulatedMonth = function () {
    return money - howMuchCost;
};
let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    let target = mission / accumulatedMonth;
    target = Math.floor(target);
    if (target >= 0) {
        return('Цель будет достигнута');
    } else {
        return('Цель не будет достигнута'); 
    }
    //return Math.floor(target);
}
let targetMonth = getTargetMonth();

let budgetDay = budgetMonth / 30;
function getStatusIncome() {
    if (budgetDay >= 800) {
        return ('Высокий');
    } else if (budgetDay >= 300 && budgetDay < 800) {
        return ('Средний');
    } else if (budgetDay < 300) {
        return ('Низкий');
    } else if (budgetDay >= 0){
        return ('Что то пошло не так');
    }
}


console.log('Уровень дохода:', budgetDay);
console.log('Сумма всех расходов за месяц:', howMuchCost);
console.log('Накопления за период:', budgetMonth);
console.log('Cрок достижения цели в месяцах:', targetMonth);