
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

    swapNodesInPairsDLL(){
        let current = this.head; //0(1)
        let dummyNode = new Node(0); //0(1)
        let dummyList = dummyNode; //0(1)
        let prev = null; //0(1)

        while(current !== null && current.next !== null){ //0(n)
            let firstNode = current; //0(1)
            let secondNode = firstNode.next; //0(1)
            let thirdNode = secondNode.next; //0(1)

            secondNode.next = null; //0(1)
            firstNode.next = thirdNode; //0(1)

            //We need this check as if our third node is null,
            //it will break our program complaining null  does not have previous
            if(thirdNode?.previous) thirdNode.previous = firstNode; //0(1)

            secondNode.next = firstNode; //0(1)
            firstNode.previous = secondNode //0(1)
            //here we can also point prev to dummyList,
            //I am not doing that coz I will be removing that extra node later
            secondNode.previous = prev; //0(1)

            prev = firstNode; //0(1)

            dummyList.next = secondNode; //0(1)
            dummyList = dummyList.next.next; //0(1)
            current = current.next; //0(1)
        }
        let newHead = dummyNode.next;

        dummyNode.next = null;
        this .head = newHead;
        return newHead;
    }
    //TC: 0(n)
} // SC= 0(2)




const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
//myLinkedList1.append(3);
//myLinkedList1.append(4);
//myLinkedList1.append(5);

console.log(myLinkedList1.printList(myLinkedList1.swapNodesInPairsDLL()));