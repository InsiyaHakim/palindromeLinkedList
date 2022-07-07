
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

    reverseLL(left, right){
        if(this.head === null) return null; //0(1)

        let current = this.head;//0(1)
        let dummyNode = new Node(0); //0(1)
        let list = dummyNode;//0(1)
        let leftNode;//0(1) when current reach's node equal to left we save in this var
        let rightNode;//0(1) when current reach's node equal to right we save in this var
        let prev = null;//0(1)
        let count = 0;//0(1)

        while (current !== null){ //0(n)
            if(current.value !== left){//0(1)
                list.next = current;//0(1)
                list = list.next;//0(1)
                current = current.next;//0(1)
            }else{
                leftNode = current;//0(1)
                while (count < right - left + 1){ //0(n) elements in this loop are not repeated
                    let temp = current.next;//0(1)
                    current.next = prev;//0(1)
                    prev = current;//0(1)
                    current = temp;//0(1)
                    count++;//0(1)

                    if(current.value === right){//0(1)
                        rightNode = current;//0(1)
                    }
                }
                list.next = rightNode;//0(1)
                leftNode.next = current;//0(1)
                break;
            }
        }
        return dummyNode.next;
    }
    //TC: 0(n) and SP: 0(1)
}

const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
myLinkedList1.append(4);
myLinkedList1.append(5);

console.log(myLinkedList1.printList(myLinkedList1.reverseLL(2,4)));