let space = ' ';
let firstName = 'Shiferaw';
let lastName = 'nigatu';
let country = 'Ethiopia';
let city = 'Addis Ababa';
let language = 'JavaScript';
let job = 'Learner';
let fullName = firstName + space + lastName;

console.log(fullName);
let personInfoOne = fullName + '. I am ' + job + '. I live in ' + city + ', ' + country + '.';
console.log(personInfoOne);
let personInfoTwo = `I am ${fullName}. I am a ${job}. I live in ${city}, ${country}. I love ${language}.`;
let personInfoThree = `I am ${fullName}. I am a ${job}. I live in ${city}, ${country}. I love ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);