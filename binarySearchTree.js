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
    }
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
  search(value) {
    if (!this.root) return "Empty Tree";
    let currentRoot = this.root;
    while (currentRoot) {
      if (value > currentRoot.value) {
        currentRoot = currentRoot.right;
      } else if (value < currentRoot.value) {
        currentRoot = currentRoot.left;
      } else {
        return `true: ${currentRoot.value} found in tree`;
      }
    }
    return `false: ${value} not in tree`;
  }
  // Breath-First Search : horizontal search
  BFS() {
    let node = this.root;
    let queue = [];
    let treeData = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      treeData.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return treeData;
  }
  DFS_PreOrder() {
    let preOrderData = [];
    function traverse(node) {
      preOrderData.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return preOrderData;
  }
  DFS_PostOrder() {
    let postOrderData = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      postOrderData.push(node.value);
    }
    traverse(this.root);
    return postOrderData;
  }
}
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree.search(6));
// console.log(tree);
console.log(tree.BFS());
console.log(tree.DFS_PreOrder());
console.log(tree.DFS_PostOrder());
