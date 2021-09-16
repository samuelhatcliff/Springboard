const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)

const findMin = (...args) => args.reduce((min, currVal) => { currVal < min ? currVal : min; })
// function findMin(...args) {
//     return args.reduce((min, currVal) => {
//         return currVal < min ? currVal : min;
//     })
// }

const demoObj = {
    "name": "jason",
    "age": 18,
}
const demoObj2 = {
    "favorite color": "purple"
}
const mergeObjects = (object1, object2) => ({ ...object1, ...object2 });

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(args => args * 2)]

const removeRandom;
//I don't understand this one...

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => {
    let newObject = { ...obj }
    newObject[key] = val;
    return newObject;
}

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key];
}

const combine = (...obj1, ...obj2) => {
    { obj1, obj2 }
}

const update = (obj, key, val) => {
    let newObject = { ...obj }
    newObject[key] = val;
    return newObject
}