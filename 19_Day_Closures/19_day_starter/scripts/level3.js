function personAccount() {
    let firstName = 'Aman'
    let lastName = 'nigatu'
    let income = {
        salary: 5000,
        overTime: 1200,
        partTime:2000
    }
    let expense = {
        rent: 2000,
        grossery: 1000,
        transport:500
    }
      // Add income
  function addIncome(description, amount) {
    income[description] = amount;
  }

  // Add expense
  function addExpense(description, amount) {
    expense[description] = amount;
  }
    function totalIncome() {
        return Object.values(income).reduce((sum,value)=>sum+value,0)
    }
    function totlaExpence() {
        return Object.values(expense).reduce((sum,value)=>sum+value,0)
    }
    function accountBalance() {
        return totalIncome()-totlaExpence()
    }
    function accountInfo() {
        let fullName = `${ firstName }`
        return fullName
        
    }
    return {
        incomesum:totalIncome(),
        expencesum: totlaExpence(),
        balance: accountBalance(),
       fullname:accountInfo()
    }
}
const totalIncomes = personAccount()
console.log(`Your total income is : ${totalIncomes.incomesum}`)
console.log(`Your Total expence is : ${totalIncomes.expencesum}`)
console.log(`Your Account Balance is : ${totalIncomes.balance}`)
console.log(`Your Account Info  : ${totalIncomes.accountInfo}`)
