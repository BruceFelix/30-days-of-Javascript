// Level 1
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0],itCompanies[3],itCompanies[itCompanies.length])

// let regex = /o/m
// let companiesWithOO = []
// for(let i = 0; i < itCompanies.length; i++){
//         if( itCompanies[i].includes(regex)){
//             companiesWithOO.push(itCompanies[i])
//             console.log(itCompanies[i])
//         }
// }    

console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(4,7))
console.log(itCompanies.shift())
console.log(itCompanies.splice(2,2))
console.log(itCompanies.pop())
console.log(itCompanies.splice())


//Level 2
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import { webTechs} from './web_techs.js'
import { countries} from './countries.js'
console.log(countries, webTechs)

let text = 'I love teaching and empowering people I teach HTML CSS JS React Python'
let words = text.split(" ")
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")
shoppingCart.splice(4,1)
shoppingCart[2] = "Green Tea"
console.log(shoppingCart)

if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA")
}
else{
    countries.push("Ethiopia")
    console.log(countries)
}
if(webTechs.includes("Sass")){
    console.log("Sass is a CSS preprocess")
}
else{
    webTechs.push("Sass")
    console.log(webTechs)
}
// level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 27, 28, 29]
ages.sort()
console.log(ages)
let minimum = Math.min.apply(Math,ages)
let maximum = Math.max.apply(Math,ages)
console.log(maximum,minimum)

if(ages.length % 2 == 0){
   let median = (ages[4] + ages[5])/2
    console.log(median)
}
else{
    console.log(ages[(ages/2)])
}
let total = 0
for (let i = 0; i < ages.length; i++ ){
    total += ages[i]
}
let average = total / ages.length
console.log(average)
console.log(maximum - minimum)