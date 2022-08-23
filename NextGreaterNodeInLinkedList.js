
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


    nextGreaterNodeInLinkedList(){
        if(this.head === null || this.head.next === null) return this.head; //0(1)

        let currentNode = this.head; //0(1)
        let nums = []; //0(n) depends on num in linked list
        let stack = []; //0(n) in worse case we have decreasing linked list and every element gets in stack

        while(currentNode !== null){ //0(n) loops through each node
            nums.push(currentNode.value); //0(1)
            currentNode = currentNode.next; //0(1)
        }

        for (let i = nums.length - 1; i >= 0; i--) { //0(n) loops through entire array
            while (stack.length && stack[stack.length - 1] <= nums[i]) { //0(n)
                stack.pop();//0(1)
                }

                if (stack.length) {
                    const prev = nums[i]; //0(1)
                    nums[i] = stack[stack.length - 1]; //0(1)
                    stack.push(prev); //0(1)
                } else {
                    stack.push(nums[i]); //0(1)
                    nums[i] = 0; //0(1)
                }
            }
            return nums;
        }//TC: 0(n) and SC: 0(n)
}

// const myLinkedList1 = new LinkedList(2);
// myLinkedList1.append(1);
// myLinkedList1.append(5);
// console.log(myLinkedList1.nextGreaterNodeInLinkedList());

const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(1);
console.log(myLinkedList1.nextGreaterNodeInLinkedList());

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

