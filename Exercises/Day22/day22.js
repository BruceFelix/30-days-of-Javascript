function isPrime(num) {
    if (num === 2) return true;
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function isEven(num) {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  }
  
  let div = document.getElementById("root");
  
  function drawNumbers() {
    for (let i = 0; i < 102; i++) {
      if (isPrime(i)) {
        let box = document.createElement("div");
        box.innerHTML = i;
        box.classList.add("prime");
        div.appendChild(box);
      } else if (isEven(i) === false) {
        let box = document.createElement("div");
        box.style.color = "white";
        box.textContent = i;
        box.classList.add("odd");
        div.appendChild(box);
      } else {
        let box = document.createElement("div");
        box.textContent = i;
        box.classList.add("even");
        div.appendChild(box);
      }
    }
  }
  
  drawNumbers();
  