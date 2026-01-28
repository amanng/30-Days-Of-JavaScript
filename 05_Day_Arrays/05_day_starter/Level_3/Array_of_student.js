const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sorted = ages.sort()
console.log('Sorted ages:', sorted)
if (ages.length % 2 === 0) {
    let mid1 = ages[ages.length / 2 - 1]
    let mid2 = ages[ages.length / 2]
    let median = (mid1 + mid2) / 2
    console.log('Median age:', median)
}
else {
    let median = ages[Math.floor(ages.length / 2)]
    console.log('Median age:', median)
}
let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i]
}
let average = sum / ages.length
console.log('Average age:', average)
let max_average = Math.max(...ages) - average
let min_average = average - Math.min(...ages)
console.log('Max - Average:', max_average)
console.log('Min - Average:', min_average)
const countries = [
    'China',
    'India',
    'United States',
    'Indonesia',
    'Pakistan',
    'Brazil',
    'Nigeria',
    'Bangladesh',
    'Russia',
    'Mexico',
    'Japan',
    'Ethiopia',
    'Philippines',
    'Egypt',
];
let firstTen = countries.slice(0, 10)
console.log('First ten countries:', firstTen)
let middle = Math.floor(countries.length / 2);
console.log('Middle country:', countries[middle])
let dividedCountries;
if (countries.length % 2 === 0) {
    dividedCountries = [countries.slice(0, middle), countries.slice(middle)];
    console.log(dividedCountries);
} else
{
    dividedCountries = [countries.slice(0, middle + 1), countries.slice(middle + 1)];
console.log(dividedCountries);
}