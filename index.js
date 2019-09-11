// class Budget {
//   constructor(total) {
//     this.total = total;
//     this.entertainment = 0;
//     this.food = 0;
//     this.clothing = 0;
//     this.bills = 0;
//     // this.amount =0;
//   }
//
//   purchase(category, amount) {
//     if (category === "entertainment") {
//       this.entertainment += amount;
//       this.total -= amount;
//     }
//     else if (category === "food") {
//       this.food += amount;
//       this.total -= amount;
//     }
//     else if (category === "clothing") {
//       this.clothing += amount;
//       this.total -= amount;
//     }
//     else if (category === "bills") {
//       this.bills += amount;
//       this.total -= amount;
//     }
//   };
// };
//
// const budget = new Budget(900);
//
// budget.purchase('entertainment', 60);
//
// console.log(budget);






// class UI {
//   constructor(){
//     this.formBox = document.querySelector('#formBox');
//
//     this.budgetFeedback = document.querySelector('.budgetFeedback');
//     this.budgetBox = document.querySelector('#budgetBox');
//     this.budgetInput = document.querySelector('.budgetInput');
//     this.budgetSubmit = document.querySelector('.budgetSubmit');
//     this.budgetAmount = document.querySelector('.budgetAmount');
//
//     this.expenseBox = document.querySelector('#expenseBox');
//     this.expenseInput = document.querySelector('.expenseInput');
//     this.expenseType = document.querySelector('.expenseType');
//     this.entertainmentType = document.querySelector('.entertainment');
//     this.foodType = document.querySelector('.food');
//     this.clothingType = document.querySelector('.clothing');
//     this.billsType = document.querySelector('.bills');
//     this.expenseSubmit = document.querySelector('.expenseSubmit');
//     this.remainingBalance = document.querySelector('.remainingBalance');
//
//     this.listBox  = document.querySelector('#listBox');
//     this.itemList = [];
//     this.itemID = 0;
//   };
// };






const formBox = document.querySelector('#formBox');

const budgetBox = document.querySelector('#budgetBox');
const budgetInput = document.querySelector('.budgetInput');
const budgetSubmit = document.querySelector('.budgetSubmit');
const budgetAmount = document.querySelector('.budgetAmount');

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
