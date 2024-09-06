// Take four parameters. Multiply the four numbers and 
// then return the result

function multiplyNumbers(a, b, c, d) {
    const multiply = a * b * c * d;
    return multiply;
}

// const result = multiplyNumbers(2, 2, 2, 2);
// console.log('Multiply: ', result)


// Take a number if the number is odd multiply it by 2 and 
// return the result. If the number is even divide it by 
// two and return the result.


function evenOrOdd(number) {
    if (number % 2 === 1) {
        const multi = number * 2;
        return multi;
    }
    else {
        const divided = number / 2;
        return divided;
    }
}


// const result = evenOrOdd(12);
// console.log(result);


// Write a function called make_avg() which will take an
// array of integers and the size of that array and return
// the average of those values.

function makeAvg(numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;   
    }
    const avg = total / numbers.length;
    return avg
}

const numberArray = [2, 4, 6, 4,20];
const result = makeAvg(numberArray);
console.log('value of avg:', result);