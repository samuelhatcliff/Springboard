//1 
{ 1, 2, 3, 4 }
//2
'ref'
//3
0: { Array(3) => true }
1: { Array(3) => false }
//4
function hasDuplicate(arr) {
    const arrSet = new Set(arr);
    if (arr.length > arrSet.size) {
        return true;
    }
    else { return false }
}
//5
function vowelCount(str) {
    const newStr = str.toLowerCase();
    let myMap = new Map();
    const vowels = 'aeiou';
    for (let i = 0; i < newStr.length; i++) {
        if (vowels.indexOf(newStr[i]) !== -1) {
            if (myMap.has(newStr[i])) {
                myMap.set(newStr[i], myMap.get(newStr[i]) + 1)
            }
            else {
                myMap.set(newStr[i], 1);
            }
        }
    }
    return myMap;
}