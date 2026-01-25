let string = 'love'
let patternOne = /love/;
let patternTwo = /love/gi;
console.log(string.match(patternOne))
let string2 = 'I love JavaScript. If you do not love JavaScript what else can you love.';
console.log(string2.match('love'))
console.log(string2.match(patternOne))
console.log(string2.match(patternTwo))
let txt = 'in 2009, I ran 30 Days of JavaScript. Now, in 2020 I am super exited to start this challenge.'
let regEx = /\d/g; // find all digit characters
console.log(txt.match(regEx))
console.log(txt.match(/\d+/g)) // find all numbers