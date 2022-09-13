import { countries } from './countries.js'

let country = document.querySelector(".countries")
let head = document.querySelector('.header')
let head1 = document.createElement('h1')
let head2 = document.createElement('h4')
let paragraph1 = document.createElement('p')
let paragraph2 = document.createElement('p')
head1.textContent = "WORLD COUNTRIES LIST"
head2.textContent = "Total Number of Countries: 193"
paragraph1.textContent = "30DaysOfJavaScript:DOM-Day-2"
paragraph2.textContent = "Author: Asabeneh Yetayeh"
head1.style.fontSize = "40px"
head.style.width = '1000px'
head.style.width = '700px'
head2.style.width = '100%'
head2.style.textAlign = 'center'
paragraph1.style.width = '100%'
paragraph2.style.width = '100%'
head1.style.width = '1000px'
head.appendChild(head1)
head.appendChild(head2)
head.appendChild(paragraph1)
head.appendChild(paragraph2)

for(let i = 0; i < countries.length; i++){
    let box = document.createElement('div')
    box.textContent = countries[i]
    box.style.width = "120px";
    box.style.height = "130px"
    box.style.color = "black"
    box.style.backgroundColor = "white"
    box.style.borderRadius = "5px"
    box.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)"
    box.style.padding = "6px";
    box.style.margin = "10px";
    box.style.alignContent = 'center'
    country.appendChild(box)
}
console.log(country)