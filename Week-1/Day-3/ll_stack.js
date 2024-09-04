// Code retrieved from geeksforgeeks.com

// Javascript program to implement a stack using singly
// linked list

// Class representing a node in the linked list
class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

// Class to implement stack using a singly linked list
class Stack {

    // Constructor to initialize the stack
    constructor() { this.head = null; }

    // Function to check if the stack is empty
    isEmpty() {
    
        // If head is null, the stack is empty
        return this.head === null;
    }

    // Function to push an element onto the stack
    push(new_data) {
    
        // Create a new node with given data
        const new_node = new Node(new_data);

        // Check if memory allocation for the new node
        // failed
        if (!new_node) {
            console.log("\nStack Overflow");
            return;
        }

        // Link the new node to the current top node
        new_node.next = this.head;

        // Update the top to the new node
        this.head = new_node;
    }

    // Function to remove the top element from the stack
    pop() {
    
        // Check for stack underflow
        if (this.isEmpty()) {
            console.log("\nStack Underflow");
        }
        else {
        
            // Assign the current top to a temporary
            // variable
            let temp = this.head;

            // Update the top to the next node
            this.head = this.head.next;

            // Deallocate the memory of the old top node
            console.log(temp.data)
            temp = null;
        }
    }

    // Function to return the top element of the stack
    peek() {
    
        // If stack is not empty, return the top element
        if (!this.isEmpty())
            return this.head.data;
        else {
            console.log("\nStack is empty");
            return Number.MIN_VALUE;
        }
    }
}

module.exports = {
    print_list: function() {

        // Driver program to test the stack implementation
        const st = new Stack();

        // Push elements onto the stack
        st.push('aa');
        st.push('bb');

        // Print top element of the stack
        // console.log("Top element is " + st.peek());
        console.log(st.peek());


        // removing two elemements from the top
        // console.log("Removing two elements...");
        // st.pop();
        st.pop();

        // Print top element of the stack
        // console.log("Top element is " + st.peek());

    }
}


