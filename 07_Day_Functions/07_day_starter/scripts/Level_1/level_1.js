// function fullName() {
//     let firstName = 'Shiferaw'
//     let lastName = 'Nigatu';
//     console.log(`${firstName} ${lastName}`)
// }
// fullName()
// function fullName(fName,Lname){
//     let firstName = fName
//     let lastName = Lname
//     console.log(`Fullname: ${firstName} ${lastName}`)
// }
// fullName('abebe','kebede')
// function addNumber(num1, num2) {
//     console.log(`Sum: ${num1+num2}`)
// }
// addNumber(10, 20)
// function area() {
//     let length = 2;
//     let width = 10;
//     let area= length*width
//     console.log(`Area: ${area}`)
// }
// area()
// function perimeter() {
//     let length = 10
//     let width = 5
//     let perimeter = 2*length * width
//     console.log(`Perimeter: ${perimeter}`)
// }
// perimeter()
// function volume() {
//    let length = 10
//    let width = 10
//     let height = 3
//     let volume = length * width * height
//     console.log(volume)
    
// }
// volume();
// function tempreture() {
//     let oC = 30
//     let oF = (oC * 9 / 5) + 32
//     console.log(`oF=${oF}`)
// }
// tempreture()

//BMI
// let age = prompt("Enter your age :")
// let height = 0
// let Weight=0
// if (age >= 20) {
//     function BMI(height,Weight) {
    
//          Weight = prompt("Enter your weight:")

//          height = prompt("Enter your height:")
//         let bmi = (Weight) / (height * height)
//         console.log(bmi)
//         if (bmi < 18.5)
//             console.log("You are Under Weight")
//         else if (bmi >= 18.5 && bmi <= 24.9)
//             console.log("you are Normal")
//         else if (bmi >= 25 && bmi <= 29.9)
//             console.log("you are Over weight")
//         else if (bmi >= 30)
//             console.log("you are Obses")
            
//     }
//     BMI(height,Weight)
// }
// else {
//     console.log("Your age have to be greater than 20")
// }

//season calculator
// let month = prompt("Enter Month :")
// function season(month) {
//     month = month.toLowerCase();
//     if (month == 'september' || month == 'october' || month == 'november')
//         console.log(`season is Autumen`)

//     else if (month === "december" || month === "january" || month === "february") {
//         console.log(`season is Winter`)
//     }
//     else if (month === "march" || month === "april" || month === "may") {
//         console.log(`season is Spring`)
//     }
//     else if (month === "june" || month === "july" || month === "august") {
//         console.log(`season is Summer`)
        
//     }
// }
// season(month)

//Find maximum
// let num1 = prompt("Enter the first Number")
// let num2 = prompt("Enter num2")
// let num3 = prompt("prompt num2")
// let max=0
// function findMax(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3)
//         console.log(`${num1} is maximum`)
//     else if (num2 > num1 && num2 > num3)
//         console.log(`${num2} is maximum`)
//     else if (num3 > num1 && num3 > num2)
//         console.log(`${num3} is maximum`)
//     else
//         console.log("they are equal")
// }
// findMax(num1, num2, num3)