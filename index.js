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

const budgetBox = document.querySelector('#budgetbox');
const budgetInput = document.querySelector('#budgetInput');
const budgetSubmit = document.querySelector('#budgetSubmit');
const budget = document.querySelector('#budget');
const formBox = document.querySelector('#formbox');
const dropList = document.querySelector('#droplist')
const entertainment = document.querySelector('.entertainment')
const food = document.querySelector('.food')
const clothing = document.querySelector('.clothing')
const bills = document.querySelector('.bills')
const expenseInput = document.querySelector('#expenseInput');
const expenseSubmit = document.querySelector('#expenseSubmit');
const resultBox = document.querySelector('#resultbox');
const expenseList = document.querySelector('expenseList');
const remainder = document.querySelector('#remainder');


form.addEventListener('submit', event => {
  event.preventDefault();

  const span  = document.createElement('span')
  span.innerHTML = budgetInput.value;
  document.querySelector('#budget').innerHTML.value;
  console.log('budget');
});
