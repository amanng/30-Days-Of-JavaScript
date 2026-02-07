class Animal{
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
        getFullAnimal(){
            const fullAnimal = this.name + ' ' + this.color
            return fullAnimal
        }
    
}
const animal = new Animal('cow', '19', 'black', '4')
console.log(animal.getFullAnimal())
class Dog extends Animal{
    constructor(name, age, breed) {
        super(name, age)
        this.breed=breed
    }
    speak() {
        return `${this.name} barks`
    }
}
const dog = new Dog('germen',3,'new')
console.log(dog)
class Cat extends Animal{
    constructor(name, age, breed) {
        super(name, age)
        this.breed=breed
    }
    spark() {
        return `${this.name} meows`
    }
}
const cat = new Cat('pupi', 4, 'cat')
console.log(cat)