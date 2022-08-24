
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

    reverseLL(currentNode){
        let prev = null;

        while (currentNode != null){
            let temp = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = temp;
        }
        return prev;
    }



    nextGreaterNodeInLinkedList(){
        if(this.head === null || this.head.next === null) return this.head; //0(1)

        let stack = []; //0(1)
        let reversedLinkedList = this.reverseLL(this.head); //0(n)
        let list = reversedLinkedList; //0(1)

        while (reversedLinkedList != null){ //0(1)
            while(stack.length && reversedLinkedList.value >= stack[stack.length - 1]) { //0(n)
                stack.pop();//0(1)
            }
            if(stack.length){ //0(1)
                const value = reversedLinkedList.value; //0(1)
                reversedLinkedList.value = stack[stack.length - 1]; //0(1)
                stack.push(value); //0(1)
            }else{
                stack.push(reversedLinkedList.value); //0(1)
                reversedLinkedList.value = 0; //0(1)
            }
            reversedLinkedList = reversedLinkedList.next; //0(1)
        }
        while (stack.length) stack.pop();//0(1)
        return this.reverseLL(list);
    }//TC: 0(n) and SC: 0(1)
}

const myLinkedList1 = new LinkedList(5);
myLinkedList1.append(4);
myLinkedList1.append(3);
console.log(myLinkedList1.printList(myLinkedList1.nextGreaterNodeInLinkedList()));

// const myLinkedList1 = new LinkedList(1);
// myLinkedList1.append(2);
// myLinkedList1.append(1);
// console.log(myLinkedList1.nextGreaterNodeInLinkedList());

// const myLinkedList1 = new LinkedList(4);
// myLinkedList1.append(12);
// myLinkedList1.append(5);
// myLinkedList1.append(3);
// myLinkedList1.append(1);
// myLinkedList1.append(2);
// myLinkedList1.append(5);
// myLinkedList1.append(3);
// myLinkedList1.append(1);
// myLinkedList1.append(2);
// myLinkedList1.append(4);
// myLinkedList1.append(6);
// console.log(myLinkedList1.nextGreaterNodeInLinkedList());

