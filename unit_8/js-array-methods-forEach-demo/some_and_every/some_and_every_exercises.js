
// function hasOddNumber(arr) {
// 	return arr.some(function (item) {
// 		return item % 2 !== 0;
// 	})
// }

// function containsZero(arr) {
// 	return arr.some(function (item) {
// 		return item === 0;
// 	})
// }

// function hasOnlyOddNumbers(arr) {
// 	return arr.every(function (item) {
// 		return item % 2 !== 0;
// 	})
// }

// function hasNoDuplicates(arr) {
// 	newArr = [];
// 	for (item of arr) {
// 		if (newArr.includes(item) === false) {
// 			newArr.push(item);
// 		}
// 	}
// 	return newArr;

// }

// function hasNoDuplicates(arr) {
// 	let newArr = [];
// 	for (item of arr) {
// 		if (newArr.includes(item) === false) {
// 			arr.splice(arr.indexOf(item), 1)
// 			newArr.push(item);
// 		}
// 	}
// 	return arr.every(function (val) {
// 		return newArr.includes(val) !== true;
// 	})
// }



// function hasCertainKey(arrObj, key) {
// 	return arrObj.every(function (obj) {
// 		return obj[key] !== undefined;
// 	})
// }


// function hasCertainValue(arrObj, key, value) {
// 	return arrObj.every(function (obj) {
// 		return obj[key] === value;
// 	})
// }
const users = [
    { username: 'mlewis' },
    { username: 'akagen' },
    { username: 'msmith' }
];


function extractValue(arrObj, key) {
    return arrObj.reduce(function )
}