1;
// Given a singly linked list, delete middle of the linked list. For example,
// if given linked list is 1 -> 2 -> 3 -> 4 -> 5 then linked list should be modified to 1 -> 2 -> 4 -> 5.
// If there are even nodes, then there would be two middle nodes, we need to delete the second middle element. F
// or example, if given linked list is 1 -> 2 -> 3 -> 4 -> 5 -> 6 then it should be modified to 1 -> 2 -> 3 -> 5 -> 6.
// If the input linked list is NULL or has 1 node, then it should return NULL

2;
//Given a singly linked list consisting of N nodes.
// The task is to remove duplicates(nodes with duplicate values) from the given list(if exists).
// Note: Try not to use extra space. Expected time complexity is O(N). The nodes are arranged in a sorted way.

class Node {
  // generates new node object: every node has a "value" and a "next pointer" as its properties
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //   returns the length of the list
  size() {
    return this.length;
  }
  // add element to the end of the lsit O(1)
  push(element) {
    const newNode = new Node(element);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // deletes element from the end of the list : BC[O(1)] WC[O(n)]
  pop() {
    let currentNode = this.head;
    let newTail = currentNode;
    if (!this.length) return undefined;
    if (this.length === 1) this.head = this.tail = null;
    else {
      while (currentNode.next) {
        newTail = currentNode; // must always be done first to hold old value of current node
        currentNode = currentNode.next;
      }
      this.tail = newTail;
      this.tail.next = null;
    }
    this.length--;
    return currentNode;
  }
  // remove element from the beginning of the list :  // O(1)
  shift() {
    if (!this.length) return undefined;
    let removedHead = this.head;
    this.head = removedHead.next;
    this.length--;
    if (!this.length) {
      // when list is empty
      this.tail = null;
    }
    return removedHead;
  }
  // add element to the beginning of the list : O(1)
  unshift(element) {
    let newNode = new Node(element);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  // remove element at a specified location : BC[O(1)] WC[O(n)]
  removeAt(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let prevNode = this.getNode(index - 1);
    let removedNode = prevNode.next;
    let nextNode = removedNode.next;
    prevNode.next = nextNode;
    this.length--;
    return removedNode;
  }
  // get all list items(node elements)
  getAllNodeElements() {
    let stack = [];
    while (this.head) {
      stack.push(this.head.value);
      this.head = this.head.next;
    }
    return stack;
  }
  // get a particular node element from the list
  getNode(index) {
    if (!this.head || index >= this.length || index < 0 || index === undefined)
      return undefined;
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // updates the value of a node
  setValueOfNode(index, value) {
    let node = this.getNode(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }
  // insert at a position in the list
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let prevNode = this.getNode(index - 1); // gets the node before the specified node to swap
    let newNode = new Node(value); // creates a new node object
    let nodeToSwap = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nodeToSwap;
    this.length++;
    return true;
  }
  // reverse the order of the list
  reverseList() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prevNode = null;
    let nextNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
  }
  // removes duplicate nodes
  removeDuplicate() {
    let currentNode = this.head;
    let uniqueSet = new Set();
    let counter = 0;

    if (!this.head) return undefined;

    while (currentNode) {
      if (!uniqueSet.has(currentNode.value)) {
        uniqueSet.add(currentNode.value);
        counter++;
      } else this.removeAt(counter);
      currentNode = currentNode.next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(3);
list.push(4);
list.push(5);
list.push(3);
list.unshift(1);
list.insert(3, 2);
list.insert(4, 500);
const length = list.size();
const middleValue = Math.ceil((length - 1) / 2);
// list.setValueOfNode(1,100)
// list.removeAt(middleValue);
// list.reverseList();
list.removeDuplicate();
console.log(list.getAllNodeElements());
console.log(list.size());
