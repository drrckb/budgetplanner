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
const enetertainmentList = document.querySelector('.entertainment');
const foodList = document.querySelector('.food');
const clothingList = document.querySelector('.clothing');
const billsList = document.querySelector('.bills');



class Budget {
  constructor() {
    this.budget = 0;
    this.entertainment = [];
    this.food = [];
    this.clothing = [];
    this.bills = [];
  };

  setBudget(myBudget) {
    this.budget = myBudget;
  };

  purchase(expenseType, expenseInput) {
      if (this.budget - expenseInput < 0){
        alert('You are going to spend more than your budget.');
      } else {
        this[expenseType].push(expenseInput);
        this.budget -= expenseInput;

        this.renderList(expenseType);
      };
  };

  renderList(type){
    const list = document.querySelector(`.${type}`);

    list.innerHTML = this[type].map(expenseCost => `<li>${expenseCost}</li>`);
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
  };

  function addListItem(e){
    e.preventDefault();
    const enetertainmentItem = document.createElement('li');
    entertainmentItem.innerHTML = expenseInput.value;
  };



budgetBox.addEventListener('submit', addBudget);
expenseBox.addEventListener('submit', addExpense);
listBox.addEventListener('submit', addListItem);
