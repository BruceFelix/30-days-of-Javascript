// Level 1
const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

// Level2 
//area of a triangle
let base = prompt('Enter base', 'base value goes here')
let height = prompt('Enter height', 'height value goes here')
let area = alert( "The area of the triangle is", 0.5 * base * height)

// perimeter of a triangle
let aside = prompt('Enter side a:')
let bside = prompt('Enter side b:')
let sidec = prompt('Enter side c:')
let perimenter  = aside + bside + sidec
alert("The perimeter of the triangle is ",(perimenter))

// area of a rectangle 
let rside1 = prompt('Enter side a:')
let rside2 = prompt('Enter side b:')
let rarea  = rside1 * rside2 * 1
let rperimeter = 2 * (rside1 + rside2)
alert("The area of a rectangle is ",(rarea))
alert("The perimeter of a rectangle is ",(rperimeter))
