// level 1
let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus,\
             5500 euro online courses per month.'
let money = /\d+/g
let result = text.match(money)
total = parseInt(result[0]) + parseInt(result[1]) + parseInt(result[2])
console.log(total)

let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
let sortedPoints =  points.map(Number)
console.log(sortedPoints)
let distance = Math.max(...sortedPoints) + Math.abs(Math.min(...sortedPoints))
console.log(distance)


function is_valid_variable(variable){
    let pattern = /^\d|[^a-zA-Z0-9_]/
    if(pattern.test(variable)){
        console.log("False")
    }
    else{
        console.log("True")
    }
}
is_valid_variable('d12345')
is_valid_variable('first-name')
is_valid_variable('1first_name')
is_valid_variable('firstname') 

// level 3
function cleanText(sentence){
    let pattern = /[%!@#$&;]/g
    let result = sentence.replace(pattern, '')
    return result
}
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log(cleanText(sentence))