const chai = require('chai');
const expect = chai.expect;

const solution = require('../lib/doubly-linked-list');

let DoubleLinkedList = null;

if (solution !== null) {
    ({ Node, DoubleLinkedList } = solution);
}

describe('Node Constructor', () => {
    it('Should exist', () => {
        expect(Node).to.exist;
    });

    it('Should be a function (ES6 classes are "special functions")', () => {
        expect(Node).to.be.a('function');
    });

    it('Should have "value", "previous" and "next" properties', () => {
        node = new Node('A');
        expect(node).to.have.property('value');
        expect(node).to.have.property('next');
        expect(node).to.have.property('previous');  
    });
});

describe('DoubleLinkedList Constructor', () => {
    it('Should exist', () => {
        expect(DoubleLinkedList).to.exist;
    });

    it('Should be a function (ES6 classes are "special functions")', () => {
        expect(DoubleLinkedList).to.be.a('function');
    });

    it('Should have head, tail, and length properties', () => {
        const doubleLinkedList = new DoubleLinkedList();
        expect(doubleLinkedList).to.have.property('head');
        expect(doubleLinkedList).to.have.property('tail');
        expect(doubleLinkedList).to.have.property('length');
    });

    it('Should not implement an Array to store values', () => {
        for (let property in DoubleLinkedList) {
            expect(Array.isArray(DoubleLinkedList[property])).to.equal(false);
        }
    });
});

