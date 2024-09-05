function add(value1, value2) {
    const total = value1 + value2;
    return total
}

// console.log(add(30, 20))

function add2(price1, price2) {
    return price1 + price2
}

// console.log(add2(40, 20))

function multiMath(num1, num2) {
    const sum = num1 + num2
    const diff = num1 - num2
    const multi = sum * diff;
    const division = multi / 2
    return division
}

const output = multiMath(20, 10);
console.log(output)


// is even
function isEven(value) {
    if (value % 2 === 0) {
        return true
    }
    else {
        return false;
    }
}

console.log(isEven(12))
console.log(isEven(123))

// is odd
function isOdd(number) {
    if (number % 2 === 1) {
        return true;
    }
    return false;
}

console.log(isOdd(11));
console.log(isOdd(112));