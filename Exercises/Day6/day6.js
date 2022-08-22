const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  // level 1
  for(let i = 0; i <= 10; i++){
    console.log(i)
  }
  let i =0
  while(i < 10){
    console.log(i)
    i++
  }
do{
    console.log(i)
    i++
}while(i < 10)

for(i=1 ; i <= 7; i++){
    console.log('*'.repeat(i));
}
for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${ i * i}`)
}
console.log("i\ti^2\ti^3")
for(let i = 0; i <= 10; i++){
    console.log(`${i}\t${i ** 2}\t${ i ** 3}`)
}
//JavaScript program to print prime numbers from 1 to 100 using for loop
let isPrime = true;
 
console.log("Prime numbers from 1 to 100 are: ");
 let primeNumbers = []
for(let i=2; i <= 100; i++){
  for(let j=2; j < i - 1; j++){
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    primeNumbers.push(i)
  }
  isPrime = true;
}
console.log(primeNumbers)

let randomArray = []
for(let i = 0; i < 100; i++){
    let value = Math.floor((Math.random()) * 10) + 1
    if(randomArray.includes(value)){
        continue
    }
    else{
        randomArray.push(value)
    }
    if(randomArray.length == 5){
        break
    }
}
console.log(randomArray)


//Develop a small script which generate a six characters random id:
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
let id = ""

for(let i = 0; i < 10; i++){
    id += characters.charAt(Math.floor(Math.random() * characters.length)) 
}
console.log(id)

let hexValues = 'abcdef0123456789'
let hexcode = ''
for(let i = 0; i < 6; i++){
    hexcode += hexValues.charAt(Math.floor(Math.random() * hexValues.length)) 
}
console.log(hexcode)
// let numbers = "0123456789"
// let rgbColor = ""
// for(let i = 0; i < 10; i++){
    console.log("rgb(",Math.floor(Math.random() * 255),",",Math.floor(Math.random() * 255),',',Math.floor(Math.random() * 255),")")
// }

let newCountries = []
for(let i = 0; i < countries.length; i++){
    newCountries.push(countries[i].toUpperCase())
}
console.log(newCountries)
let lenghtOfCounties = []
for(let i = 0; i < countries.length; i++){
    lenghtOfCounties.push(countries[i].length)
}
console.log(lenghtOfCounties)

let arrayOfCountries = []
for(let i = 0; i < countries.length; i++){
    arrayOfCountries.push([countries[i],countries[i].slice(0,3),countries[i].length])
}
console.log(arrayOfCountries)


let countriesWithLand = []
let countriesWithoutLand = []
for(let i = 0; i < countries.length; i++){
   if(countries[i].includes("land")){
        countriesWithLand.push(countries[i])
   }
   else{
    countriesWithoutLand.push(countries[i])
   }
}
console.log(countriesWithLand)
console.log(countriesWithoutLand)

// largest country with highest numbers of characters
let country = []
for(let i = 0; i < countries.length; i++){
    if(countries[i].length == 5)
         country.push(countries[i])
}
console.log(country)
let mernapp = ""
for(let i = 0; i < mernStack.length; i++){
    mernapp = mernapp + mernStack[i].charAt(0)
}
console.log(mernapp)
for(const technology of webTechs){
    console.log(technology)
}
let fruit = ['banana', 'orange', 'mango', 'lemon']
for(let i = 3; i >= 0; i-- ){
    let popback = fruit.pop()
    fruit.unshift(popback)
}
console.log(fruit)