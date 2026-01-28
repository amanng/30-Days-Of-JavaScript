const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat') // add Meat to the beginning of the array
console.log(shoppingCart)
shoppingCart.push('Sugar') // add Sugar to the end of the array
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)// remove Honey
console.log(shoppingCart)
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea' // modify Tea to Green Tea
console.log(shoppingCart)
let changeitem=prompt("If you want to change an item in the shopping cart, enter the item name:")
if(shoppingCart.includes(changeitem)){
    let newitem=prompt("Enter the new item name to replace "+changeitem+":")    
    shoppingCart[shoppingCart.indexOf(changeitem)] = newitem
    console.log(shoppingCart)
}