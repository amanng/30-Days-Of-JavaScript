//**********Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// function solveLinEquation(a, b, c,x, y) {
//     return a*x+b*y+c
// }
// console.log(solveLinEquation(2, 3, 3, 2, 5))

//***********Quadratic equation
// function solveQuadEquation(a, b, c) {
//     let discriminant = b * b - 4 * a * c;
//     if (discriminant > 0) {
//         let x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
//         let x2 = (-b - Math.sqrt(discriminant)) / (2 * a)
//         return [x1,x2]
//     }
//     else if (discriminant === 0) {
//         let x = -b / (2 * a)
//         return [x]
//     }
//     else {
//         return [];
//     }
// }
// console.log(solveQuadEquation(1,2,1))
///**********print array */
// function printArray(array) {
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }
// let numbers = [1, 2, 3, 4, 5];
// printArray(numbers)

function showDateTime() {
    let day = new Date()
    let date = day.getDate()
    let month = day.getMonth()
    let year=day.getFullYear()
    console.log(`${date}/${month}/${year}`)
}
showDateTime()