describe('DoubleLinkedList Methods', () => {
    let list;
    beforeEach(() => list = new DoubleLinkedList());

    context('addToHead()', () => {
        it('that sets head and tail on first insert', () => {
            const expected = Math.random();

            list.addToHead(expected);

            const tailResult = list.tail.value;
            const headResult = list.head.value;

            expect(tailResult).to.equal(expected);
            expect(headResult).to.equal(expected);
        });

        it("that sets the next and previous values on nodes appropriately on an insert", () => {
            const nodeValue1 = Math.random();
            const nodeValue2 = Math.random();
            const nodeValue3 = Math.random();

            list.addToHead(nodeValue1);
            list.addToHead(nodeValue2);
            list.addToHead(nodeValue3);

            const head = list.head;
            const tail = list.tail;
            const middle = list.head.next;

            expect(tail.previous.value).to.equal(nodeValue2);
            expect(head.next.value).to.equal(nodeValue2);

            expect(middle.next.value).to.equal(nodeValue1);
            expect(middle.previous.value).to.equal(nodeValue3);

            expect(tail.next).to.equal(null);
            expect(head.previous).to.equal(null);
        });

        it('that increases the size with each insert', () => {
            const upperBound = Math.ceil(Math.random() * 100) + 10;

            for (let i = 0; i < upperBound; i += 1) {
                expect(list.size()).to.equal(i);
                list.addToHead(i);
                expect(list.size()).to.equal(i + 1);
            };
        });
    });

    context('peekAtHead()', () => {
        it('that returns undefined for an empty list', () => {
            const result = list.peekAtHead();
            expect(result).to.be.undefined;
        });

        it("that returns the value of the head for a non-empty list", () => {
            const expected = Math.random();

            list.addToHead(expected);
            let result = list.peekAtHead();
            expect(result).to.equal(expected);

            list.addToHead(100);
            result = list.peekAtHead();
            expect(result).to.equal(100);

            list.head = list.head.next;
            if(list.head){
                list.head.previous = null;
            }
            result = list.peekAtHead();
            expect(result).to.equal(expected);

            list.head = list.head.next;
            if(list.head){
                list.head.previous = null;
            }
            result = list.peekAtHead();
            expect(result).to.be.undefined;
        });
    });

    context('removeFromHead()', () => {
        it('that returns undefined for an empty list', () => {
            const result = list.removeFromHead();

            expect(result).to.be.undefined;
        });

        it("that updates the length for a non-empty list", () => {
            const upperBound = Math.ceil(Math.random() * 100) + 10;

            for (let i = 0; i < upperBound; i += 1) {
                list.addToHead(i * upperBound);
            }

            for (let j = upperBound - 1; j >= 0; j--) {
                list.removeFromHead();
                expect(list.size()).to.equal(j);
            }
        });

        it('that removes and returns the value from the tail', () => {
            const upperBound = Math.ceil(Math.random() * 100) + 10;

            for (let i = 0; i < upperBound; i += 1) {
                list.addToHead(i * upperBound);
            };

            for (let j = upperBound - 1; j >= 0; j--) {
                const result = list.removeFromHead();
                expect(result).to.equal(j * upperBound);
            }
        });
    });

    context('addToTail()', () => {
        it('that sets head and tail on first insert', () => {
            const expected = Math.random();

            list.addToTail(expected);

            const tailResult = list.tail.value;
            const headResult = list.head.value;

            expect(tailResult).to.equal(expected);
            expect(headResult).to.equal(expected);
        });

        it("that sets the next and previous values on nodes appropriately on an insert", () => {
            const nodeValue1 = Math.random();
            const nodeValue2 = Math.random();
            const nodeValue3 = Math.random();

            list.addToTail(nodeValue1);
            list.addToTail(nodeValue2);
            list.addToTail(nodeValue3);

            const tail = list.tail;
            const head = list.head;
            const middle = list.tail.previous;

            expect(tail.previous.value).to.equal(nodeValue2);
            expect(head.next.value).to.equal(nodeValue2);

            expect(middle.next.value).to.equal(nodeValue3);
            expect(middle.previous.value).to.equal(nodeValue1);

            expect(tail.next).to.equal(null);
            expect(head.previous).to.equal(null);
        });

        it('that increases the size with each insert', () => {
            const upperBound = Math.ceil(Math.random() * 100) + 10;

            for (let i = 0; i < upperBound; i += 1) {
                expect(list.size()).to.equal(i);
                list.addToTail(i);
                expect(list.size()).to.equal(i + 1);
            };
        });
    });


    context('peekAtTail()', () => {
        it('that returns undefined for an empty list', () => {
            const result = list.peekAtTail();
            expect(result).to.be.undefined;
        });

        it("that returns the value of the tail for a non-empty list", () => {
            const expected = Math.random();

            list.addToHead(expected);
            let result = list.peekAtTail();
            expect(result).to.equal(expected);

            list.addToHead(100);
            result = list.peekAtTail();
            expect(result).to.equal(expected);

            list.removeFromHead();
            result = list.peekAtTail();
            expect(result).to.equal(expected);

            list.removeFromHead();
            result = list.peekAtTail();
            expect(result).to.be.undefined;
        });
    });

    
    context('removeFromTail()', () => {
        it('that returns undefined for an empty list', () => {
            const result = list.removeFromTail();

            expect(result).to.be.undefined;
        });

        it("that updates the length for a non-empty list", () => {
            const upperBound = Math.ceil(Math.random() * 100) + 10;

            for (let i = 0; i < upperBound; i += 1) {
                list.addToTail(i * upperBound);
            }

            for (let j = upperBound - 1; j >= 0; j--) {
                list.removeFromTail();
                expect(list.size()).to.equal(j);
            }
        });

        it('that removes and returns the value from the tail', () => {
            const upperBound = Math.ceil(Math.random() * 100) + 10;

            for (let i = 0; i < upperBound; i += 1) {
                list.addToTail(i * upperBound);
            };

            for (let j = upperBound - 1; j >= 0; j--) {
                const result = list.removeFromTail();
                expect(result).to.equal(j * upperBound);
            }
        });
    });

    describe('size', () => {
        let linkedList = new DoubleLinkedList();

        it('Should return the length of the list', () => {
            expect(linkedList.size()).to.equal(0);
            linkedList.addToTail('A');
            expect(linkedList.size()).to.equal(1);
            linkedList.addToTail('B');
            expect(linkedList.size()).to.equal(2);
            linkedList.removeFromTail();
            expect(linkedList.size()).to.equal(1);
        });
        it('Should always keep track of the length of the list', () => {
            expect(linkedList.length).to.equal(1);
            linkedList.addToTail('C');
            expect(linkedList.length).to.equal(2);
            linkedList.addToHead('A');
            expect(linkedList.length).to.equal(3);
            linkedList.removeFromTail();
            expect(linkedList.length).to.equal(2);
            linkedList.removeFromHead();
            expect(linkedList.length).to.equal(1);
        });
    });
});
