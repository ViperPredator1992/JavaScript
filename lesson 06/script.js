'use strict';

let money,
    requiredMonthlyExpenses,
    cost,
    start = function () {

        do {
            money = prompt('Ваш месячный доход?', '5000');
        }
        while (isNaN(money) || money == '' || money == null);

    };
start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function () {

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'налоги, налоги, налоги');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {

            requiredMonthlyExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'налоги');
            cost = prompt('Во сколько это обойдется?', '605');

            if ((typeof (requiredMonthlyExpenses)) === 'string' && requiredMonthlyExpenses != null && requiredMonthlyExpenses != '' && cost != '' && cost != null) {
                appData.expenses[requiredMonthlyExpenses] = cost;
            } else {
                i = i - 1;
            }

        }

    },
    getExpensesMonth: function () {

        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }

    },
    getBudget: function () {

        appData.budgetMonth = Math.floor(money - appData.budgetMonth);
        appData.budgetDay = appData.budgetMonth / 30;
        return money - appData.expensesMonth;

    },
    getTargetMonth: function () {

        let target = appData.mission / money;
        target = Math.ceil(target);

        if (target > 0) {
            return ('Цель будет достигнута через ' + target + ' месяцев');
        } else {
            return ('Цель не будет достигнута');
        }

    },
    getStatusIncome: function () {

        if (appData.budgetDay >= 800) {
            return ('Высокий');
        } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
            return ('Средний');
        } else if (appData.budgetDay < 300) {
            return ('Низкий');
        } else if (appData.budgetDay >= 0) {
            return ('Что то пошло не так');
        }

    },
    consolLog: function () {
        
        console.log('Расходы за месяц:', appData.expensesMonth);
        console.log(targetMonth);
        console.log('Уровень дохода -', statusIncome);

    },
    wholeAppData: function () {

        for (let key in appData) {
            console.log('Наша программа ' + key + ' включает в себя данные: ' + appData[key]);
        }

    }
};

appData.asking();
appData.getBudget();
appData.wholeAppData();

let expensesMonth = appData.getExpensesMonth(),
    targetMonth = appData.getTargetMonth(),
    statusIncome = appData.getStatusIncome(),
    consol = appData.consolLog();