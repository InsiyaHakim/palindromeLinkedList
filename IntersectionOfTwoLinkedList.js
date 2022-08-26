
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

    attachTailToSecondNode(myLinkedList1, count){
        let node = myLinkedList1.head;

        while (count !== 0){
            node = node.next
            count--;
        }
        this.tail.next = node;
    }


    intersectionOfTwoLL(list1, list2){
        if(list1 === null || list2 === null) return null; //0(1)

        let firstList = list1.head; //0(1)
        let secondList = list2.head; //0(1)

        while (firstList != secondList){ //0(n)
            if(firstList.next === null) firstList = list2.head; //0(1)
            else firstList = firstList.next; //0(1)

            if(secondList.next === null) secondList = list1.head; //0(1)
            else secondList = secondList.next; //0(1)
        }
        return firstList.value; //0(1)
    }
} // TC: 0(n) SC: 0(1)

const myLinkedList1 = new LinkedList(4);
myLinkedList1.append(1);
myLinkedList1.append(8);
myLinkedList1.append(4);
myLinkedList1.append(5);

const myLinkedList2 = new LinkedList(5);
myLinkedList2.append(6);
myLinkedList2.append(1);
myLinkedList2.attachTailToSecondNode(myLinkedList1,2);


const myLinkedList3 = new LinkedList(0);
console.log(myLinkedList3.intersectionOfTwoLL(myLinkedList1, myLinkedList2));


// const myLinkedList1 = new LinkedList(1);
// myLinkedList1.append(9);
// myLinkedList1.append(1);
// myLinkedList1.append(2);
// myLinkedList1.append(4);
//
// const myLinkedList2 = new LinkedList(3);
// myLinkedList2.attachTailToSecondNode(myLinkedList1,3);
//
//
// const myLinkedList3 = new LinkedList(0);
// console.log(myLinkedList3.intersactionOfTwoLL(myLinkedList1, myLinkedList2));