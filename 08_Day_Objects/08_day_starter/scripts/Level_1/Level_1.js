let dog = {
    name: 'pop',
    legs: 4,
    color: 'black',
    age: 10,
    bread:'germen',
    bark: function () {
        return `woof woof`
    },
    doginfo: function () {
        console.log(`name: ${dog.name} age: ${dog.legs} color: ${dog.color} age: ${dog.age} bark: ${dog.bark()}`)
    }
}
console.log(dog.doginfo())
//

