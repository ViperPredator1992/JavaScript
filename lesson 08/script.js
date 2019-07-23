'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    buttonFirstPlus = document.getElementsByTagName('button')[0],
    buttonSecondPlus = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeItems = document.querySelectorAll('.income-items'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    targetAmount = document.querySelector('.target-amount'),
    targetMonthValue = document.querySelector('.target_month-value'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    getSalaryAmount: function () {

        if (salaryAmount.value !== '') {
            start.removeAttribute('disabled', 'disabled');
        }

    },
    start: function () {

        if (salaryAmount.value === '') {
            start.setAttribute('disabled', 'disabled');
            return;
        }

        let allInput = document.querySelectorAll('.data input[type="text"]');
        allInput.forEach(function (item) {
            item.setAttribute('disabled', 'disabled');
        });
        start.style.display = 'none';
        cancel.style.display = 'block';

        appData.budget = +salaryAmount.value;
        
        appData.getExpenses(); 
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome(); 
        appData.getBudget();

        appData.showResult();
        // appData.wholeAppData();
        // appData.getTargetMonth();
        // appData.getStatusIncome();
        // appData.getInfoDeposit();
        // appData.getConsoleLog();

    },
    showResult: function () {
        
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.ceil(appData.budgetDay);
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcSevedMoney(); 
        periodSelect.addEventListener('change', function () {
            incomePeriodValue.value = appData.calcSevedMoney();
        });

    },
    addExpensesBlock: function () {
        
        let cloneexpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneexpensesItem, buttonSecondPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3) {
            buttonSecondPlus.style.display = 'none';
        }

    },
    getExpenses: function () {
        
        expensesItems.forEach (function (item) {

            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }

        });

    },
    addIncomeBlock: function () {

        let cloneincomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneincomeItems, buttonFirstPlus);
        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            buttonFirstPlus.style.display = 'none';
        }

    },
    getIncome: function () {

        incomeItems.forEach (function (item) {

            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;

            if (itemIncome !== '' && cashIncome !== '') {
                appData.expenses[itemIncome] = cashIncome;
            }

        });

        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }
         
    },
    getAddExpenses: function () {
        
        let addExpenses = additionalExpensesItem.value.split(',');

        addExpenses.forEach (function (item) {

            item = item.trim();
            if (item !== '') {  
                appData.addExpenses.push(item);
            }

        });

    },
    asking: function () {

        let expensesArray = [];

        for (let key in appData.addExpenses) {

            let possibleExpenses = appData.addExpenses[key];
            possibleExpenses = possibleExpenses.trim();
            possibleExpenses = possibleExpenses.charAt(0).toUpperCase() + possibleExpenses.substring(1).toLowerCase();
            expensesArray.push(possibleExpenses);

        }

        expensesArray.join(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

    },
    getAddIncome: function () {
        
        additionalIncomeItem.forEach(function (item) {

             let itemValue = item.value.trim();

             if (itemValue !== '') {
                 appData.addIncome.push(itemValue);
             }

        });

    },
    getExpensesMonth: function () {

        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }

    },
    getBudget: function () {

        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;

    },
    getTargetMonth: function () {

        return targetAmount.value / appData.budget;

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
    
        return appData.budgetMonth * periodSelect.value;

    },
    wholeAppData: function () {
        
        for (let key in appData) {
            console.log('Наша программа ' + key + ' включает в себя данные: ' + appData[key]);
        }
        
    },
    getConsoleLog: function () {

        console.log('Расходы за месяц:', appData.expensesMonth);
        console.log('Уровень дохода -', appData.getStatusIncome());

    }
};


start.addEventListener('click', appData.start);
buttonSecondPlus.addEventListener('click', appData.addExpensesBlock);
buttonFirstPlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', function () {
    periodAmount.innerHTML = periodSelect.value;
});
salaryAmount.addEventListener('keyup', appData.getSalaryAmount);