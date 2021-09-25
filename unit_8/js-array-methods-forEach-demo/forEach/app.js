

// function doubleValues(arr) {
// 	let newArr = [];
// 	arr.forEach(function (val) {
// 		newArr.push(val * 2)
// 	}
// 	)
// 	return newArr;
// }

// const myArr = [1, 2, 3, 4, 5, 6];

// function onlyEvens(arr) {
// 	let newArr = [];
// 	arr.forEach(function (val) {
// 		if (val % 2 === 0) {
// 			newArr.push(val);
// 		}
// 	})
// 	return newArr;
// }

// function showFirstAndLast(arr) {
// 	let newArr = [];
// 	arr.forEach(function (val) {
// 		let shortened = ""
// 		shortened += val[0] + val[val.length - 1];
// 		newArr.push(shortened)
// 	})
// 	return newArr;
// }


// function addKeyAndValue(arr, key, value) {
// 	let newArr = [];
// 	arr.forEach(function (val) {
// 		let newObj = val;
// 		newObj[key] = value;
// 		newArr.push(newObj);
// 	})
// 	return newArr;
// }

// function vowelCount(string) {
// 	string = string.toLowerCase();
// 	newArr = Array.from(string);
// 	let newObj = {};
// 	const vowels = 'aeiou'
// 	newArr.forEach(function (letter) {
// 		if (vowels.indexOf(letter) !== -1) {
// 			let count = 0;
// 			newArr.forEach(function (repeated) {
// 				if (letter === repeated) {
// 					count += 1;
// 				}
// 			})
// 			newObj[letter] = count;
// 		}
// 	})
// 	return newObj;
// }


// function doubleValuesWithMap(arr) {
// 	let newArr = [];
// 	arr.map(function (val) {
// 		newArr.push(val * 2)
// 	})
// 	return newArr;
// }

// function valTimesIndex(arr) {
// 	let newArr = [];
// 	arr.map(function (val) {
// 		newArr.push(val * arr.indexOf(val))
// 	}
// 	)
// 	return newArr;
// }


// function extractKey(objArr, key) {
// 	let newArr = [];
// 	objArr.map(function (val) {
// 		newValue = val[key];
// 		newArr.push(newValue)
// 	}
// 	)
// 	return newArr;
// }

// function extractFullName(objArr) {
// 	let newArr = [];
// 	objArr.map(function (val) {
// 		newArr.push(`${val.first} ${val.last}`);
// 	})
// 	return newArr;
// }

// const demo = [{ first: 'Elie', last: "Schoppik" },
// { first: 'Tim', last: "Garcia", isCatOwner: true },
// { first: 'Matt', last: "Lane" },
// { first: 'Colt', last: "Steele", isCatOwner: true }]

// console.log(demo[0].first)


// function filterByValue(objArr, key) {
// 	return objArr.filter(function (val) {
// 		return val[key] !== undefined;
// 	}
// 	)
// }

// function find(arr, value) {
// 	return arr.filter(function (val) {
// 		return value === val;
// 	})
// }

// function findInObj(objArr, key, searchValue) {
// 	return objArr.filter(function (val) {
// 		if (val[key] === searchValue) {
// 			return val;
// 		}
// 	})[0];
// }

// function removeVowels(string) {
// 	const vowels = "aeiou"
// 	string = string.toLowerCase();
// 	let newArr = Array.from(string);
// 	console.log(newArr);
// 	return newArr.filter(function (val) {
// 		if (vowels.indexOf(val) === -1 && val !== " ") {
// 			return val;
// 		}
// 	}).join("");
// }

function doubleOddNumbers(arr) {
	return arr.filter(function (val) {
		return val % 2 !== 0;
	}).map(function (val) { return val * 2 })
}

