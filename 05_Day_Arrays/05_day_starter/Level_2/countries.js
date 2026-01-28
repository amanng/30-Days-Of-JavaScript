let countries=[
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'America',
    'Estonia',
    'Eswatini',
    'japan'
];
let checkCountry = 'Ethiopia';
if (countries.includes(checkCountry)) {
    console.log(`${checkCountry} is found in the countries array.`);
} else {
    console.log(`${checkCountry} is not found in the countries array.`);
   countries.push(checkCountry);
   console.log(countries);
}