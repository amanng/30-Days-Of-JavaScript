let string = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(string.match(/\d+/g).map(Number).reduce((a, b) => a + b, 0))