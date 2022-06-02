/*
const circle = {}

circle.Radius = 5
circle["Diameter"] = 10
circle.Circumference = circle.Diameter * Math.PI
circle["Area"] = Math.PI * (circle.Radius**2)

console.log(circle)
*/
/*
function destructivelyUpdateObject(obj,key,value) {
    obj[key] = value
    return obj
}
function nondestructivelyUpdateObject(obj, key, value) {
    const newobj = {...obj}
    newobj[key] = value
    return newobj
*/
//or can be written as:
/*
function nondestructivelyUpdateObject(obj, key, value) {
    return {...obj, 
        [key]: value}
}

const mondayMenu = {
    cheesePlate: {
        soft: "Chèvre",
        semiSoft: "Gruyère",
        hard: "Manchego",
    },
    fries: "Sweet potato",
    salad: "Cobb",
}

tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "Caesar")

console.log(tuesdayMenu)
console.log(mondayMenu) //destryoed from original

wednesdayMenu = nondestructivelyUpdateObject(mondayMenu, "fries", "Shoestring")

console.log(wednesdayMenu)
console.log(mondayMenu) //mondayMenu still intact

delete wednesdayMenu.salad
console.log(wednesdayMenu)
*/

const myArray = [];

myArray["0"] = "Will this be an `Object` property or an `Array` element?";
//=> "Will this be an `Object` property or an `Array` element?"

// Moment of truth...
console.log(myArray.length)
//=> 1
myArray.push(2,3,5,7)
console.log(myArray) // it's an array element































