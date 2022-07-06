
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



    //This will remove all occurances of repeated element
    removeDuplicateFromSortedList2(){
        if(this.head === null) return null;
        debugger;
        let dummyNode = new Node(0);
        let prev = dummyNode;
        let current = this.head;

        while(current !== null){
            if(current.next !== null && current.next.value == current.value) {
                while (current.next !== null && current.next.value == current.value) {
                    current = current.next;
                }

                prev.next = current.next;
            }else{
                prev.next = current;
                prev = prev.next;
            }
            current = current.next;
        }
        return dummyNode.next;
    }



//TC: 0(n)
// SC= 0(1)
}









const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
myLinkedList1.append(3);
myLinkedList1.append(4);
myLinkedList1.append(4);
myLinkedList1.append(4);
myLinkedList1.append(5);
myLinkedList1.append(5);

console.log(myLinkedList1.printList(myLinkedList1.removeDuplicateFromSortedList2()));