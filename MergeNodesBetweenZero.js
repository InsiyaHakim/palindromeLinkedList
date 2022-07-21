
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


    mergeNodesInBetweenZeros(){
        if(this.head === null) return null; //0(1)

        let dummyNode = new Node(0);//0(1)
        let prev = dummyNode;//0(1)

        while (this.head !== null && this.head.next !== null){//0(n)
            if(this.head.value === 0) {//0(1)
                prev.next = this.head;//0(1)
                prev = prev.next;//0(1)
            }
            else{
                prev.value = prev.value + this.head.value;//0(1)

                if(this.head.next.value === 0){//0(1)
                    //We are saving head.next as we want to break link of nodes in between next zeroth node
                    let temp = this.head.next;//0(1)
                    this.head.next = null;//0(1)
                    this.head = temp;//0(1)
                    continue;
                }
            }
            this.head = this.head.next;//0(1)
        }
        //our prev will be pointing to second last zero node when loop finishes so at this point we know the next node
        //after zero will be null. We will make prev next to be null
        prev.next = null;//0(1)
        return dummyNode.next;
    }
}//TC: 0(n) and SC: 0(1)

const myLinkedList1 = new LinkedList(0);
myLinkedList1.append(3);
myLinkedList1.append(1);
myLinkedList1.append(0);
myLinkedList1.append(4);
myLinkedList1.append(5);
myLinkedList1.append(2);
myLinkedList1.append(0);

console.log(myLinkedList1.printList(myLinkedList1.mergeNodesInBetweenZeros()));

const myLinkedList2 = new LinkedList(0);
myLinkedList2.append(1);
myLinkedList2.append(0);
myLinkedList2.append(3);
myLinkedList2.append(0);
myLinkedList2.append(2);
myLinkedList2.append(2);
myLinkedList2.append(0);

console.log(myLinkedList2.printList(myLinkedList2.mergeNodesInBetweenZeros()));