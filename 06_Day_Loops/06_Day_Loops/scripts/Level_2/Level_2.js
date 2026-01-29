//Develop a small script which generate any number of characters random id
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let idLength = 6;
let randomId = '';
for (let i = 0; i < idLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
}
console.log("Random ID: " + randomId);
//hexadecimal color
let hexChars = '0123456789ABCDEF';
let hexColor = '#';
for (let j = 0; j < 6; j++) {
    let randomHexIndex = Math.floor(Math.random() * hexChars.length);
    hexColor += hexChars.charAt(randomHexIndex);
}
console.log("Hex Color: " + hexColor);
//rgb color
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let rgbColor = `rgb(${r}, ${g}, ${b})`;
console.log("RGB Color: " + rgbColor);
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
    'Kenya'
];
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let uppercase=countries.map((country) => country.toUpperCase())
console.log(uppercase);
let lengths=countries.map((country) => country.length)
console.log(lengths);
let abbrev = countries.map((country) => country.slice(0, 3).toUpperCase())
for (let k = 0; k < countries.length; k++) {
    console.log(`${countries[k]}, ${abbrev[k]}, ${lengths[k]}`);
}
for (let l = 0; l < countries.length; l++) {
    if (countries[l].includes('land')) {
        console.log(countries[l]);
    }
}
for (let m = 0; m < countries.length; m++) {
    if (countries[m].endsWith('ia')) {
        console.log(countries[m]);
    }
}
let maxLen = 0;
let longestCountry = '';
for (let n = 0; n < countries.length; n++) {
    if (countries[n].length > maxLen) {
        maxLen = countries[n].length;
        longestCountry = countries[n];
    }
}
console.log("Longest Country: " + longestCountry);
let multiWordCountries = [];
for (let p = 0; p < countries.length; p++) {
    if (countries[p].length == 5) {
        multiWordCountries.push(countries[p]);
    }
}
console.log("Countries with 5 letters: " + multiWordCountries);
let longestWord = '';
let maxLeng = 0;
for (let q = 0; q < webTechs.length; q++) {
    if (webTechs[q].length > maxLeng) {
        maxLeng = webTechs[q].length;
        longestWord = webTechs[q];
    }
}
console.log("Longest Web Tech: " + longestWord);
let newArray = [];
let webTechLength = webTechs.map((tech) => tech.length)
for (let r = 0; r < webTechs.length; r++) {
    newArray.push([webTechs[r], webTechLength[r]]);
    console.log(newArray);
}
const mernStacks = ['MongoDB', 'Express', 'React', 'Node']
let acronym = '';
for (let s = 0; s < mernStacks.length; s++) {
    acronym += mernStacks[s].charAt(0);
}
console.log("MERN Acronym: " + acronym);
for (let t = 0; t < webTechs.length; t++) {
    let arrays = [];
    arrays.push(`${webTechs[t]}`);
    console.log(arrays);
}
let fruit = ['banana', 'orange', 'mango', 'lemon'] 
let reversedFruit = fruit.slice().reverse();
console.log("Reversed Fruit: " + reversedFruit);
let fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
let fullupercase = fullStack.map((subArray) => subArray.map((item) => item.toUpperCase()));
console.log("Full Stack Uppercase: " + fullupercase);

