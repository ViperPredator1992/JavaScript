let money = 155255,
    income = 'фриланс',
    addExpenses = 'прогулка, комунальные услуги, уроки JS, уроки OpenCart',
    deposit = true,
    mission = 90000000,
    period = 10,
    budgetDay = money / 30;
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log(addExpenses.split(', '));
console.log(mission);
console.log(period);
console.log(budgetDay);
console.log(budgetDay = money % 30);