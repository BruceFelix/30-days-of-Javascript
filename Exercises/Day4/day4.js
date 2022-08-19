// level 1
// ternary operator
let a = 4
let b = 3
let truthy = a > b
truthy
    ? console.log("a is greater than b")
    : console.log("a is less than b")

//even numbers in javasript
let number = prompt("Enter a number: ")
let ifEven = number % 2 == 0
ifEven 
    ? console.log("Number is divisible by 2")
    : console.log("Number is not divisible by 2")

// level 2
//checking seasons
const Autumn = ['September', 'October', 'November']
const Winter = ['December', 'January', 'Feb']
const Spring = ['March', 'April', 'May']
const Summer = ['June', 'July', 'August']

let userMonth = prompt("What month is it right now?") 
if(Autumn.includes(userMonth)){
    console.log("The season is Autumn")
}
else if(Winter.includes(userMonth)){
    console.log("The season is Winter")
}
else if(Spring.includes(userMonth)){
    console.log("The season is Spring")
}
else{
    console.log("The season is Summer.")
}