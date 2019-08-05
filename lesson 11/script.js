'use strict';

const start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    buttonFirstPlus = document.getElementsByTagName('button')[0],
    buttonSecondPlus = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    depositBank = document.querySelector('.deposit-bank'),
    depositPercent = document.querySelector('.deposit-percent'),
    depositAmount = document.querySelector('.deposit-amount'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    targetAmount = document.querySelector('.target-amount'),
    targetMonthValue = document.querySelector('.target_month-value'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');

let incomeItems = document.querySelectorAll('.income-items'),
    expensesItems = document.querySelectorAll('.expenses-items');

const appData = {
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
    getSalaryAmount: () => {

        if (salaryAmount.value !== '') {
            start.removeAttribute('disabled', 'disabled');
        }

    },
    start () {

        if (salaryAmount.value === '') {
            start.setAttribute('disabled', 'disabled');
            return;
        }

        const allInput = document.querySelectorAll('.data input[type="text"]');
        allInput.forEach((item) => {
            item.setAttribute('disabled', 'disabled');
        });
        start.style.display = 'none';
        cancel.style.display = 'block';

        this.budget = +salaryAmount.value;
        
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getInfoDeposit();
        this.getBudget();
        this.getAddExpenses();
        this.getAddIncome(); 
        this.showResult();
        // this.wholeAppData();
        // this.getTargetMonth();
        // this.getStatusIncome();
        // this.getInfoDeposit();
        
    },
    reset: () => {

        const allInputReset = document.querySelectorAll('input[type="text"]');
        allInputReset.forEach((item) => {
            
            if (item.type == "text") {
                item.value = '';
                item.disabled = false;
            }

            periodSelect.value = 1;
            periodAmount.innerHTML = periodSelect.value;
           
        });

        depositCheck.checked = false;

        start.style.display = 'block';
        cancel.style.display = 'none';

        for (let i = 1; i < incomeItems.length; i++) {
            incomeItems[i].parentNode.removeChild(incomeItems[i]);
        }
        for (let i = 1; i < expensesItems.length; i++) {
            expensesItems[i].parentNode.removeChild(expensesItems[i]);
        }

        buttonFirstPlus.style.display = 'block';
        buttonSecondPlus.style.display = 'block';

    },
    showResult () {

        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.ceil(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSevedMoney();

        periodSelect.addEventListener('change', function () {
            incomePeriodValue.value = appData.calcSevedMoney();
        });

    },
    addExpensesBlock: () => {

        const cloneexpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneexpensesItem, buttonSecondPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3) {
            buttonSecondPlus.style.display = 'none';
        }
        
    },
    getExpenses () {

        expensesItems.forEach((item) => {
            
            const itemExpenses = item.querySelector('.expenses-title').value;
            const cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== '') {
                this.expenses[itemExpenses] = cashExpenses;
            }

        });
        
    },
    addIncomeBlock: () => {

        const cloneincomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneincomeItems, buttonFirstPlus);
        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            buttonFirstPlus.style.display = 'none';
        }

    },
    getIncome () {

        incomeItems.forEach((item) => {

            const itemIncome = item.querySelector('.income-title').value;
            const cashIncome = item.querySelector('.income-amount').value;

            if (itemIncome !== '' && cashIncome !== '') {
                this.expenses[itemIncome] = cashIncome;
            }

        });

        for (const key in this.income) {
            this.incomeMonth += +this.income[key];
        }

    },
    getAddExpenses () {
        
        const addExpenses = additionalExpensesItem.value.split(',');

        addExpenses.forEach((item) => {

            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            }

        });

    },
    getAddIncome () {

        additionalIncomeItem.forEach((item) => {

            const itemValue = item.value.trim();

            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }

        });

    },
    getExpensesMonth () {

        for (const key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }

    },
    getBudget () {

        this.budgetMonth = this.budget + this.incomeMonth - 
        this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
        this.budgetDay = this.budgetMonth / 30;

    },
    getTargetMonth () {

        return targetAmount.value / this.budget;

    },
    getStatusIncome () {

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
    getInfoDeposit () {

        if (this.deposit) {
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
        }

    },
    calcSevedMoney () {

        return this.budgetMonth * periodSelect.value;

    },
    wholeAppData () {

        for (const key in this) {
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

depositCheck.addEventListener('change', function () {

    if (depositCheck.checked) {
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        appData.deposit = 'true';
        depositBank.addEventListener('change', function () {
            const selectIndex = this.options[this.selectedIndex].value;
            if (selectIndex === 'other') {
                depositPercent.style.display = 'inline-block';
                depositPercent.value = '';
            } else {
                depositPercent.style.display = 'none';
                depositPercent.value = selectIndex;
            }
        });
    } else {
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositAmount.value = '';
        appData.deposit = 'false';
    }

});

salaryAmount.addEventListener('keyup', appData.getSalaryAmount);