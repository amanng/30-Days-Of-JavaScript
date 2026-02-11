function outerFunction2()
{
    let num = 4
    function innerFunction2() {
        num = num * num
        return num
    }
    return innerFunction2()
}
const number = outerFunction2()
console.log(number)