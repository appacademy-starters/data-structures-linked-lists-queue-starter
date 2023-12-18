// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        debugger
       const newNode = new SinglyLinkedNode(val,null);
       newNode.next = this.head;
       this.head = newNode;
       this.length++;
       return this;
      
  }
        
    

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val, null);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        //first we should 
        curr.next = newNode;
        this.length++;
        return this;
       
    }

    removeFromHead() {
        //  ✔ Should return undefined if the list is empty
        // if there is more than one node 
        if(this.length > 1){
            // find the first Node
            let firstNode = this.head;
            // store the first Node in a different variable
            let removedNode = this.head;
            // re assign the head to a different property
            this.head = firstNode.next;
            // modify the length
            this.length--;
            // return the removed node 
            return removedNode;
        }else if(this.length ===  1){
            let firstNode = this.head;
            let removedNode = this.head;
            this.head = firstNode.next;
            // in addition to previous steps assign the firstNode's next to null
            firstNode.next = null;
            this.length--;
            return removedNode;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        // there is no way to go back but there is a way to go forward and stop at the right time
        // the before the next node value 
        if(this.head){
            if(this.length === 1){
                this.head = null
                this.length--;
                return;
            }
            let current = this.head;
           
            while(current.next.next){
                current = current.next;
            }
            let nextNode = current.next
            current.next = null;
            
           
            this.length--;
            return nextNode;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(this.length > 0){
        return this.head.value;
         } // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if(this.length >0){
            let curr = this.head
            for(; curr ; curr = curr.next ){
                console.log(`${curr.value}`);
            }
            console.log("NULL");
        }
        
        
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
// linkedList = new SinglyLinkedList();
// linkedList.addToHead('B')
// console.log(linkedList.addToHead('A'))