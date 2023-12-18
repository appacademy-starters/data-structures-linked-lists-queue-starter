// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        return this.length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let curr = this.head;
        let sum = this.head.value;
        while(curr.next){
            curr = curr.next;
            sum += curr.value;
        }
        return sum;
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        let curr = this.head;
        let sum = this.head.value;
        while (curr.next) {
            curr = curr.next;
            sum += curr.value;
        }
        return sum/this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let curr = this.head
        for(let i = 0; i < n; i++){
            curr = curr.next;
        }
        return curr;
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        debugger
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        
        let curr = this.head;
        for(let i = 1 ; i < Math.round(this.length/2) ;i++){
            curr = curr.next;
        }
        return curr;
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        let current = this.head;
        let reversedList = new SinglyLinkedList();

        while (current !== null) {
            // Create a new node with the same value
            const newNode = new SinglyLinkedNode(current.value);

            // Insert the new node at the beginning of the reversed list
            newNode.next = reversedList.head;
            reversedList.head = newNode;

            // Move to the next node in the original list
            current = current.next;
        }

        return reversedList;
    
    
    

        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        let current = this.head;
        let prev = null;

        while (current !== null) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }

        this.head = prev; 

        // Write your hypothesis on the time complexity of this method here
    }
}

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

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        let curr = this.head;
        for (let i = 1; i < Math.round(this.length / 2); i++) {
            curr = curr.next;
        }
        return curr;
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let current = this.head;
        let reversedList = new SinglyLinkedList();

        while (current !== null) {
            // Create a new node with the same value
            const newNode = new SinglyLinkedNode(current.value);

            // Insert the new node at the beginning of the reversed list
            newNode.next = reversedList.head;
            reversedList.head = newNode;

            // Move to the next node in the original list
            current = current.next;
        }

        return reversedList;
    
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prev = null;
        let current = this.head;

        while (current !== null) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }

        // Update the tail to the original head
        this.tail = this.head;

        // Update the head to the last node
        this.head = prev;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
// list = new SinglyLinkedList(); 
// list.addToTail(1);
// list.addToTail(2);
// list.addToTail(3);

// list.findMid()

// list.addToTail(4);
// list.addToTail(5);
// list.addToTail(6);
// list.findMid();