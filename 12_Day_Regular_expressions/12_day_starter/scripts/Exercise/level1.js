let txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern = /\d+/g
matched = txt.match(pattern).map(Number)
const monthlySallary = matched[0]
const annualBonus = matched[1]
const monthlyCourse = matched[2]
const totalAnnualIncome =
  (monthlySallary * 12) +
  annualBonus +
  (monthlyCourse * 12);
console.log(totalAnnualIncome);
let text2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'
let pattern2 = /\d+/g
numMached = text2.match(pattern2)
console.log(numMached)
//javascript variable
let vr1 = 'first_name'
let vr2 = 'first-name'
let vr3 = '1first_name'
let vr4 = 'firstname'
let pattern3=/d+|-/g
let is_valid_variable = function (vr) {
    if (vr.match(pattern3))
        return false;
    else
        return true
}
console.log(is_valid_variable(vr4))