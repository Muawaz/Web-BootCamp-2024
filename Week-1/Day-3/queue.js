class Queue { 
    constructor() { 
        this.items = []; 
    } 
    enqueue(element) { 
        this.items.push(element); 
    } 
    dequeue() { 
        return this.items.shift(); 
    } 
    peek() { 
        if (!this.size()) return 'Nothing'
        return this.items[0]; 
    } 
    isEmpty() { 
        return this.items.length === 0; 
    } 
    size() { 
        return this.items.length; 
    }
    clear() {
        this.items = []
        return 'Cleared'
    }
    print() {
        console.log('Items in the array:');
        
        for (let item of this.items) console.log(item);         
    }
} 

// Example usage 

console.time('Array_Queue')
const queue = new Queue(); 
queue.enqueue('a'); 
queue.enqueue('b'); 
console.log(queue.size());
// queue.print();
// console.log(queue.dequeue()); // Output: 1
// console.log(queue.clear());
console.log(queue.peek()); // Output: 2
console.timeEnd('Array_Queue')


var ll_queue = require('./ll_queue')
console.time('List_Queue')
ll_queue.print_list()
console.timeEnd('List_Queue')