class Animal {
  constructor(name) {
    this.name = name
  }

  makeSound() {
    return `${this.name} makes a generic animal sound.`
  }
}
class Dog extends Animal {
  makeSound() {
    return `${this.name} barks 🐶`
  }
}
const animal=new Dog('pupu')
console.log(animal)