// Node class is implemented for you, no need to look for bugs here!
class LinkedListNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

    }

    addToTail(val) {
        // Add node of val to tail of linked list. (There's a bug here!)
        let newNode = new LinkedListNode(data)
        if (!head) {
            head = newNode
            return head
        }
        let curr = head
        while (curr) {
            curr = current.next
        }
        curr.next = newNode
        return head
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
}

module.exports = {
    LinkedList,
    LinkedListNode
}
