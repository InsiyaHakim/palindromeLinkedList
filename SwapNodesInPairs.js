
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


    swapNodesInPairsSLL(){
        let current = this.head; //0(1)
        let dummyNode = new Node(0); //0(1)
        let dummyList = dummyNode; //0(1)

        while(current !== null && current.next !== null){ //0(n)
            //here we can directly use current instead of storing in var
            //I am doing that so that when I review it again,
            //its easier for me to read
            let firstNode = current; //0(1)
            let secondNode = firstNode.next; //0(1)
            let thirdNode = secondNode.next; //0(1)

            secondNode.next = null; //0(1)
            firstNode.next = thirdNode; //0(1)
            secondNode.next = firstNode; //0(1)
            dummyList.next = secondNode; //0(1)

            //Here after swapping initial two nodes we set our
            //list to point to the third node
            dummyList = dummyList.next.next; //0(1)
            //current.next would be third node as our first node
            // is pointingto third one and our current
            // is still first node
            current = current.next; //0(1)
        }
        return dummyNode.next;
    }
//TC: 0(n)
// SC= 0(1) We added extra dummy node but we can
// easy remove that by pointing head to first valid node
}









const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
//myLinkedList1.append(4);
//myLinkedList1.append(5);

console.log(myLinkedList1.printList(myLinkedList1.swapNodesInPairsSLL()));