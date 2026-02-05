console.table(countries)
const countryTable = countries.map((name, index) => ({
  id: index + 1,
  name
}));

console.table(countryTable);
console.log('name')
console.group(countries)
console.groupEnd()