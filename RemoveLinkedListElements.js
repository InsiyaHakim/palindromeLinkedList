
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
        if(!node) return node;
        let currentNode = node;
        let result = [];
        while(currentNode !== null){
            result.push(currentNode.value);
            currentNode = currentNode.next
        }
        return result;
    }


    removeLinkedListElements(val) {
        if (this.head === null || this.head.next === null) return this.head; //0(1)

        let currentNode = this.head; //0(1)
        let dummyNode = new Node(0); //0(1)
        let prev = dummyNode; //0(1)

        while (currentNode){ //0(n) loops through each node
            if(currentNode.value === val){ //0(1)
                let nextNode = currentNode.next; //0(1)

                currentNode.next = null; //0(1)
                currentNode = nextNode; //0(1)
                if(!currentNode) prev.next = currentNode; //0(1)
                continue;
            }
            prev.next = currentNode; //0(1)
            prev = prev.next; //0(1)
            currentNode = currentNode.next; //0(1)
        }
        return dummyNode.next;
    }
}//TC: 0(n) and SC: 0(1)

const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(6);
myLinkedList1.append(3);
myLinkedList1.append(4);
myLinkedList1.append(5);
myLinkedList1.append(6);
console.log(myLinkedList1.printList(myLinkedList1.removeLinkedListElements(6)));

// const myLinkedList1 = new LinkedList(7);
// // myLinkedList1.append(7);
// // myLinkedList1.append(7);
// // myLinkedList1.append(7);
// // console.log(myLinkedList1.printList(myLinkedList1.removeLinkedListElements(7)));

// const myLinkedList1 = new LinkedList(null);
// console.log(myLinkedList1.printList(myLinkedList1.removeLinkedListElements(1)));


