const colors = ['teal', 'cyan', 'peach', 'purple'];

function yell(val, i) {
	const caps = val.toUpperCase();
	console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell);

const prices = [30.99, 19.99, 2.5, 99.0];
let total1 = 0;
prices.forEach(function (price) {
	total1 += price;
});
console.log(total1);

let total2 = 0;
for (let price of prices) {
	total2 += price;
}
console.log(total2);

// Our own version of forEach:
function forEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
}

forEach(colors, function (color, i) {
	console.log(color.toUpperCase(), 'at index of:', i);
});

colors.forEach(function (color, i) {
	console.log(color.toUpperCase(), 'at index of:', i);
});

function extractValue(objArr, key) {
	return objArr.reduce(function (acc, next) {
		acc.push(next[key]);
		return acc;
	}, [])
}

function vowelCount(str) {
	const newStr = str.toLowerCase().split("")
	const vowels = 'aeiou'
	return newStr.reduce(function (acc, next) {
		if (vowels.indexOf(next) !== -1) {
			if (acc[next]) {
				acc[next] += 1
			}
			else {
				acc[next] = 1
			}
		}
		return acc
	}, {})
}

function addKeyAndValue(objArr, key, value) {
	return objArr.reduce(function (acc, next, index) {
		acc[index][key] = value;
		return acc
	}, objArr)
}