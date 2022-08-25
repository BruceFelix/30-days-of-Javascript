const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  person.nationality = 'Ethiopian'
  person.country = 'Finland'
  person.title = 'teacher'
  person.skills.push('Meteor')
  person.skills.push('SasS')
  person.isMarried = true
  
  person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
  console.log(person)
  console.log(person.getPersonInfo())

  // level1
let dog = {
  name: "Alex",
  legs: 4,
  color: "brown",
  age: 10,
  sound: "Woof woof",
  bark : function(){
    return this.sound
  }
}
console.log(dog)
console.log(dog.age)
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.bark())
dog.breed = "German Shephard"
dog.getDogInfo = function(){
  return `${this.name} ${this.age} ${this.legs} ${this.color} ${this.bark()}`
}

console.log(dog.getDogInfo())
//Level 2
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
let counter = 0
for(const property in users){
  // console.log(users[property].skills.length)
  if(users[property].skills.includes("MongoDB","Express", "React", "Node")){
    counter += 1
  }
}
    // console.log(users[property],"has the highest numbers of skills with", skillsCounter)
    console.log(counter)
users.bruce = {
    email: 'brucefelixm@gmai.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP'],
    age: 23,
    isLoggedIn: true,
    points: 40
}
console.log(users['bruce'])
console.log(Object.keys(users))
console.log(Object.values(users))

// level 3
const personAccount = {
  firstName: "BruceFelix",
  lastName: "Macharia",
  incomes: 0,
  expenses: 0,
  totalincome: 0,
  totalExpenxes: function(){
    return `${this.totalincome} - ${this.expenses}`
  }
  
}