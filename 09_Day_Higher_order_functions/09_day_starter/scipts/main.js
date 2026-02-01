// let num = [1, 2, 3, 4, 5]
// let sum = 0
// num.forEach(num => sum+=num)
// console.log(sum)
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((Element)=>console.log(Element.toUpperCase()))
const numbers = [1, 2, 3, 4, 5]
const numSquare = numbers.map((num) => num * num)
console.log(numSquare)
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const upperCase = names.map((name) => name.toUpperCase())
console.log(upperCase)
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const upperCasec = countries.map((country1) => country1.toUpperCase().slice(0,3))
console.log(upperCasec)
const fitered = countries.filter((countr2) => countr2.includes('land'))
console.log(fitered)
const lendthFive = countries.filter((country3) => country3.length === 5)
console.log(lendthFive)

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]
const scoresEighty = scores.filter((score) => score.score > 80)
console.log(scoresEighty)

const numberss = [1, 2, 3, 4, 5]
const reduced = numbers.reduce((acc, red) => acc + red, 0)
console.log(reduced)
const namese = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const typofString = namese.every((namestring) => typeof namestring === 'string')
console.log(typofString)
const ages = [24, 22, 25, 32, 35, 18]
const lessthanAge = ages.find((age) => age < 20)
console.log(lessthanAge)
const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const lengthSeven = names3.find((seven) => seven.length > 7)
console.log(lengthSeven)
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())
const numbersort = [9.81, 3.14, 100, 37]
numbersort.sort(function(a, b){
    return a-b
})
console.log(numbersort)

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort(function (a, b) {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users)