function fullName(){
    fullName = ''
    function firstName(){
        firstName = "BruceFelix"
        return firstName
    }
    function lastName(){
        lastName = "Macharia"
        return lastName
    }
    function sirName(){
        sirName = "Mwangi"
        return sirName
    }
    return{
        firstName: firstName(),
        lastName: lastName(),
        sirName: sirName()
    }
}
const names =fullName()
console.log(names.firstName)
console.log(names.lastName)
console.log(names.sirName)