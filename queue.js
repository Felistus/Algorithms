class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // push (adds new items from the back of the queue)
  push(element) {
    let newNode = new Node(element);
    if (!this.size) this.first = this.last = newNode;
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  // shift (deletes item from the front of the stack)
  shift() {
    let oldNode = this.first;
    if (!this.size) return undefined;
    if (this.size === 1) this.first = this.last = null;
    else {
      this.first = oldNode.next;
    }
    this.size--;
    return oldNode;
  }
}

const queue = new Queue();
queue.push(100);
queue.push(200);
queue.shift();
console.log(queue);
