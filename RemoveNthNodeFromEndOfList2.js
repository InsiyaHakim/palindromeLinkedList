
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            previous: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let newNode = new Node(value);

        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }



    printList(node){
        if(node === null) return node;

        let currentNode = node;
        let result = [];
        while(currentNode !== null){
            result.push(currentNode.value);
            currentNode = currentNode.next
        }
        return result;
    }


    removeNthNodeFromEndOfList2(val){
        if(!this.head || !this.head.next) return null;

        let dummyNode = new Node(0);
        dummyNode.next = this.head;
        let leftPointer;
        let rightPointer = this.head;

        while (rightPointer && val > 1){
            rightPointer = rightPointer.next;
            val--;
        }

        if(!rightPointer || !rightPointer.next){
            leftPointer = this.head;
            while (leftPointer.next && leftPointer.next.next){
                leftPointer = leftPointer.next
            }
        }
        else {
            leftPointer = dummyNode;
            while (rightPointer && rightPointer.next) {
                leftPointer = leftPointer.next;
                rightPointer = rightPointer.next;
            }
        }
        leftPointer.next = rightPointer.next;
        return dummyNode.next;
    }//TC: 0(n) SC= 0(1)
}

// const myLinkedList1 = new LinkedList(1);
// myLinkedList1.append(2);
// myLinkedList1.append(3);
// myLinkedList1.append(4);
// myLinkedList1.append(5);
//
// console.log(myLinkedList1.printList(myLinkedList1.removeNthNodeFromEndOfList2(2)));

// const myLinkedList1 = new LinkedList(1);
// console.log(myLinkedList1.printList(myLinkedList1.removeNthNodeFromEndOfList2(1)));

// const myLinkedList1 = new LinkedList(1);
// myLinkedList1.append(2);
// console.log(myLinkedList1.printList(myLinkedList1.removeNthNodeFromEndOfList2(1)));

const myLinkedList1 = new LinkedList(2);
myLinkedList1.append(3);
myLinkedList1.append(1);
myLinkedList1.append(7);

console.log(myLinkedList1.printList(myLinkedList1.removeNthNodeFromEndOfList2(1)));

// const myLinkedList1 = new LinkedList(1);
// myLinkedList1.append(2);
// myLinkedList1.append(3);
// myLinkedList1.append(4);
//
// console.log(myLinkedList1.printList(myLinkedList1.removeNthNodeFromEndOfList2(4)));