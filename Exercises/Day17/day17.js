//level 1
//Store you first name, last name, age, country, city in your browser
//localStorage.
localStorage.setItem('firstName', 'BruceFelix')
localStorage.setItem('lastName', 'Macharia')
localStorage.setItem('age', '23')
localStorage.setItem('country', 'Kenya')
localStorage.setItem('city', 'Nairobi')

//level 2
const student = {
    firstName : 'BruceFelix',
    lastName : 'Macharia',
    age: 23,
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
        'PHP',
        'GIT & GitHub'
    ],
    country: 'Kenya',
    enrolloedKeys : [
        'firstName',
        'lastName',
        'age',
        'skills',
        'country'
    ]
}
const studentJson = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studentJson)
console.log(localStorage)

