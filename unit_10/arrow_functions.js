const doubled = arr => arr.map(val => val * 2);


const squareAndFindEvens = numbers => {
    var squares = numbers.map(num => num ** 2);
    var evens = squares.filter(square => square % 2 === 0);
    return evens;
}


const filterByType = (type, ...vals) => {
    return vals.filter(v => typeof v === type)
}