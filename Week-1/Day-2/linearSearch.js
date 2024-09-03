function linearSearch(arr, target) { 
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === target) { 
            return i; // Index of the target value 
        } 
    } 
    return -1; // Target not found 
} 

array = [2, 4, 6, 8, 10];
array = [ 2, 3, 7, 7, 11, 15, 25];

console.time('linearSearch')
console.log(linearSearch(array, 6)); // Output: 2
console.timeEnd('linearSearch')

array = [2, 4, 6, 8, 10];
let mergeSort = require('./mergeSort')
sorted_array = mergeSort.getArray(array)


function binarySearch(arr, target) {
    left = 0;
    right = arr.length - 1;

    while(left <= right) {

        index = Math.floor((left + right) / 2)

        if (target > arr[index]) left = index + 1

        else if (target < arr[index]) right = index - 1

        else if (target == arr[index]) return index

    }

    return -1
}

array = [2, 4, 6, 8, 10];
array = [ 2, 3, 7, 7, 11, 15, 25];
console.time('binarySearch')
result = binarySearch(array, 7)
console.timeEnd('binarySearch')
if ( result == -1) console.log('Target not found in array.')
    else console.log('binarySearch = ', result)