const formBox = document.querySelector('#formBox');
const budgetBox = document.querySelector('#budgetBox');
const budgetInput = document.querySelector('.budgetInput');
const budgetSubmit = document.querySelector('.budgetSubmit');
const expenseBox = document.querySelector('#expenseBox');
const expenseInput = document.querySelector('.expenseInput');
const expenseType = document.querySelector('.expenseType');
const entertainmentType = document.querySelector('.entertainment');
const foodType = document.querySelector('.food');
const clothingType = document.querySelector('.clothing');
const billsType = document.querySelector('.bills');
const expenseSubmit = document.querySelector('.expenseSubmit');
const remainingBalance = document.querySelector('.remainingBalance');
const listBox  = document.querySelector('#listBox');


class Budget {
  constructor() {
    this.budget = 0;
    this.entertainment = 0;
    this.food = 0;
    this.clothing = 0;
    this.bills = 0;
    // this.amount =0;
  }

  setBudget(myBudget) {
      this.budget = myBudget;
  }

  purchase(expenseType, expenseInput) {
    if (expenseType === "entertainment") {
      this.entertainment += expenseInput;
      this.budget -= expenseInput;
    }
    else if (expenseType === "food") {
      this.food += expenseInput;
      this.budget -= expenseInput;
    }
    else if (expenseType === "clothing") {
      this.clothing += expenseInput;
      this.budget -= expenseInput;
    }
    else if (expenseType === "bills") {
      this.bills += expenseInput;
      this.budget -= expenseInput;
    }
  };
};

const budget = new Budget();

function addBudget(e){
    e.preventDefault();
    const formData = new FormData(budgetBox);
    // console.log(formData.get("budgetInput"));
    let myBudget = formData.get("budgetInput");
    budget.setBudget(Number(myBudget));
    console.log(budget);
    const span = document.querySelector('.budgetAmount');
    span.innerHTML = budget.budget;
};

function addExpense(e){
    e.preventDefault();
    const formData = new FormData(expenseBox);
    let expenseInputAmount = formData.get("expenseInput")
    let expenseInputType = formData.get("expenseType")
    budget.purchase(expenseInputType, Number(expenseInputAmount));
    console.log(budget);
    const remainingBalance = document.querySelector('.remainingBalance');
    remainingBalance.innerHTML = budget.budget;
    // remainingBalance.innerHTML = budgetInput.value - expenseInput.value;
}

budgetBox.addEventListener("submit", addBudget);
expenseBox.addEventListener('submit', addExpense);









