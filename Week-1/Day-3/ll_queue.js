// Code retrieved from geeksforgeeks.com

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (!this.front) {
            this.front = newNode;
        } else {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        this.size++;
    }

    dequeue() {
        if (!this.front) return null;
        const removed = this.front;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        this.size--;
        return removed.data;
    }

    peek() {
        return this.front ? this.front.data : null;
    }

    isEmpty() {
        return this.size === 0;
    }
    size_fun() {
        return this.size
    }
}

module.exports = {
    print_list: function() {
        const queue = new Queue();
        queue.enqueue('a');
        queue.enqueue('b');
        console.log(queue.size_fun())
        // console.log(queue.dequeue());
        console.log(queue.peek());
        // console.log(queue.isEmpty()); 
        // console.log(queue.dequeue());
        // console.log(queue.dequeue());
        // console.log(queue.isEmpty());
    }
}


