const student = {
    firstName: "alex",
    lastName: "alemu",
    age: "22",
    skills: 'HTML,CSS',
    country: "Ethiopia",
    enrolled:true
}
let studenttxt = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studenttxt)
let getText = localStorage.getItem('student')
console.log(getText)