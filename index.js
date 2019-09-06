class Budget {
  constructor(total) {
    this.total = total;
    this.entertainment = 0;
    this.food = 0;
    this.clothing = 0;
    this.bills = 0;
    // this.amount =0;
  }

  purchase(category, amount) {
    if (category === "entertainment") {
      this.entertainment += amount;
      this.total -= amount;
    }
    else if (category === "food") {
      this.food += amount;
      this.total -= amount;
    }
    else if (category === "clothing") {
      this.clothing += amount;
      this.total -= amount;
    }
    else if (category === "bills") {
      this.bills += amount;
      this.total -= amount;
    }
  };
};

const budget = new Budget(900);

budget.purchase('entertainment', 60);

console.log(budget);
