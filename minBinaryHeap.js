// The root node value is smaller than children node values: no left-right distinction as in Binary Search Tree
class MinBinaryHeap {
  constructor() {
    this.value = [];
  }
  insert(element) {
    this.value.push(element);
    let index = this.value.length - 1;
    const child = this.value[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      const parent = this.value[parentIndex];
      if (child >= parent) break;
      this.value[parentIndex] = child;
      this.value[index] = parent;
      index = parentIndex;
    }
  }
}

const minBH = new MinBinaryHeap();
minBH.insert(41);
minBH.insert(39);
minBH.insert(33);
minBH.insert(18);
minBH.insert(27);
minBH.insert(12);
minBH.insert(55);
console.log(minBH);
