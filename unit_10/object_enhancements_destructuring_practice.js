// // const doubled = arr => arr.map(val => val * 2);


// // const squareAndFindEvens = numbers => {
// //     var squares = numbers.map(num => num ** 2);
// //     var evens = squares.filter(square => square % 2 === 0);
// //     return evens;
// // }
//OBJECT ENHANCEMENTS
// function createInstructor(firstName, lastName) {
//     return {
//         firstName,
//         lastName
//     }
// }

// let favNum = 42;
// const instructor = {
//     firstName = "Colt",
//     [favNum]: "That is my favorite!"
// }

// const instructor = {
//     firstName: "colt",
//     sayHi() { return "Hi!" },
//     sayBye() { return `${this.firstName} says bye` },
// }

// function createAnimal(species, verb, noise) {
//     return {
//         species, [verb]() { return noise; }
//     }
// }

// // function makePerson(first, last, age) {
// //     return {
// //         first, last, age,
// //     }
// // }

// // const mathStuff = {
// //     x: 200,
// //     add(a, b) {
// //         return a + b;
// //     },
// //     square(a) {
// //         return a * a;
// //     }
// // }

// const teaOrder = {
//     variety: 'oolong',
//     teaName: 'winter sprout',
//     origin: 'taiwan',
//     price: 12.99,
//     hasCaffeine: true,
//     quantity: 3
// }

// // Object Destructuring: 
// const { price, quantity, teaName, ...others } = teaOrder;
// //creates variables with values of the values of the names of the variables in the object
// //none of these changes alter the orinal object 
// const { brewTemp = 175 } = teaOrder

// const { teaName: tea } = teaOrder;

// function checkout(tea) {
//     const { quantity, price } = tea;
//     return quantity * price;
// }

// checkout(teaOrder);
// //default values

// const order1 = {
//     variety: 'green',
//     teaName: 'silver needle',
//     origin: 'taiwan',
//     price: 12.99,
//     hasCaffeine: true
// }
// function checkout(tea) {
//     const { quantity = 1, price } = tea;
//     return quantity * price;
// }

// checkout(teaOrder);
// //will return 12.99 because default quantity was set to 1

// //We can apply the same thing to arrays. desctructuring is done off of positions (indexes)

// const students = [
//     { name: 'Drake', gpa: 4.6 },
//     { name: 'Henrietta', gpa: 4.4 },
//     { name: "tung", gpa: 4.0 },
//     { name: 'Harry', gpa: 3.8 },
// ]
// const [topStudent, secondBest, , fourth] = students;
// //the variables are automatically assigned based off of position in array.
// //We can use a comma to skip a position. see harry. we could also use the rest 
// //operator to include the rest of the students. 

// //we can do the same thing with parameters of a function
// const longJumpResults = ['Tammy', 'Jessica', 'Violet'];

// function awardMedals([gold, silver, bronze]) {
//     return {
//         gold, silver, bronze
//     }
// }

// awardMetals(longJumpResults);

// //swapping values 

// let delicious = "mayo";
// let disgusting = "whipped cream";

// //what wed normally do...
// let temp = delicious;
// delicious = disgusting;
// disgusting = tempt;

// //now what we can do is destructure...
// [digusting, delicious] = [dellicious, digusting]
