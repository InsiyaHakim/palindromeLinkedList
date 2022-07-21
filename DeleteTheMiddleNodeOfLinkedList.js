
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

    printList(node = null){
        let currentNode = node || this.head;
        let result = [];
        while(currentNode !== null){
            result.push(currentNode.value);
            currentNode = currentNode.next
        }
        return result;
    }

    deleteMiddleNode(){
        if(this.head === null || this.head.next === null) return this.head; //0(1)

       let prev = null;//0(1)
       let slow= this.head;//0(1)
       let fast = this.head;//0(1)

       while (fast!== null){//0(n)
           prev = slow;//0(1)
           slow = slow.next;//0(1)
           fast = fast.next.next;//0(1)

           if(fast === null || fast.next === null){//0(1)
               let temp = slow.next;//0(1)
               slow.next = null;//0(1)
               prev.next = temp;//0(1)
               break;
           }
       }
       return this.head;
    }
}//TC: 0(n) and SC: 0(1)

const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
myLinkedList1.append(4);

console.log(myLinkedList1.printList(myLinkedList1.deleteMiddleNode()));

const myLinkedList2 = new LinkedList(1);
myLinkedList2.append(3);
myLinkedList2.append(4);
myLinkedList2.append(7);
myLinkedList2.append(1);
myLinkedList2.append(2);
myLinkedList2.append(6);

console.log(myLinkedList2.printList(myLinkedList2.deleteMiddleNode()));

const myLinkedList3 = new LinkedList(2);
myLinkedList3.append(1);

console.log(myLinkedList3.printList(myLinkedList3.deleteMiddleNode()));

const myLinkedList4 = new LinkedList(1);
myLinkedList4.append(2);
myLinkedList4.append(3);
myLinkedList4.append(4);
myLinkedList4.append(5);
myLinkedList4.append(6);

console.log(myLinkedList4.printList(myLinkedList4.deleteMiddleNode()));