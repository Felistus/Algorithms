class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentRoot = this.root;
      while (true) {
        if (value === currentRoot.value) return undefined;
        if (value > currentRoot.value) {
          if (currentRoot.right) {
            currentRoot = currentRoot.right;
          } else {
            currentRoot.right = newNode;
            return this;
          }
        } else if (value < currentRoot.value) {
          if (currentRoot.left) {
            currentRoot = currentRoot.left;
          } else {
            currentRoot.left = newNode;
            return this;
          }
        }
      }
    }
  }
}
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(11);
tree.insert(6);
console.log(tree);
