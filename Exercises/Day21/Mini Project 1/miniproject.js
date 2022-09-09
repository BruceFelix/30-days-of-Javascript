let uls = document.querySelectorAll('li')
uls.forEach((li, i) =>{
    li.style.listStyle = "none"
    li.style.margin = "1px"
    li.style.padding = "10px 20px"
    li.style.color = "#222"
    if(i == 0){
        li.style.backgroundColor = "green"
    }
    else if(i == 1){
        li.style.backgroundColor = "yellow"
    }
    else{
        li.style.backgroundColor = "red"
    }
}

)
let content = document.querySelector('.wrapper')
content.style.width = "600px"
content.style.margin = "60px auto"
let body = document.querySelector('body')
body.style.display = "flex column"

let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
h1.style.textAlign = "center"
h2.style.textAlign = "center"
h1.textContent = "Asabeneh Yetayeh challenges in <span id = 'year'>2020<span>"
document.querySelector('#year').fontSize = '50px' 


