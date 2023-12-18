console.log(`Hello world!`);

// The assignment is to create two either classes or factories (Me thinks I'm going with classes)
// One class will represent the linkedList as a whole
// The other class will represent the individual nodes in the the linked List. This should contain a value property and a link to the nextNode. Instructions are to set both as null by default.

// helpful review on classes, constructors, and factories:
// https://www.youtube.com/watch?v=fbuyliXlDGI

// The head node will at first have a value and reference of null.
// When a new node is added, the reference to the last node becomes the new node, and the reference for the new node becomes null
// This seems more helpful:
// https://www.freecodecamp.org/news/how-linked-lists-work/

class LinkedList {
  constructor() {
    this.headNode = null;
  }
  append(value) {
    // This function should create a new node and add it to the end of the linkedList
    console.log(`Append triggered for ${value}`);
    if (this.headNode === null) {
      console.log(`creating and adding first node ${value}`);
      this.headNode = new Node(value);
    } else {
      console.log(`Head node exists: ${this.headNode.value}`);
      let currentNode = this.headNode;
      console.log(`currentNode: ${currentNode.value}`);
      while (currentNode.next !== null) {
        console.log(`while loop triggered`);
        currentNode = currentNode.next;
        console.log(`currentNode: ${currentNode.value}`);
      }
      currentNode.next = new Node(value);
      console.log(`created new node ${value}`);
    }
    console.log(`Done with ${value}`);
  }

  prepend(value) {
    // This function creates a new node and adds it to the beginning of the linkedList
    // If there are no other nodes, the first step is the same as above:
    if (this.headNode === null) {
      console.log(`creating and adding first node ${value}`);
      this.headNode = new Node(value);
    } else {
      let temp = this.headNode;
      this.headNode = new Node(value);
      this.headNode.next = temp;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  log() {
    console.log(this);
    console.log(this.value);
    console.log(this.next);
  }
}

// let node1 = new Node(`fiddlesticks`, null);
// node1.log();
// let newLinkedList = new LinkedList;
// newLinkedList.headNode = node1;
// console.log(newLinkedList.headNode.value)

let Numbers = new LinkedList("Numbers");

// Numbers.append(43);
// Numbers.append(22);
// Numbers.append(225);


Numbers.prepend(10);
Numbers.prepend(20);
Numbers.prepend(30);

Numbers.append(5);
Numbers.prepend(40);


console.log(Numbers);


console.log(Numbers.headNode.value);
console.log(Numbers.headNode.next.value);
console.log(Numbers.headNode.next.next.value);
console.log(Numbers.headNode.next.next.next.value);
console.log(Numbers.headNode.next.next.next.next.value);


