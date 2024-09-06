function evenOnly(numbers) {
    const evenArray = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenArray.push(number);
        }
    }
    return evenArray;
}

const numbers = [2, 3, 5, 6, 8, 4];
// const result = evenOnly(numbers);
// console.log('Even array:', result);


function sumOfEven(numbers) {
    let sum = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            sum += num
        }
    }
    return sum;
}

const result = sumOfEven(numbers);
console.log('sum of even:', result);