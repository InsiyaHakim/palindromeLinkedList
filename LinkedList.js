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

    prepend(value){
        let newNode = new Node(value);

        newNode.next = this.head;
        this.head.previous = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        let currentNode = this.head;
        let result = [];
        while(currentNode !== null){
            result.push(currentNode.value);
            currentNode = currentNode.next
        }
        return result;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }

        let newNode = new Node(value);
        let headLocator = this.getNodeBeforeIndex(index-1);
        let nextNodeOfHeadLoactor = headLocator.next;
        headLocator.next = newNode;
        newNode.previous = headLocator;
        newNode.next = nextNodeOfHeadLoactor;
        nextNodeOfHeadLoactor.previous = newNode;
        this.length++;
        //console.log(this);
    }

    getNodeBeforeIndex(index){
        let currentNode = this.head;
        let counter = 0;
        while (counter != index){
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }
    remove(index){
        let headLocator = this.getNodeBeforeIndex(index-1);
        //let indexToRemove = headLocator.next;
        let nextNodeOfHeadLoactor = headLocator.next.next;

        headLocator.next = nextNodeOfHeadLoactor;
        nextNodeOfHeadLoactor.previous = headLocator;
        this.length--;
        //console.log(this.printList());
    }

    reverse(middleNode = null){
        let current = middleNode ? middleNode : this.head;
        let pre = null;

        while(current !== null){
            let temp = current.next;
            current.next = pre;
            pre = current;
            current = temp;
        }
        return pre;
    }


    palindromeLinkedList(){
        if(!this.head || this.head.next === null){ //0(1)
            return true;
        }

        let currentNode = this.head; //0(1)
        //we are using while loop to get middle node so it will return with 0(n)
        let middleNode = this.getMiddleNode(this.head); //0(1) for assignment
        //although this method will return 0(n/2) but since its linear we will take it as 0(n)
        let reverseExtraHalfOfList = this.reverse(middleNode.next); //0(1) for assignment

        while (reverseExtraHalfOfList !== null){//0(1) for comparision and 0(n) for loop
            if(currentNode.value !== reverseExtraHalfOfList.value){//0(1)
                return false;
            }
            currentNode = currentNode.next;//0(1)
            reverseExtraHalfOfList = reverseExtraHalfOfList.next;//0(1)
        }
        return true;
    }
    //TC= 0(n)
    //SC= 0(1)

    getMiddleNode(head){
        let slow= head;
        let fast = head;

        while (fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }


    MoveLastElementToFrontOfLinkedList(){
        let secondLastNode = this.head;

        while(secondLastNode.next.next !== null){
            secondLastNode = secondLastNode.next;
        }
        //removing last node refernces from tail
        let lastNode = secondLastNode.next;
        secondLastNode.next = null;
        lastNode.previous = null;//if you dont have setup for previous pointer than thats fine, it should still work.
        this.tail = secondLastNode;
        //making last node as head
        lastNode.next = this.head;
        this.head.previous = lastNode;
        this.head = lastNode;
        console.log(this);
        console.log(this.printList());
    }

    MoveFirstElementToEndOfLinkedList(){
        let head = this.head;
        let secondNode = this.head.next;
        let lastNode = this.head;

        while(lastNode.next !== null){
            lastNode = lastNode.next;
        }
        //setting second node to head
        secondNode.previous = null;
        head.next = null;
        this.head = secondNode;
        //setting head to tail
        lastNode.next = head;
        head.previous = lastNode;
        this.tail = head;
        this.tail.next = null;
        console.log(this);
        console.log(this.printList());
    }

    palindromeWithDoublyLinkedList(){
        let head = this.head; //0(1)
        let tail = this.tail //0(1)

        while(head !== tail){ //0(n) for loop
            if(head.value !== tail.value) return false; //0(1)

            //this condition will work when we have even number of nodes
            if(tail === head.next && head === tail.previous) break; //0(1)

            head = head.next; //0(1)
            tail = tail.previous; //0(1)
        }
        return true;
    }
    //TC: 0(n)
    //SC: 0(1)
}

/*const myLinkedList2 = new LinkedList("1");
myLinkedList2.append("2");
myLinkedList2.append("3");
myLinkedList2.append("4");
myLinkedList2.MoveLastElementToFrontOfLinkedList();


const myLinkedList3 = new LinkedList("1");
myLinkedList3.append("2");
myLinkedList3.append("3");
myLinkedList3.append("4");
myLinkedList3.MoveFirstElementToEndOfLinkedList()*/
//console.log(myLinkedList2.palindromeLinkedList());







const myLinkedList = new LinkedList("l");
myLinkedList.append("e");
myLinkedList.append("v");
myLinkedList.append("v");
myLinkedList.append("e");
//myLinkedList.append("j");
myLinkedList.append("l");
//myLinkedList.prepend("e");
//myLinkedList.insert(1,"l");
console.log(myLinkedList.palindromeWithDoublyLinkedList());
//myLinkedList.remove(2);
//myLinkedList.reverse();
//console.log(myLinkedList.printList());
//console.log(myLinkedList.reverse());
//console.log(myLinkedList.printList());
//console.log(myLinkedList)
