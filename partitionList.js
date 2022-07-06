
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



    //list: 1,4,3,2,5,2 and target: 3
    partitionList(target){
        if(this.head === null) return null; //0(1)

        let leftNode = new Node(0); //0(1)
        let smallerElements = leftNode; //0(1)
        let rightNode = new Node(0); //0(1)
        let equalOrlargerElements = rightNode; //0(1)
        let current = this.head; //0(1)
        // if you have setup for doubly linked list then you can uncomment code below,
        // this will give you next and previous references
        while(current !== null){  //0(n)
            if(current.value < target){ //0(1)
                smallerElements.next = current; //0(1)
                //current.previous = smallerElements;
                smallerElements = smallerElements.next; //0(1)
            }else{
                equalOrlargerElements.next = current; //0(1)
                //current.previous = equalOrlargerElements;
                equalOrlargerElements = equalOrlargerElements.next; //0(1)
            }

            if(current.next === null){ //0(1)
                // If our last larger element has next, then it will go in infinite loop so
                // before current gets null we will assign last larger elements next as null
                equalOrlargerElements.next = null; //0(1)
                equalOrlargerElements = equalOrlargerElements.next; //0(1)
            }
            current = current.next; //0(1)
        }
        //rightNode.next.previous = smallerElements;
        smallerElements.next = rightNode.next; //0(1)
        return leftNode.next;
    }//TC: 0(n) and SP: 0(1)



//TC: 0(n)
// SC= 0(1)
}
const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(4);
myLinkedList1.append(3);
myLinkedList1.append(2);
myLinkedList1.append(5);
myLinkedList1.append(2);

console.log(myLinkedList1.printList(myLinkedList1.partitionList(3)));