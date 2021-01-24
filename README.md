# Linked List and Queue Project

Clone the project from the [starter](https://github.com/appacademy-starters/data-structures-linked-lists-queue-starter).

## Learning Goals

* Compare and contrast the properties and operations of an Array and Linked List
* Identify the mechanics and complexity of adding and removing elements from a Linked List
* Implement a Linked List
* Traverse and search through Linked Lists
* Understand the mechanics of a Doubly Linked List, and the tradeoffs from a Singly Linked List
* Implement a Queue data structure using Linked Lists
* Select a Linked List, Doubly Linked List or Queue when they are the appropriate tool for solving a problem

# Part 1: Implementing a Linked List

Having been introduced to linked lists, you should have a clearer understanding about 
what makes a linked list different than an array. There are things that linked lists are better at
doing, but there are also areas where the linked list may fall short compared to the array. 

You've also explored an improvement on the original singly linked list with the doubly linked list, and how 
the queue data structure can function as a linked list. Let's explore some more and try to implement these
ourselves! We'll start with building a singly linked list, move up to a doubly linked list, and finally 
implementing a queue using the doubly linked list we built!

Starter code is provided for you in `/implementation`.

<br>

# Part 2: Practice Problems 

### Linked List Length

Given the head of a linked list, write a function to find the length of the linked list.

Example:  
```js
const list1 = new LinkedList()
list1.addToTail(1);
list1.addToTail(2);
list1.addToTail(3);
list1.addToTail(4);
            
listLength(list1);     // => 4
```

<br>

### Sum of Nodes

Given the head of a linked list, write a function to find the sum of the values of the nodes of the linked list.
The function should return 0 if the list is empty.

Example:  
```js
const list1 = new LinkedList();
list1.addToTail(1);
list1.addToTail(4);
list1.addToTail(5);
list1.addToTail(8);
            
sumOfNodes(list1);     // => 18
```

<br>

### Average Value of Nodes

Given a linked list, write a function that calculates the average of the values within the linked list.
Returns 0 is the list is empty.

Example:  
```js
const list1 = new LinkedList();
list1.addToTail(12);
list1.addToTail(6);
list1.addToTail(5);
list1.addToTail(13);
            
averageValue(list1);    // => 9
```

<br>

### Find the Nth Node

Given a linked list and position, N, write a function that returns the *node* located at that position within the 
linked list. Returns null if the Nth position doesn't exist.

Example:  
```js 
const list1 = new LinkedList();
list1.addToTail(13);
list1.addToTail(21);
list1.addToTail(32);
list1.addToTail(14);
list1.addToTail(53);

findNthNode(list1, 3);     // => 32 (node)
```  

<br>

### Find Mid Node

Given a linked list, write a function that returns the middle *node* within the linked list. 

Example:
```js 
const list1 = new LinkedList();
list1.addToTail(1);
list1.addToTail(2);
list1.addToTail(3);
list1.addToTail(4);
list1.addToTail(5);

findMid(list1);     // => 3 (node)

const list2 = new LinkedList();
list2.addToTail(1);
list2.addToTail(2);
list2.addToTail(3);
list2.addToTail(4);
list2.addToTail(5);
list2.addToTail(6);
            
findMid(list1);     // => 3 (node)
```
<br>

### Reverse Linked List

Given a linked list, write a function that returns the linked list in reverse order. 
(Can you do this in-place without creating a new linked list? Try it!)

Example: 
```js 
const list1 = new LinkedList();
list1.addToTail(1);
list1.addToTail(2);
list1.addToTail(3);
list1.addToTail(4);
list1.addToTail(5);
list1.addToTail(6);
            
reverseLinkedList(list1);     // => head -> 6 -> 5 -> 4 -> 3 -> 2 -> 1
```  
<br>

### Has Cycle

Given a linked list, write a function that returns whether or not the linked list has a cycle.

Example:
```js
const list1 = new LinkedList();
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

list1.head = node1;

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

hasCycle(list1);     // => true, the last node points back to a node previously passed in the list

const list2 = new LinkedList();
const node5 = new Node(1);
const node6 = new Node(2);
const node7 = new Node(3);
const node8 = new Node(4);

list2.head = node5;

node5.next = node6;
node6.next = node7;
node7.next = node8;

hasCycle(list2);     // => false, no nodes point back to a previous node
```
