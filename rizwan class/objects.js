console.log ("Hello Js")
// objects - datatypes

const thisClass = "Fullstcak web dev"
const week = 8

// Datatypes - number (integers, floats (decimals)), string, boolean (true/false), object, 
console.log (typeof week)
console.log ("10"+"10")
const isRaining = true//false

let x = 5
let y = 5
console.log (x+y)
console.log (x-y)


//An example of an object
const animal = {
    legs: 4,
    head: {
        eyes: 2,
        haircolor: "brown"
    },
    name:"goat"
}

//CRUD

//READ - Accessing object properties - 
// const name = object.property
console.log (animal.name)
console.log (animal.head.eyes)

//Uisng the brackets
console.log (animal ["name"])
console.log (animal ["name"],["head"],["eyes"])

//always use the dot notation

//UPDATING
console.log (animal)
animal.walkingStyle = "walks"
animal.name = "cow"
console.log (animal)

//Deleting objects
delete animal.head.haircolor
console.log (animal)

<<<<<<< Updated upstream
console.log
console.log {
    []
}


=======

//console.log ("Calling")
//objects can have properties and methods
// a method is like a function
//console is an inbuilt object. There are objects already in JS
// .log ("") is a function being called
// we will learn about object methods. Nested objects are possible.

//Comparison operartors

// console.log(7 > 7) // false
// console.log(7 == 7) // true
// console.log(7 => "7") // false
// console.log(7 <= "7") // false
// console.log(7 != "7") // false
// console.log(7 !=== "7") //


// const student = {
//     name: "Kevin",
//     math: 60,
//     eng: 80,
//     phy: 50,
// }

const student = {
    name: "Martin",
    math: 10,
    eng: 50,
    phy: 20,
}
//The Total Operator
const total = student.math + student.eng + student.phy
console.log(total)



//Conditionals
// if
// else if
// else
// switch

if (total >= 150) {
    console.log ("Yo have passed")
}else {
    console.log ("You have failed")
}




>>>>>>> Stashed changes
