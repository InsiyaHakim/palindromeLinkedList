
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

    mergeInBetweenLinkedList(list1, list2, removeFrom, removeUntil){
        if(list1 === null || list2 === null) return null; //0(1)

        let appendList1 = null;//0(1)
        let appendList2 = null;//0(1)
        let count = 1;//0(1)
        let current = list1.head;//0(1)

        while (current !== null){//0(n)
            if(count === removeFrom){//0(1)
                appendList1 = current;//0(1)
            }
            if(count === removeUntil){//0(1)
                appendList2 = current.next;//0(1)
                appendList2 = appendList2.next;//0(1)
                current.next = null;//0(1)
                break;
            }
            current = current.next;//0(1)
            count++;//0(1)
        }

        appendList1.next = list2.head;//0(1)
        current = list2.head;//0(1)
        while (current != null){//0(n)
            if(current.next === null){//0(1)
                current.next = appendList2;//0(1)
                break
            }
            current = current.next;//0(1)
        }
        return list1.head;
    }
}//TC: 0(n) and SC: 0(1)

const myLinkedList1 = new LinkedList(0);
myLinkedList1.append(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
myLinkedList1.append(4);
myLinkedList1.append(5);
myLinkedList1.append(6);

const myLinkedList2 = new LinkedList(1000000);
myLinkedList2.append(1000001);
myLinkedList2.append(1000002);
myLinkedList2.append(1000003);
myLinkedList2.append(1000004);

const myLinkedList3 = new LinkedList(0);
console.log(myLinkedList3.printList(myLinkedList3.mergeInBetweenLinkedList(myLinkedList1, myLinkedList2, 2 , 5)));


// const myLinkedList1 = new LinkedList(0);
// myLinkedList1.append(1);
// myLinkedList1.append(2);
// myLinkedList1.append(3);
// myLinkedList1.append(4);
// myLinkedList1.append(5);
//
// const myLinkedList2 = new LinkedList(1000000);
// myLinkedList2.append(1000001);
// myLinkedList2.append(1000002);
//
// const myLinkedList3 = new LinkedList(0);
// console.log(myLinkedList3.printList(myLinkedList3.mergeInBetweenLinkedList(myLinkedList1, myLinkedList2, 3 , 4)));