class Budget {
  constructor() {
    this.budget = 0;
    this.entertainment = [];
    this.food = [];
    this.clothing = [];
    this.bills = [];
  };
  
setBudget(myBudget) {
    if (myBudget <= 0) {
      alert("submit a 'budget amount'");
    }
    else if (myBudget >= 1){
      this.budget += myBudget;
    }
    else {
      this.budget = myBudget;
    }
  };

  purchase(expenseType, expenseInput) {
      if (this.budget - expenseInput < 0) {
        alert("error: overbudget");
      }
      else if (expenseInput <= 0) {
        alert("input an 'expense amount'");
      }
      else {
        this[expenseType].push(expenseInput);
        this.budget -= expenseInput;
        this.renderList(expenseType);
      };
  };

  renderList(type){
    const list = document.querySelector(`.${type}`);
    const data = this[type].map(expenseCost => `<li>$${expenseCost}</li>`);
    list.innerHTML = data.join('');
  
 
  // const sum = numbers.reduce(add)

    const expenseTotal = (accumulator, currentValue) => accumulator + currentValue;

    const span = document.querySelector(`.${type}-total`);
    // span.innerHTML = this[type].reduce(expenseTotal);
    span.innerHTML =  `$ ${this[type].reduce(expenseTotal)}`;
  };  

};

const budget = new Budget();



function addBudget(e){
  e.preventDefault();
  const budgetBox = document.querySelector('#budgetBox');
  const formData = new FormData(budgetBox);
  let myBudget = formData.get("budgetInput");
  budget.setBudget(Number(myBudget));
  console.log(budget);
  const p = document.querySelector('.budgetAmount');
  p.innerHTML = `budget: $${budget.budget}`;

  document.querySelector('#budgetBox').reset();
};

function addExpense(e){
  e.preventDefault();
  const expenseBox = document.querySelector('#expenseBox');
  const formData = new FormData(expenseBox);
  let expenseInputAmount = formData.get("expenseInput")
  let expenseInputType = formData.get("expenseType")
  budget.purchase(expenseInputType, Number(expenseInputAmount));
  console.log(budget);
  const remainingBalance = document.querySelector('.remainingBalance');
  remainingBalance.innerHTML = `balance: $${budget.budget}`;

  document.querySelector('#expenseBox').reset();
};

budgetBox.addEventListener('submit', addBudget);
expenseBox.addEventListener('submit', addExpense);

