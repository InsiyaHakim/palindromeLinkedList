
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

    attachTailToSecondNode(){
        this.tail.next = this.head.next;
    }

    hasCycle(){
        let index = 0;
        if(this.head === null) return false; //0(1)

        let slow, fast = this.head;//0(1)

        while(fast !== null){//0(n)
            slow = slow.next;//0(1)
            fast = fast.next.next;//0(1)

            if(slow === fast) break;//0(1)
        }
        if(fast === null) return false;//0(1)

        slow = this.head;//0(1)
        while(slow !== fast){//0(n)
            index++;//0(1)
            slow = slow.next;//0(1)
            fast= fast.next;//0(1)
        }
        return index;
    }
}//TC: 0(n) and SC: 0(1)

const myLinkedList1 = new LinkedList(3);
myLinkedList1.append(2);
myLinkedList1.append(0);
myLinkedList1.append(-4);

//console.log(myLinkedList1.hasCycle3());
myLinkedList1.attachTailToSecondNode();
console.log(myLinkedList1.hasCycle());