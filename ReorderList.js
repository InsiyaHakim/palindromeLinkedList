
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

    mergeList(list1, list2){

        while (list1 !== null){
            let list1_next = list1.next;
            let list2_next = list2.next;

            list1.next = list2;

            if(list1_next === null){
                break;
            }
            list2.next = list1_next;

            list1 = list1_next;
            list2 = list2_next;
        }
    }


    reorderList(){
        if(this.head === null || this.head.next === null) return this.head;

        let firstList = this.head;
        let prev = null;
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null){
            prev = slow
            slow = slow.next;
            fast = fast.next.next;

        }
        prev.next = null;
        let secondList = this.reverseList(slow);

        this.mergeList(firstList, secondList)
        return this.head;
    }
}//TC: 0(n) and SC: 0(1)

const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
myLinkedList1.append(4);
//myLinkedList1.append(5);
console.log(myLinkedList1.printList(myLinkedList1.reorderList()));



