console.log(`Hello world!`)

// The assignment is to create two either classes or factories (Me thinks I'm going with classes)
// One class will represent the linkedList as a whole 
// The other class will represent the individual nodes in the the linked List. This should contain a value property and a link to the nextNode. Instructions are to set both as null by default. 

// helpful review on classes, constructors, and factories:
// https://www.youtube.com/watch?v=fbuyliXlDGI

class LinkedList{
    constructor(name, headNode){
        this.name = name;
        this.headNode = headNode;
    }
}

class Node{
    constructor(value, reference){
        this.value = value;
        this.reference = reference;
    }

    log(){
        console.log(this);
        console.log(this.value);
    }
}

let node1 = new Node(`fiddlesticks`, null);

node1.log()