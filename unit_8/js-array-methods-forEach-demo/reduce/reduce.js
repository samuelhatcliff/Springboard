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

function partition(array, callback) {
    return array.reduce(function (acc, next) {
        if (callback(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[], []]);
}