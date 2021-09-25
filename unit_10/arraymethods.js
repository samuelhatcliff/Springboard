alert('suu');


function hasOddNumber(arr) {
    arr.some(function (val) {
        if (val % 2 !== 0) {
            return true;
        }
    })
    return false
}