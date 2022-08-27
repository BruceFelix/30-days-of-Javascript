
//level 1
let aSet = new Set()
for(let i = 0; i < 11; i++){
    aSet.add(i)
}
console.log(aSet)
console.log(aSet.delete(5))
console.log(aSet)
console.log(aSet.clear())
console.log(aSet)


const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'Russia',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)

let countries = [
  ['Finland', 7],
  ['Sweden', 6],
  ['Norway', 6],
]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)


// level 2
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const someCountries = ['Finland', 'Sweden', 'Norway']

let c = new Set([...a,...b]) // union set of a and b
console.log(c)
let A = new Set(a)
let B = new Set(b)

let d = new Set(a.filter((num) => B.has(num)))
console.log(d)

