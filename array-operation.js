
// function sumOfNumbers(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         sum += number
//     }
//     return sum;
// }


// const numbers = [1, 5, 7, 8];
// const result = sumOfNumbers(numbers);
// console.log('sum of numbers', result);



// function sumOfNumbers(numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const number = numbers[i];
//         total += number;
//     }
//     return total
// }


// const numbers = [1, 5, 7, 8];
// const result = sumOfNumbers(numbers);
// console.log('sum of numbers', result);


function sumOfNumbers(numbers) {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
        const number = numbers[i];
        sum += number
        i++
    }
    return sum;
}


const numbers = [1, 5, 7, 8];
const result = sumOfNumbers(numbers);
console.log('sum of numbers', result);