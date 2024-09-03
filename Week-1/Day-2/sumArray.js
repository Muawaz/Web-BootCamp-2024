function sumArray(arr) { 
    let sum = 0
    for (let index = 0; index < arr.length; index++) {
        int_index = parseInt(arr[index])
        if (Number.isInteger(arr[index])) sum += arr[index]
        else if (!Number.isNaN(int_index)) sum +=  int_index     
    }
    // return arr.reduce((sum, current) => sum + current, 0);
    return sum 
} 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let array = 0


rl.on('line', (line) => {
    array = line.split(' ')

    console.log(array)
    console.log('sum of the given array = ', sumArray(array))

    rl.close()
})



// console.log(sumArray([1, 2, "yes", true, 5])); // Output: 15
console.log("Enter number for the array with spaces = ")