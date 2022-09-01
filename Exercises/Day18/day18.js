// //Callback
// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback('It did not go well', skills)
//     }, 2000)
//   }
  
//   const callback = (err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   }
  
//   doSomething(callback)
// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens
//   const square = async function (n) {
//     return n * n
//   }
  
//   square(2)
// const url = ""
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(countriesAPI)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    }) 
    .catch(error => console.log(error))