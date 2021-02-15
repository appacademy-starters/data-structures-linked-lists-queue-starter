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
        // Add node of val to head of linked list. (There's a bug here!)
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 0) {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }

    addToTail(val) {
        // Add node of val to tail of linked list

    }

    removeFromHead() {
        // Remove node at head

    }

    removeFromTail() {
        // Remove node at tail

    }

    peekAtHead() {
        // Return value of head node

    }

    peekAtTail() {
        // Return value of tail node
        
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
