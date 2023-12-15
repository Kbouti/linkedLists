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
  constructor(name) {
    this.name = name;
    this.headNode = new Node(null, null);
  }
  append(value) {
    // This function should create a new node and add it to the end of the linkedList
    let newNode = new Node(value, null);

    // I think maybe a while loop to start at the head and move through the list?
    while(this.headNode.reference !== null){

    }

  }
  preprend(value){
    // This function creates a new node and adds it to the beginning of the linkedList
  }
}

class Node {
  constructor(value, reference) {
    this.value = value;
    this.reference = reference;
  }

  log() {
    console.log(this);
    console.log(this.value);
  }
}

let node1 = new Node(`fiddlesticks`, null);

node1.log();
