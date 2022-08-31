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





    rotateList(val){
        if(this.head === null) return null; //0(1)

        let currentNode = this.head;
        let prev = null;
        let count = 0;

        while (currentNode){
            if(count === val) break;
            if(currentNode.next === null && count <= val){
                currentNode.next = this.head;
                this.head = currentNode;
                prev.next = null;
                count++;
            }else {
                prev = currentNode;
                currentNode = currentNode.next;
            }
        }
        return this.head;
    }
}//TC: 0(n) and SC: 0(1)

const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
myLinkedList1.append(4);
myLinkedList1.append(5);

console.log(myLinkedList1.printList(myLinkedList1.rotateList(2)));

// const myLinkedList1 = new LinkedList(0);
// myLinkedList1.append(1);
// myLinkedList1.append(2);
// console.log(myLinkedList1.printList(myLinkedList1.rotateList(4)));
