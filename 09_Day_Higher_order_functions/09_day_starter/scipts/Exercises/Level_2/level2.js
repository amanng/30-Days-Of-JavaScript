const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
let totalprice = products.map(product => product.price).filter(price => typeof price === 'number').reduce((sum, price) => sum + price, 0)
console.log(totalprice)

const totalPrice = products.reduce((sum, product) => {
  if (typeof product.price === 'number') {
    return sum + product.price;
  }
  return sum;
}, 0);

console.log(totalPrice); // 27

let catagorize = countries.filter((catagorize) => catagorize.toLowerCase().includes('land'))
console.log(catagorize)
let getFirstTenCountry = countries.slice(0, 10)
console.log(getFirstTenCountry)