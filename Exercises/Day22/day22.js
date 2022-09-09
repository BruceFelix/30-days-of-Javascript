let body = document.querySelector("body")
let div = document.querySelector("div")
for (var counter = 0; counter <= 100; counter++) {
    
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        if (counter % 2 === 0) {
            let box = document.createElement("div")
            box.textContent = counter
            box.style.width = "50px";
            box.style.height = "30px"
            box.style.backgroundColor = "green"
            box.style.margin = "2px";
            box.style.color = "white"
            box.style.padding = "5px"
            div.appendChild(box)
        } else if (counter % 2 !== 0){
            let box = document.createElement("div")
            box.textContent = counter
            box.style.width = "50px";
            box.style.height = "30px";
            box.style.backgroundColor = "yellow"
            box.style.margin = "2px";
            box.style.padding = "5px"
            box.style.color = "white"
            div.appendChild(box)
        }
       else{
            let box = document.createElement("div")
            box.textContent = counter
            box.style.width = "50px";
            box.style.height = "30px";
            box.style.backgroundColor = "yellow"
            box.style.margin = "2px";
            box.style.padding = "5px"
            box.style.color = "white"
            div.appendChild(box)
        }
    }
}




