// Code retrieved from geeksforgeeks.com

function partition(arr, low, high) {

    // Choose the pivot
    const pivot = arr[high];

    let i = low - 1;

    // Traverse arr[low..high] and move all smaller
    // elements on the left side. Elements from low to 
    // i are smaller after every iteration
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Move pivot after smaller elements and
    // return its position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// The QuickSort function implementation
function quickSort(arr, low, high) {
    if (low < high) {
        // pi is the partition return index of pivot
        const pi = partition(arr, low, high);

        // Recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}


module.exports = {
    // Function to print an array
    printArray: function(arr) {
        quickSort(arr, 0, arr.length - 1);
        // console.log(arr.join(" "));
        console.log(arr)
    }

}


// // Driver code
// const arr = [10, 7, 8, 9, 1, 5];
// console.log("Given array is");
// printArray(arr);

// quickSort(arr, 0, arr.length - 1);

// console.log("\nSorted array is");
// printArray(arr);
