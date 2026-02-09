const user={
    firstName:'shiferaw',
    lastName: 'Nigatu',
    age: '25',
    Country: 'Ethiopia',
    City: 'Addis Ababa'
}
const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)
let getText = localStorage.getItem('user')
console.log(getText)