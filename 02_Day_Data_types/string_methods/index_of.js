//string.indexOf(substring)
let string = '30 Days Of JavaScript';
console.log(string.indexOf('D')) // 3
console.log(string.indexOf('Days')) // 3    
console.log(string.indexOf('days')) // -1
console.log(string.indexOf('a')) // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script')) // 15
console.log(string.indexOf('script')) // -1