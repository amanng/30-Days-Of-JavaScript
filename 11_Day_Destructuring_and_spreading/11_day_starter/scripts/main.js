////destructuring
const numbers = [1, 2, 3, 4]
let [num1, num2, num3, num4] = numbers
console.log(num1, num2, num3, num4)

///destructuring during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}