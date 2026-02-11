// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }
//     return innerFunction
// }
// const innrFunc = outerFunction()
// console.log(innrFunc())
// console.log(innerFunc())
function outerFunction1() {
    let count = 0
    function plus() {
        count++;
        return count
    }
    function minue() {
        count--
        return count
    }
    return {
        plus: plus(),
        minue:minue()
    }
}
const innerFuncs =  outerFunction1()
console.log(innerFuncs.plus)
console.log(innerFuncs.minue)