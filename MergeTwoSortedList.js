
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


    mergeTwoSortedList(list1, list2){
        let dummyNode = new Node(0);
        let tempNode = dummyNode;
        list1 = list1.head;
        list2 = list2.head;

        while(list1 !== null && list2 !== null){
            if(list1.value < list2.value){
                tempNode.next = list1;
                list1 = list1.next;
            }
            else{
                tempNode.next = list2;
                list2 = list2.next;
            }
            tempNode = tempNode.next;
        }

        if(list1 !== null){
            tempNode.next = list1;
            list1 = list1.next
        }

        if(list2 !== null){
            tempNode.next = list2;
            list2 = list2.next
        }
        //here we can also return dummyNode.next but I didnt wanted to leave unused node,
        // so I just changed head to next value
        let newHead = dummyNode.next;
        dummyNode.next = null;
        this.head = newHead;
        return newHead;
    }//TC: 0(n)
} // SC= 0(n) I think coz we are saving these values in dummy_node and it will keep growing until we get list1 and list2 as null




const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(4);

const myLinkedList2 = new LinkedList(1);
myLinkedList2.append(3);
myLinkedList2.append(4);


const myLinkedList3 = new LinkedList(0);
console.log(myLinkedList3.printList(myLinkedList3.mergeTwoSortedList(myLinkedList1, myLinkedList2)));