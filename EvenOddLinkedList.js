
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

    evenOddLL(){
        if(this.head === null) return null; //0(1)

        let odd = this.head;//0(1)
        let even = this.head.next;//0(1)
        //we are creating this var as at end of loop our even value will be null,
        // so this will give us starting point of even list
        let evenHead = even;//0(1)
        //Here we are checking even coz even will eventually get null as it is ahead of odd node
        while(even !== null && even.next !== null){//0(n)
            //we set our odd next to even next value, so if we are on first index then we will set next to third node
            odd.next = even.next;//0(1)
            //here we set odd to the value we set for odd.next
            odd = odd.next;//0(1)

            //same logic goes for even list
            even.next = odd.next;//0(1)
            even = even.next;//0(1)
        }
        //in the end we want to merge odd and even list
        odd.next = evenHead;//0(1)
        return this.head;//0(1)
    }
}//TC: 0(n) and SC: 0(1)

const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
myLinkedList1.append(4);
myLinkedList1.append(5);

console.log(myLinkedList1.printList(myLinkedList1.evenOddLL(2,4)));