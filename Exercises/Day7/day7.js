function fullName(firstName,lastName){
    console.log(`${firstName} ${lastName}`)
}
fullName("BruceFelix", "Macharia")


function speed(distance, time){
    console.log("Speed is given by: ",distance/time )
}
speed(100,2)

const Speed = (distance,time) => "Speed is given by: " + (distance/time)
console.log(speed(400,8))
// level 2

function solveQuadEquation(a,b,c){
    let posQuadraticEquation =  (-b + Math.sqrt(b**2 - 4 *a *c ))/2 * a  
    let negQuadraticEquation =  (-b - Math.sqrt(b**2 - 4 *a *c ))/2 * a  
    console.log(posQuadraticEquation,negQuadraticEquation)
}
solveQuadEquation(1,4,4)
solveQuadEquation(1,-1,-2)
function showDateTime(){
    const date  = new Date()
    console.log(`${date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)
}
showDateTime()

function swapValues(x,y){
    let c
    c = x
    x = y
    y = c
    console.log(x,y)
}
swapValues(50,6)

const countries = ["Kenya", "Uganda", "Tanzania"]
function addItem(para){
    countries.push(para)
    console.log(countries)
}
addItem("Somali")
function removeItem(para) {
    countries.pop(para)
    console.log(countries)
}
removeItem("Somali")
let total = 0
function sum(...para){
    for(const num of para){
       total += num 
    }  
    console.log(total)
}
// sum(1,2,3)
sum(1,2,3,4)
sum(1,2,3)

function randomUserIp(){
    console.log(`${Math.floor(Math.random() * 255)}:${Math.floor(Math.random() * 255)}:${Math.floor(Math.random() * 255)}:${Math.floor(Math.random() * 255)}`)
}
randomUserIp()
let values = 'abcd3f0123456789'
function randomMacAddress(){
    console.log(`${values.charAt(Math.floor(Math.random() *values.length))}${values.charAt(Math.floor(Math.random() *values.length))}:${values.charAt(Math.floor(Math.random() *values.length))}${values.charAt(Math.floor(Math.random() *values.length))}:${values.charAt(Math.floor(Math.random() *values.length))}${values.charAt(Math.floor(Math.random() *values.length))}:${values.charAt(Math.floor(Math.random() *values.length))}${values.charAt(Math.floor(Math.random() *values.length))}:${values.charAt(Math.floor(Math.random() *values.length))}${values.charAt(Math.floor(Math.random() *values.length))}:${values.charAt(Math.floor(Math.random() *values.length))}${values.charAt(Math.floor(Math.random() *values.length))}`)
}
randomMacAddress()

function userIdGenerator(numberOfCharacters,numberofIds){
    numberOfCharacters = prompt("Enter the number of characters needed")
    numberofIds = prompt("Enter the number of ids you need.")
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let ids = []
    for(let num = 0; num < numberofIds; num++ ){
        let id = ""
        for(let i = 0; i < numberOfCharacters; i++){
            id += characters.charAt(Math.floor(Math.random() * characters.length)) 
        }
        ids.push(id)
    }
    console.log(ids)
}
// userIdGenerator()