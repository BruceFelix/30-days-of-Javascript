//level 1
let one = document.querySelector('p')
let paraGraphOne = one[1]
console.log(one)
console.log(document.querySelector('#one'))
console.log(document.querySelector('#two'))
console.log(document.querySelector('#three'))
console.log(document.querySelector('#four'))

let allPs = document.querySelectorAll('p')
console.log(allPs)

allPs.forEach(p => console.log(p))
allPs[3].innerHTML = "Fourth Paragraph"
console.log(allPs[3])

allPs[0].className = "ONE"
allPs[0].classList.add("oNe")
allPs[1].id =" TWO"
allPs[2].className = "Three"
allPs[2].classList.add("THREE")

allPs.forEach((paragraphs, i) => {
    paragraphs.style.backgroundColor = "yellow"
    paragraphs.style.fontSize = "24px"
    paragraphs.style.border = "5px solid green"
    paragraphs.style.color = "Grey"
    if(i % 2 == 0){
        paragraphs.style.color = "red"
    }
    else{
    paragraphs.style.color = "green"
    }
}
)