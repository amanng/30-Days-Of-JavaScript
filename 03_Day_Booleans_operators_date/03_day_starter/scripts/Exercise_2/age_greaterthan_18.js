let age = prompt("Enter your Birth year  :");
let currentYear = new Date().getFullYear();
let userAge = currentYear - Number(age);
if (userAge >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log("You are not old enough to drive.");
}
