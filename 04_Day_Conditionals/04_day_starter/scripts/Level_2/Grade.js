let score=prompt("Enter your score:");
let scoreNum = Number(score);
if (scoreNum >= 80 && scoreNum <= 100) {
    console.log("A");
}
else if (scoreNum >= 70 && scoreNum < 80) {
    console.log("B");       
}
else if (scoreNum >= 60 && scoreNum < 70) {
    console.log("C");   
}
else if (scoreNum >= 50 && scoreNum < 60) {
    console.log("D");       
}
else if (scoreNum >= 0 && scoreNum < 50) {
    console.log("F");       
}
else {
    console.log("Invalid score");
}