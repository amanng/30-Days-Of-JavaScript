function outer() {
    let num = 3
    function firstInner() {
        num = num + 1
        return num
    }
    function secondFunction() {
        num = num + 2
        return num
    }
    function thirdFunction() {
        num = num + 3
        return num
    }
    return {
        num:num,
        first: firstInner(),
        second: secondFunction(),
        third:thirdFunction()
    }
}
const threeFunction = outer()
console.log(threeFunction.num)
console.log(threeFunction.first)
console.log(threeFunction.second)
console.log(threeFunction.third)