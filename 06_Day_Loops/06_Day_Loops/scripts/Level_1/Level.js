for (let i = 0; i < 10; i++) {
    console.log("Level 1 - Iteration " + i);
}
let i=0
while (i < 10) {
  console.log("Level 1 - While Iteration " + i);
  i++;

}
let j=0
do {
  console.log("Level 1 - Do While Iteration " + j);
  j++;
} while (j < 10);
for (let k = 10; k > 0;k--) {
    console.log("Level 1 - Reverse Iteration " + k);
}
let m = 0;
while (m < 10) {
    console.log("Level m " + m);
    m++;
}
let n = 1;
do {
    console.log("Level n " + n);
    n++;
}
while (n < 10);
// let p = prompt("Enter a number to generate its multiplication table:");
// for (let q = 0;q<=p;q++) {
//     console.log("Level  " + q);
// }
for (let r = 0; r <= 7; r++) {
    console.log("#".repeat(r));
}
for (let s = 0; s <= 10; s++) {
    console.log(s + " x " + s + " = " + (s * s));
}
for (let t = 0; t <= 10; t++) {
    console.log(t + " " + t * t + " " + t * t * t);
}
let oddnum = 0;
let evennum = 0;
for (let u = 0; u <= 100; u++) {
    if (u % 2 == 0) {
        console.log("Even " + u);
        
        evennum += u;
        
    } else {
        console.log("Odd " + u);

        oddnum += u;
    }
}
//prime numbers
for (let v = 0; v <= 100; v++) {
    let isPrime = true;
    if (v <= 1) {
        isPrime = false;
    } else {
        for (let w = 2; w <= Math.sqrt(v); w++) {
            if (v % w == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log("Prime " + v);
    }
}
let sum = 0;
for (let x = 0; x <= 100; x++) {
    sum += x;
}
console.log("Sum: " + sum);
console.log("Sum of evens: " + evennum);
console.log("Sum of odds: " + oddnum);
let arr = [];
for (let y = 0; y < 5; y++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.log("Array: " + arr);
let uniqueArr = [];
for (let z = 0; z < 5; z++) {
    let randNum;
    do {
        randNum = Math.floor(Math.random() * 100);
    } while (uniqueArr.includes(randNum));
    uniqueArr.push(randNum);
}
console.log("Unique Array: " + uniqueArr);
//generate six character ids
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let id = '';
for (let aa = 0; aa < 6; aa++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
}
console.log("Random ID: " + id);