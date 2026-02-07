class Person{
    constructor(firstName, lastNAme) {
        console.log(this)
        this.firstName = firstName
        this.lastNAme=lastNAme
    }
}
const person = new Person()
console.log(person)
const person1 = new Person('alex','alyel')
console.log(person)