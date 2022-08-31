class Animal{
    constructor (name,age,color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    constructor(name,age,color,legs, breed){
        super(name, age, color, legs)
        this.breed = breed
    }
}
class Dog extends Animal{
    constructor(name,age,color,legs, breed){
        super(name, age, color, legs)
        this.breed = breed
    }
   
}
class cat extends Animal{
    constructor(name,age,color,legs, type){
        super(name, age, color, legs)
        this.type = type
    }
}