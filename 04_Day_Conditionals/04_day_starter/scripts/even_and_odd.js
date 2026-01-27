let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let number1 = Number(num1);
let number2 = Number(num2);
if (number1 % 2 === 0) {
    console.log(`${number1} is an even number.`);
}
else {
    console.log(`${number1} is an odd number.`);
}