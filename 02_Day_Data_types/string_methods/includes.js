let string ='30 Days Of JavaScript';
console.log(string.includes('Days')) // true
console.log(string.includes('days')) // false 
console.log(string.includes('Script')) // true
console.log(string.includes('script')) // false
console.log(string.includes('30')) // true
console.log(string.includes('Java')) // true
let country = 'Ethiopia';
console.log(country.includes('thio')) // true
console.log(country.includes('Ethio')) // true
console.log(country.includes('opia')) // true
console.log(country.includes('Java')) // false  