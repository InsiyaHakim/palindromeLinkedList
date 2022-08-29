
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

    reverse(node){
        let prev = null;
        debugger;
        while (node){
            let temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
        }
        return prev;
    }


    removeNthNodeFromEndOfList(val){
        if(!this.head || !this.head.next) return null;

        let currentNode = this.head;
        let reversedList = this.reverse(currentNode);
        let copyOfReversedList = reversedList;
        let count = 1;
        let prev = null;

        while (reversedList){
            if(count === val){
                let temp = reversedList.next;

                reversedList.next = null;

                if(!prev) return this.reverse(temp);

                prev.next = temp;
                reversedList = temp;

            } else {
                prev = reversedList;
                reversedList = reversedList.next;
            }
            count++;
        }
        return this.reverse(copyOfReversedList);
    }//TC: 0(n) SC= 0(1)
}

// const myLinkedList1 = new LinkedList(1);
// myLinkedList1.append(2);
// myLinkedList1.append(3);
// myLinkedList1.append(4);
// myLinkedList1.append(5);
//
// console.log(myLinkedList1.printList(myLinkedList1.removeNthNodeFromEndOfList(2)));

// const myLinkedList1 = new LinkedList(1);
// console.log(myLinkedList1.printList(myLinkedList1.removeNthNodeFromEndOfList(1)));

// const myLinkedList1 = new LinkedList(1);
// myLinkedList1.append(2);
// console.log(myLinkedList1.printList(myLinkedList1.removeNthNodeFromEndOfList(1)));

// const myLinkedList1 = new LinkedList(2);
// myLinkedList1.append(3);
// myLinkedList1.append(1);
// myLinkedList1.append(7);
//
// console.log(myLinkedList1.printList(myLinkedList1.removeNthNodeFromEndOfList(1)));

const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
myLinkedList1.append(4);

console.log(myLinkedList1.printList(myLinkedList1.removeNthNodeFromEndOfList(4)));