'use strict';

let money = prompt('Ваш месячный доход?', ''),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    requiredMonthlyExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    requiredMonthlyExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    howMuchCost1 = prompt('Во сколько это обойдется?', ''),
    howMuchCost2 = prompt('Во сколько это обойдется?', '');
    
console.log(money);
console.log(addExpenses.split(', '));
console.log(deposit);
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(requiredMonthlyExpenses1);
console.log(requiredMonthlyExpenses2);
console.log(howMuchCost1);
console.log(howMuchCost2);
