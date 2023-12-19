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
    // This function creates a new node and adds it to the end of the linkedList
    if (this.headNode === null) {
      this.headNode = new Node(value);
    } else {
      let currentNode = this.headNode;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
  }

  prepend(value) {
    // This function creates a new node and adds it to the beginning of the linkedList
    if (this.headNode === null) {
      this.headNode = new Node(value);
    } else {
      let temp = this.headNode;
      this.headNode = new Node(value);
      this.headNode.next = temp;
    }
  }

  size() {
    // This function returns the number of nodes in the list
    let count = 0;
    let currentNode = this.headNode;
    if (currentNode == null) {
      console.log(`nuthin in here: ${count}`);
      return count;
    }
    count++;
    if (currentNode.next == null) {
      console.log(`only one node found: count is ${count}`);
      return count;
    }
    while (currentNode.next !== null) {
      count++;
      currentNode = currentNode.next;
    }
    console.log(`Final count: ${count}`);
    return count;
  }

  head() {
    // Returns the first node in the list
    return this.headNode;
  }

  tail() {
    // Returns the last node in the list
    let currentNode = this.headNode;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    // Returns the element at given index
    let count = 0;
    let currentNode = this.headNode;
    if (index == 0) {
      return currentNode;
    }
    while (currentNode.next !== null) {
      count++;
      currentNode = currentNode.next;
      if (count == index) {
        return currentNode;
      }
    }
  }

  pop() {
    //Removes the last node from the list
    let currentNode = this.headNode;
    let nextNode = currentNode.next;
    if (nextNode == null) {
      this.headNode = null;
    }
    while (nextNode.next !== null) {
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
    currentNode.next = null;
    return this;
  }

  contains(value){
    // Returns true if the passed value is in the list, otherwise returns false
    let currentNode = this.headNode;
    if (currentNode.value == value){
      return true;
    } else if (currentNode.next == null){
      return false;
    } while (currentNode.next !== null){
      currentNode = currentNode.next;
      if (currentNode.value == value){
        return true;
      }
    }
    return false;
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

let Numbers = new LinkedList("Numbers");

Numbers.append(43);
Numbers.append(435);
Numbers.append(4355);
Numbers.append(`shitfuck`)

console.log(Numbers.size());
// console.log(Numbers.at(1));
// console.log(Numbers.at(2));

console.log(Numbers.contains(`shitfuck`))