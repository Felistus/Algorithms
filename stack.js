class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // unshift (adds new items to the front of the stack)
  size() {
    return this.size;
  }
  push(element) {
    let newNode = new Node(element);
    if (!this.size) this.first = this.last = newNode;
    else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }
  // shift (deletes item from the front of the stack)
  pop() {
    let removedHead = this.first;
    if (!this.size) return undefined;
    if (this.size === 1) this.first = this.last = null;
    else {
      this.first = removedHead.next;
    }
    this.size--;
    return removedHead;
  }
}
const stack = new Stack();
stack.push(100);
stack.push(200);
