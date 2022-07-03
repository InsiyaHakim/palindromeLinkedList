
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

    twoSum(l1, l2){
        let dummyNode = new Node(0);
        let l3 = dummyNode;
        let carry = 0;
        l1 = l1.head;
        l2 = l2.head;

        while(l1 !== null || l2 !== null){
            let l1_Value = (l1 !== null) ? l1.value : 0;
            let l2_Value = (l2 !== null) ? l2.value : 0;

            let current_sum = l1_Value + l2_Value + carry;
            carry = current_sum / 10;
            let last_int = current_sum % 10;

            let newNode = new Node(last_int);
            l3.next = newNode;

            if(l1 !== null) l1 = l1.next;
            if(l2 !== null) l2 = l2.next;
            l3 = l3.next;
        }
        if(carry > 0){
            let newNode = new Node(carry);
            l3.next = newNode;
            //l3 = l3.next;
        }
        let newHead = dummyNode.next;
        dummyNode.next = null;
        this.head = newHead;
        return newHead;

    }


}

/*const myLinkedList1 = new LinkedList(2);
myLinkedList1.append(4);
myLinkedList1.append(3);

const myLinkedList2 = new LinkedList(5);
myLinkedList2.append(6);
myLinkedList2.append(4);*/

const myLinkedList1 = new LinkedList(2);
myLinkedList1.append(4);
myLinkedList1.append(3);

const myLinkedList2 = new LinkedList(5);
myLinkedList2.append(6);
myLinkedList2.append(7);
myLinkedList1.append(9);


const myLinkedList3 = new LinkedList(0);
console.log(myLinkedList3.printList(myLinkedList3.twoSum(myLinkedList1, myLinkedList2)));