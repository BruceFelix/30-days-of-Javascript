let body = document.querySelector("body")
let div = document.querySelector("div")
for (let i = 0; i < 102; i++) {
    if (i % 2 === 0) {
        let box = document.createElement("div")
        box.textContent = i
        box.style.width = "50px";
        box.style.height = "30px"
        box.style.color = "white"
        box.style.backgroundColor = "green"
        box.style.padding = "6px";
        box.style.margin = "2px";
        div.appendChild(box)
    } else {
        let box = document.createElement("div")
        box.style.color = "white"
        box.textContent = i;
        box.style.width = "50px";
        box.style.height = "30px";
        box.style.backgroundColor = "yellow"
        box.style.margin = "2px";
        box.style.padding = "6px";
        div.appendChild(box)
    }
}