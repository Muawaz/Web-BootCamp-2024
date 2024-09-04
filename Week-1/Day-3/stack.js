class Stack { 
    constructor() { 
        this.items = []; 
    } 
    push(element) { 
        this.items.push(element); 
    } 
    pop() { 
        return this.items.pop(); 
    } 
    peek() { 
        return this.items[this.items.length - 1]; 
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
console.time('Array_Stack')
const stack = new Stack(); 
stack.push('a'); 
stack.push('b'); 
console.log(stack.pop()); // Output: 2 
console.log(stack.peek()); // Output: 1
console.timeEnd('Array_Stack')


let ll_stack = require('./ll_stack')
console.time('List_Stack')
ll_stack.print_list()
console.timeEnd('List_Stack')
