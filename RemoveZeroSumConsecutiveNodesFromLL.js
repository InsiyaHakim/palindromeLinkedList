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


    removeZeroSumConsecutiveNodesFromLL(){
        if(this.head === null) return null; //0(1)

        let currentNode = this.head;
        let dummyNode = new Node(0);//0(1)
        dummyNode.next = this.head;
        let prefixSum = 0;
        let map = new Map();
        map.set(prefixSum, dummyNode);

        while (currentNode){
            prefixSum += currentNode.value;
            if(map.has(prefixSum)){
                let removeNodes = map.get(prefixSum).next;
                let sum = prefixSum;
                while (removeNodes != currentNode){
                    sum += removeNodes.value;
                    map.delete(sum);
                    removeNodes = removeNodes.next;
                }
                let node = map.get(prefixSum)
                node.next = currentNode.next;
            }
            else{
                map.set(prefixSum, currentNode)
            }
            currentNode = currentNode.next;
        }
        return dummyNode.next;
    }
}//TC: 0(n) and SC: 0(n)

// const myLinkedList1 = new LinkedList(1);
// myLinkedList1.append(2);
// myLinkedList1.append(3);
// myLinkedList1.append(-3);
// myLinkedList1.append(-2);
//
// console.log(myLinkedList1.printList(myLinkedList1.removeZeroSumConsecutiveNodesFromLL()));

// const myLinkedList1 = new LinkedList(1);
// myLinkedList1.append(2);
// myLinkedList1.append(-3);
// myLinkedList1.append(3);
// myLinkedList1.append(1);
//
// console.log(myLinkedList1.printList(myLinkedList1.removeZeroSumConsecutiveNodesFromLL()));

const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
myLinkedList1.append(-3);
myLinkedList1.append(4);

console.log(myLinkedList1.printList(myLinkedList1.removeZeroSumConsecutiveNodesFromLL()));
