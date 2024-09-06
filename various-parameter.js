
function stringSize(str) {
    const strLength = str.length;
    if (strLength % 2 === 0) {
        console.log(str)
        return true
    }
    else {
        console.log(str)
        return false
    }
}

// console.log(stringSize('Uttara'))
// console.log(stringSize('chipa'))

function doubleOrTriple(num, doubleItOrTriple) {
    if (doubleItOrTriple) {
        return num * 2
    }
    return num * 3
}

// console.log(doubleOrTriple(10, true))
// console.log(doubleOrTriple(10, false))


function arrayFunc(arr) {
    return arr.length
}


const numbers = [12, 34, 56, 8, 9, 29, 2];
const result = arrayFunc(numbers);
// console.log(result)



function objectFunc(info) {
    const personAge = info.age;
    return personAge
}

const infos = {
    name: 'adam',
    age: 34,
    isMarried: true
}

const output = objectFunc(infos);
console.log(output)