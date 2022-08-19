
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

    reverseList(head){
        if(head === null || head.next === null) return head;

        let currentNode = head;
        let prev = null;

        while (currentNode !== null){
            let temp = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = temp;
        }
        return prev
    }

    maximumTwinSum(){
        if(this.head === null || this.head.next === null) return this.head; //0(1)

        let firstList = this.head; //0(1)
        let prev = null; //0(1)
        let slow = this.head; //0(1)
        let fast = this.head; //0(1)

        while (fast !== null && fast.next !== null){  //0(n)
            prev = slow; //0(1)
            slow = slow.next; //0(1)
            fast = fast.next.next; //0(1)
        }
        prev.next = null; //0(1)

        let secondList = this.reverseList(slow); //0(n)
        let result = 0; //0(1)

        while (firstList != null){ //0(n/2)?
            let sum = firstList.value + secondList.value; //0(1)
            if(sum > result) result = sum; //0(1)

            firstList = firstList.next; //0(1)
            secondList = secondList.next; //0(1)
        }
        return result; //0(1)
    }
}//TC: 0(n) and SC: 0(1)

// const myLinkedList1 = new LinkedList(5);
// myLinkedList1.append(4);
// myLinkedList1.append(2);
// myLinkedList1.append(1);

// const myLinkedList1 = new LinkedList(4);
// myLinkedList1.append(2);
// myLinkedList1.append(2);
// myLinkedList1.append(3);
const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(100000);

console.log(myLinkedList1.maximumTwinSum());



