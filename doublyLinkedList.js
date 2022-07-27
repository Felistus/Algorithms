class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(element) {
    const newNode = new Node(element);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    let poppedNode = this.tail;
    if (!this.head) return undefined;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    let oldHead = this.head;
    if (!this.head) return undefined;
    if (this.length === 1) this.pop();
    else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }

    this.length--;
    return oldHead;
  }
  unshift(element) {
    let newNode = new Node(element);
    let oldHead = this.head;
    if (!this.head) this.push(element);
    else {
      oldHead.prev = newNode;
      this.head = newNode;
      newNode.next = oldHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    let listMiddle = this.length / 2;
    let counter = 0;
    let currentNodeFromHead = this.head;
    let currentNodeFromTail = this.tail;
    let requiredNode;
    if (index < 0 || index >= this.length) return null;
    if (index <= listMiddle) {
      while (counter !== index) {
        currentNodeFromHead = currentNodeFromHead.next;
        counter++;
      }
      requiredNode = currentNodeFromHead;
    } else {
      counter = this.length - 1;
      while (counter !== index) {
        currentNodeFromTail = currentNodeFromTail.prev;
        counter--;
      }
      requiredNode = currentNodeFromTail;
    }
    return requiredNode;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, value) {
    let newNode = new Node(value);
    if (!this.head) return undefined;
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    let prevNode = this.get(index - 1);
    let nodeToSwap = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nodeToSwap;
    nodeToSwap.prev = newNode;

    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    let afterRemovedNode = removedNode.next;
    prevNode.next = afterRemovedNode;
    afterRemovedNode.prev = prevNode;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

doublyList = new DoublyLinkedList();
doublyList.push("Hello!");
doublyList.push("People!");
doublyList.push("Came!");
doublyList.push("Reader!");
doublyList.push("Master!");
// doublyList.push("Welcome");
// doublyList.push("Home...")
