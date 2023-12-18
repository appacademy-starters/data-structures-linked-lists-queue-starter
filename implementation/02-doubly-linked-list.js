// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val)
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
       
        // Write your hypothesis on the time complexity of this method here
        // steps for removing from head
        // step one if the length of the list is 1 
        let firstNode = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return firstNode.value;
        }else if( this.length > 1){
            let SecondNode = firstNode.next;
            SecondNode.prev = null;
            this.head = SecondNode;
            this.length--;
            return firstNode.value;

        }
    }

    removeFromTail() {
        // Remove node at tail
        // Remove node at head
        let lastNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return lastNode.value;
        } else if (this.length > 1) {
            
            let beforeLastNode = this.tail.prev;
            beforeLastNode.next = null;
            this.tail = beforeLastNode;
            this.length--;
            return lastNode.value;

        }
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(this.length > 0){
            return this.head.value;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if (this.length > 0) {
            return this.tail.value;
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
