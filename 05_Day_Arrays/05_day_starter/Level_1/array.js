//const array = [];
const array2 = [1, 2, 3, 4, 5];
console.log(array2.length);
let arrayLength = array2.length;
console.log(array2[0]);
console.log(array2[arrayLength - 1]);
let middleIndex = Math.floor(arrayLength / 2);
console.log(array2[middleIndex]);
const mixedArray = [1, 'two', true, null, undefined, { key: 'value' }, [1, 2, 3]];
console.log(mixedArray.length);
const itCompanies = ['Google', 'Facebook', 'Amazon', 'Apple', 'Microsoft', 'IBM'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);
middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies[middleIndex]);
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}
console.log(itCompanies.join(', ') + ' are big IT companies.');
/*
let company = prompt('Enter a company name: ');
if (itCompanies.includes(company)) {
  console.log(company);
} else {
  console.log('Company not found');
}
*/
//contain more than one 'o'
const companiesWithO = [];
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].toLowerCase().includes('o')) {
        companiesWithO.push(itCompanies[i]);
       
    }
    
}
console.log(companiesWithO);
const sortedCompanies = itCompanies.slice().sort();
console.log(sortedCompanies);
const reversedCompanies = itCompanies.slice().reverse();
console.log(reversedCompanies);
const firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);
const lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies);
itCompanies.shift();
console.log(itCompanies);
let middleIndex2 = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex2, 1);
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);