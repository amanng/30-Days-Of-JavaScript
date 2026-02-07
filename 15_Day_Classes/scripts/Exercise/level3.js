class Stastics{
    constructor(ages) {
        this.ages=ages
    }
    sum() {
        let sum=0
        for (let i = 0; i < this.ages.length; i++){
            sum+=this.ages[i]
        }
        return sum
    }
    count() {
        return this.ages.length
    }
    min() {
        let minimum = this.ages[0]
        for (let i = 0; i < this.ages.length; i++){
            
            if (this.ages[i] < minimum) {
                minimum=this.ages[i]
            }
        }
        return minimum
    }
    max() {
        let maximum = this.ages[0]
        for (let i = 0; i < this.ages.length; i++){
            if (this.ages[i] > maximum)
                maximum=this.ages[i]
        }
        return maximum
    }
}
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let stastics = new Stastics(ages)
console.log(`Sum: `,stastics.sum()) 
console.log(`Count: `, stastics.count()) 
console.log(`Minimum: `, stastics.min()) 
console.log(`Maximum: `,stastics.max()) 