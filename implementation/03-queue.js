const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const newNode = new SinglyLinkedNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.length;
        }else {
           let lastNode = this.tail;
           lastNode.next = newNode;
           this.tail = newNode;
            this.length++;
            return this.length;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        let firstNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return firstNode.value;
            
        }else if(this.length > 1){
           this.head = firstNode.next;
           this.length--;
            return firstNode.value;
        } else{
            return null;
        }
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
