let input=18
function checkPrime(num) {
    let array = [];
    for (let i = 1; i<=Math.floor(num / 2); i++){
        if (num % i === 0) {
            array.push(i)
        }

    }
    if (array.length > 2) {
        console.log(array)
        console.log("the number is not prime")
    }
    else
    {
        console.log(array)
        console.log("the number is prime")
    }
}
checkPrime(input)