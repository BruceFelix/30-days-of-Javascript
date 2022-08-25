// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
  }
  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
  console.log(cube(callback, 3))
  function sayHello() {
    console.log('Hello')
  }
  setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.
  const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEighty)