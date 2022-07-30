// The root node value is greater than children node values: no left-right distinction as in Binary Search Tree
class MaxBinaryHeap {
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
      if (child <= parent) break;
      this.value[parentIndex] = child;
      this.value[index] = parent;
      index = parentIndex;
    }
  }
}

const maxBH = new MaxBinaryHeap();
maxBH.insert(41);
maxBH.insert(39);
maxBH.insert(33);
maxBH.insert(18);
maxBH.insert(27);
maxBH.insert(12);
maxBH.insert(55);
console.log(maxBH);
