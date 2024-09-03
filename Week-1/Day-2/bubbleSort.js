function bubbleSort(arr) { 
    let len = arr.length; 

    for (let i = 0; i < len - 1; i++) { 
        swap_made = false
        for (let j = 0; j < len - i - 1; j++) { 
            if (arr[j] > arr[j + 1]) { 
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap 
                swap_made = true
            }
        } 

        if (swap_made == false)
            break
    } 
    return arr; 
}

array = [64, 34, 25, 12, 22, 11, 90];
console.time('bubbleSort')
console.log(bubbleSort(array));
console.timeEnd('bubbleSort')


array = [64, 34, 25, 12, 22, 11, 90];
var mergeSort = require('./mergeSort')
console.time('mergeSort')
mergeSort.printArray(array)
console.timeEnd('mergeSort')

array = [64, 34, 25, 12, 22, 11, 90];
var quickSort = require('./quickSort')
console.time('quickSort')
quickSort.printArray(array)
console.timeEnd('quickSort')
