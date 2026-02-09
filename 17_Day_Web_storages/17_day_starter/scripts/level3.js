const personAccount = {
  firstName: 'Shiferaw',
  lastName: 'Nigatu',

  // incomes and expenses as objects (description: amount)
  incomes: {
    Salary: 3000,
    Freelance: 1200
  },

  expenses: {
    Rent: 1000,
    Food: 400,
    Internet: 100
  },

  // calculate total income
  totalIncome() {
    let total = 0
    for (const amount of Object.values(this.incomes)) {
      total += amount
    }
    return total
  },

  // calculate total expense
  totalExpense() {
    let total = 0
    for (const amount of Object.values(this.expenses)) {
      total += amount
    }
    return total
  },

  // add new income
  addIncome(description, amount) {
    this.incomes[description] = amount
  },

  // add new expense
  addExpense(description, amount) {
    this.expenses[description] = amount
  },

  // account balance
  accountBalance() {
    return this.totalIncome() - this.totalExpense()
  },

  // account information
  accountInfo() {
    return `
Account Holder: ${this.firstName} ${this.lastName}
Total Income: ${this.totalIncome()}
Total Expense: ${this.totalExpense()}
Account Balance: ${this.accountBalance()}
`
  }
}
console.log(personAccount.accountInfo())
