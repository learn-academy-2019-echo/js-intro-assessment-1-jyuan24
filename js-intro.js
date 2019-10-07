// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.
console.log("\n1a------------------------")
console.log(mantra.includes('B'))


// 1b. Write the code that determines if there is an 'x' in mantra.
console.log("\n1b------------------------")
console.log(mantra.includes('x'))


// 1c. Write the code that determines if there is a 'v' in mantra.
console.log("\n1c------------------------")
console.log(mantra.includes('v'))


// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.
console.log("\n1d------------------------")
function returnLetter (string, letter) {
    if (letter === " " || letter === undefined) {
        return "Enter a letter."
    }
    else if (string.includes(letter) === true) {
        return "\"" + letter + "\" exists within the string."
    }
    else {
        return "Try a different letter."
    }
}

console.log(returnLetter(mantra, "e"))


// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"
console.log("\n2a------------------------")
function longerName(name1, name2) {
    if (name1.length > name2.length) {
        return name1
    }
    else if (name1.length < name2.length) {
        return name2
    }
    else if (name1.length === name2.length) {
        return "Same length"
    }
    else {
        return "Error"
    }
}
console.log(longerName(myDog, myCat))


// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
console.log("\n2b------------------------")
function nameArray(name1,name2) {
    return [name1, name2]
}
console.log(nameArray(myDog, myCat))

// 2c. STRETCH: Write a function that returns the two variables in all lowercase letters. Expected output: "snoopy garfield"
console.log("\n2c------------------------")
function lowerName(name1, name2) {
    return (name1 + " " + name2).toLowerCase()
}
console.log(lowerName(myDog, myCat))


// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
console.log("\n3a------------------------")
var array3a = myMessage.split("")
for (i = 0; i < myMessage.length; i++) {
    if (array3a[i] !== " " && array3a[i] !== "!") {
        console.log(array3a[i])
    }
}


// 3b. Write the code that logs each letter of the message using map.
console.log("\n3b------------------------")
var string3b = array3a.map(mapLetters).join("\n") // prints spaces. using filter instead of map would give same result as 3a.
function mapLetters(input) {
    if (input !== " " && input !== "!") {
        return input
    }
}
console.log(string3b)


// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.
console.log("\n3c------------------------")
var i = 0
while (i < array3a.length) {
    console.log(array3a[i]);
    i++;
}

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().
console.log("\n3d------------------------")
array3a.forEach(function(value) {
    console.log(value)
})

// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
console.log("\n4a------------------------")
var array4a = testString.split("")
var newArray4a = array4a.filter(value => value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i" && value.toLowerCase() !== "o" && value.toLowerCase() !== "u")
console.log(newArray4a.join(""))


// // 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.
// Having trouble with this one. giving me errors when I use typeof within the function.
console.log("\n4b------------------------")
// Tried to break this down into for loops to be easier for me to work through. Keeps returning "undefined" at the end. Not sure how to approach this using the same function as 4a.
function filterString(array) {
    for (let i=0; i<array.length; i++) {
        if (typeof array[i] !== "string") {
            console.log("Index " + array[i] + " is not a string.")
        }
        else {
            console.log(array[i])
        }
    }
}
console.log(filterString(array4a))


// ------------------------------- Consider the following variable:

var toonimals = [
    {name: "Itchy", animal: "mouse"},
    {name: "Stimpy", animal: "cat"},
    {name: "Daffy", animal: "duck"},
    {name: "Scratchy", animal: "cat"},
    {name: "Ren", animal: "dog"},
    {name: "Felix", animal: "cat"}
]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
console.log("\n5a------------------------")
var cats = toonimals.filter(value => value.animal === "cat")
console.log(cats)


//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"
// Having issues with this one. Having issues accessing object elements. Was eventually able to get it to kind of work with for loops but it would also output an "undefined" at the end.
console.log("\n5b------------------------")


// // Need to do something extra to access object value within class...
// var nonCats = toonimals.filter(value => value.animal !== "cat")
// var nonCatsNames = nonCats.name
// console.log(nonCats.name)


// // Define new array maybe to avoid for loops? So I can call out something like newToonimals.first.name. Couldn't get this to work. Trying something else.
// var newToonimals = [
//     first: {name: "Itchy", animal: "mouse"},
//     second: {name: "Stimpy", animal: "cat"},
//     third: {name: "Daffy", animal: "duck"},
//     fourth: {name: "Scratchy", animal: "cat"},
//     fifth: {name: "Ren", animal: "dog"},
//     sixth: {name: "Felix", animal: "cat"}
// ]


// // Trying different methods...ES6 stuff below. Thought it would be able to access the object but seems I'm still missing something.
// newToonimals = (array) => {
//     let newArr = array.filter(value => value.animal === "cat")
//     return newArr
// }
// console.log(newToonimals(toonimals))


// Going to revert to using for loops. Outputs mostly what I want, but also outputs an additional "undefined".
function newToonimals(array) {
    for (let i = 0; i < array.length; i++) {
        // console.log(toonimals[i])
        if (array[i].animal !== "cat") {
            console.log(array[i].name)
        }
    }
}
console.log(newToonimals(toonimals))


//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
console.log("\n5c------------------------")


// // Trying to access object elements within the class, but unable to do so. Going to try it out with for loops.
// toonType = object => {
//     `${toonimals.name} is a ${toonimals.animal}`   
// }
// console.log(toonType(toonimals))


// This works, but also outputs "undefined" like in 5b.
function toonType(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].name} is a ${array[i].animal}`)
    }
}
console.log(toonType(toonimals))