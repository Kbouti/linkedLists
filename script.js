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
    if (this.headNode === null) {
      this.headNode = new Node(value);
    } else {
      let currentNode = this.headNode;
      while (currentNode.next !== null){
        currentNode = currentNode.next;
      } currentNode.next = new Node(value);
      
    }
  }

  preprend(value) {
    // This function creates a new node and adds it to the beginning of the linkedList
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
Numbers.append(43);

console.log(Numbers.headNode.value);
Numbers.headNode.log();


Numbers.append(22);
Numbers.append(225);
// console.log(Numbers)
// This only (kinda) works for adding one node,  doesn't work for adding subsequent nodes


Numbers.headNode.next.next.log()
