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

console.log
console.log {
    []
}


