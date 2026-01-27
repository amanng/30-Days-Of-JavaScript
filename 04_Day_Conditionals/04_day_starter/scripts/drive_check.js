let age = prompt("Enter your age:");
let ageNum = Number(age);
if (ageNum >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - ageNum;
    console.log(`You need to wait ${yearsLeft} more year(s) to drive.`);
}