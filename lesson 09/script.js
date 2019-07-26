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
        allInput.forEach((item) => {
            item.setAttribute('disabled', 'disabled');
        });
        start.style.display = 'none';
        cancel.style.display = 'block';

        this.budget = +salaryAmount.value;
        
        

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();

        this.showResult();
        // this.wholeAppData();
        // this.getTargetMonth();
        // this.getStatusIncome();
        // this.getInfoDeposit();
        
    },
    reset: function () {

        let allInputreset = document.querySelectorAll('input[type="text"]');
        allInputreset.forEach((item) => {
            
            if (item.type == "text") {
                item.value = '';
                item.disabled = false;
            }

            periodSelect.value = 1;
            periodAmount.innerHTML = periodSelect.value;
           
        });

        depositCheck.checked = false;

    },
    showResult: function () {

        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.ceil(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSevedMoney();
        periodSelect.addEventListener('change', function () {
            incomePeriodValue.value = this.calcSevedMoney();
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

        expensesItems.forEach((item) => {
            
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== '') {
                this.expenses[itemExpenses] = cashExpenses;
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

        incomeItems.forEach((item) => {

            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;

            if (itemIncome !== '' && cashIncome !== '') {
                this.expenses[itemIncome] = cashIncome;
            }

        });

        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }

    },
    getAddExpenses: function () {

        let addExpenses = additionalExpensesItem.value.split(',');

        addExpenses.forEach((item) => {

            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
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

        additionalIncomeItem.forEach((item) => {

            let itemValue = item.value.trim();

            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }

        });

    },
    getExpensesMonth: function () {

        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }

    },
    getBudget: function () {

        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = this.budgetMonth / 30;

    },
    getTargetMonth: function () {

        return targetAmount.value / this.budget;

    },
    getStatusIncome: function () {

        if (this.budgetDay >= 800) {
            return ('Высокий');
        } else if (this.budgetDay >= 300 && this.budgetDay < 800) {
            return ('Средний');
        } else if (this.budgetDay < 300) {
            return ('Низкий');
        } else if (this.budgetDay >= 0) {
            return ('Что то пошло не так');
        }

    },
    getInfoDeposit: function () {

        if (this.deposit) {
            do {
                this.percentDeposit = prompt('Какой годовой процент?', '10');
                this.moneyDeposit = prompt('Какая сумма заложена?', 5000);
            }
            while (isNaN(this.percentDeposit) || this.percentDeposit === null || this.percentDeposit === '' || isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null)
        }

    },
    calcSevedMoney: function () {

        return this.budgetMonth * periodSelect.value;

    },
    wholeAppData: function () {

        for (let key in this) {
            console.log('Наша программа ' + key + ' включает в себя данные: ' + this[key]);
        }

    }
};

start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.reset.bind(appData));
buttonSecondPlus.addEventListener('click', appData.addExpensesBlock);
buttonFirstPlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', function () {
    periodAmount.innerHTML = periodSelect.value;
});
salaryAmount.addEventListener('keyup', appData.getSalaryAmount);