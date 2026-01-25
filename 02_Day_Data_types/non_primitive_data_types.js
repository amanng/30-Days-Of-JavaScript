// let nums = [1, 2, 3];
// nums[0] = 10; // Modifying the first element
// console.log(nums); // Output: [10, 2, 3]

const { use } = require("react");

// Adding a new element
let nums = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(nums == numbers); // Output: false
let userOne = {
    name: 'shiferaw',
    role: 'learner',
    country: 'Ethiopia'
}
let userTwo = {
    name: 'shiferaw',
    role: 'learner',
    country: 'Ethiopia'
}
console.log(userOne == userTwo); // Output: false
 numbers=nums
console.log(nums == numbers); // Output: true
let userThree = {
    name: 'shiferaw',
    role: 'learner',
    country: 'Ethiopia'
}
userOne = userThree;
console.log(userOne == userThree); // Output: true