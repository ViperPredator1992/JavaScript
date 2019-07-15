'use strict';

let money,
    start = function () {

        do {
            money = prompt('Ваш месячный доход?', 10000);
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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking: function () {

        if (confirm('Есть ли у вас дополнительный источник заработка?')) {

            for (let i = 0; i < 1; i++) {

                let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую'),
                    cashIncome;

                if (isNaN(itemIncome) && itemIncome != null && itemIncome != '') {

                    do {

                        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 5000);

                    }
                    while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);

                    appData.income[itemIncome] = cashIncome;

                } else {
                    i = i - 1;
                }

            }

        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'налоги1, налоги2, налоги3');
        appData.addExpenses = addExpenses.split(',');
        
        let expensesArray = [];

        for (let key in appData.addExpenses) {

            let possibleExpenses = appData.addExpenses[key];
            possibleExpenses = possibleExpenses.trim();
            possibleExpenses = possibleExpenses.charAt(0).toUpperCase() + possibleExpenses.substring(1).toLowerCase();
            expensesArray.push(possibleExpenses);

        }

        expensesArray.join(', ');

        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {

            let requiredMonthlyExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'налоги'),
                cost;

            if (isNaN(requiredMonthlyExpenses) && requiredMonthlyExpenses != null && requiredMonthlyExpenses != '') {
            
                do {

                    cost = prompt('Во сколько это обойдется?', 605);

                }
                while (isNaN(cost) || cost === '' || cost === null);

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
    getInfoDeposit: function () {
        
        if (appData.deposit) {

            do {

                appData.percentDeposit = prompt('Какой годовой процент?', '10');
                appData.moneyDeposit = prompt('Какая сумма заложена?', 5000);

            }
            while (isNaN(appData.percentDeposit) || appData.percentDeposit === null || appData.percentDeposit === '' || isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null)

        }

    },
    calcSevedMoney: function () {

        return appData.budgetMonth * appData.period;
        
    },
    getConsoleLog: function () {

        console.log('Расходы за месяц:', appData.expensesMonth);
        console.log(appData.getTargetMonth());
        console.log('Уровень дохода -', appData.getStatusIncome());
        
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
appData.getExpensesMonth();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.getConsoleLog();   