let myage  = 25;
let yourage = prompt("Enter your age:");
let yourageNum = Number(yourage);
if (myage > yourageNum) {
    let ageDiff = myage - yourageNum;
    console.log(`I am ${ageDiff} year(s) older than you.`);
}
else if (yourageNum > myage) {
    let ageDiff = yourageNum - myage;
    console.log(`You are ${ageDiff} year(s) older than me.`);
}
else {
    console.log("We are the same age.");
}