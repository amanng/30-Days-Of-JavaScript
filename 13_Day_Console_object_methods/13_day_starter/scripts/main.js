console.log('%c 30 Day of javascript', 'color:green')
console.warn('This is warning')
console.error('this is error message')
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
console.table(user)
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')
console.info('30 Days Of JavaScript challenge is trending on Github')