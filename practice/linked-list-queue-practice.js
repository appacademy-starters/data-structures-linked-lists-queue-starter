// Basic implementation of Nodes and Linked List for you to use

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new Node(val);
        if (!this.head) {
            head = newNode;
            return this.head;
        }
        let curr = head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        return this.head;
    }

    listLength() {

    }

    sumOfNodes() {

    }

    averageValue() {

    }

    findNthNode(n) {

    }

    findMid() {

    }

    reverseLinkedList() {

    }
}

module.exports = {
    Node,
    LinkedList
}
