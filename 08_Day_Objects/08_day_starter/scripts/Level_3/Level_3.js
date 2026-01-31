const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: [
    { amount: 5000, description: "Salary" },
    { amount: 200, description: "Freelance" }
  ],
  expenses: [
    { amount: 1500, description: "Rent" },
    { amount: 200, description: "Groceries" }
  ],

  // Calculate total income
  totalIncome: function() {
    return this.incomes.reduce((sum, income) => sum + income.amount, 0);
  },

  // Calculate total expenses
  totalExpense: function() {
    return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  },

  // Display account information
  accountInfo: function() {
    return `${this.firstName} ${this.lastName} has a total income of $${this.totalIncome()} and total expenses of $${this.totalExpense()}.`;
  },

  // Add a new income
  addIncome: function(amount, description) {
    this.incomes.push({ amount, description });
  },

  // Add a new expense
  addExpense: function(amount, description) {
    this.expenses.push({ amount, description });
  },

  // Calculate account balance
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};

// Example usage:
console.log(personAccount.accountInfo());  // John Doe has a total income of $5200 and total expenses of $1700.
personAccount.addIncome(300, "Bonus");
personAccount.addExpense(100, "Utilities");
console.log("Balance:", personAccount.accountBalance()); // Balance: 3700
