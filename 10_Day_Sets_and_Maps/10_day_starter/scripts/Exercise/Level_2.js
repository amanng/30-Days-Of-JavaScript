const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
//union
let c= [...a, ...b]
let A = new Set(a )
let B = new Set(b)
let C = new Set(c)
console.log(C)
//intersection
let i = a.filter((num) => B.has(num))
let Intersection = new Set(i)
console.log(Intersection)
///a with b
const intersection = a.filter(num => B.has(num))

console.log(intersection)