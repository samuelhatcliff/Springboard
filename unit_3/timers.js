//countdown 
function countdown(num) {
    const myInterval = setInterval(decrement, 1000)
    function decrement() {
        if (num > 0) {
            console.log(num);
            num -= 1;
        }
        else if (num <= 0) {
            console.log("Done!")
            clearInterval(myInterval)
        }
    }
}

//randomGame
function randomGame() {
    let counter = 0;
    let num = 0;
    const myFunc = function () {
        num = Math.random();
        counter += 1;
        console.log(`number of tries: ${counter}, current num: ${num}`)
        if (num >= .75) {
            console.log(counter);
        }
        else {
            setTimeout(myFunc, 1000)
        }
    }
    setTimeout(myFunc(), 1000)
}