const empytySet = new Set()
console.log(empytySet)
for (let i=0; i <= 10; i++) {
    empytySet.add(i)
}
console.log(empytySet)
console.log(empytySet.delete(5))
empytySet.clear()
console.log(empytySet)
const languages = [
  'amharic',
  'French',
  'Spanish',
  'English',
  'oromo'
]
const setLange = new Set(languages)
console.log(setLange)

countries = [
  ['Finland', 'FIN'],
  ['Sweden', 'STO'],
  ['Norway', 'NOR'],
]
const map = new Map(countries)
console.log(map)