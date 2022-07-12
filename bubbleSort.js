function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let tempPointer = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tempPointer;
      }
    }
  }
  return array;
}

console.log(
  bubbleSort([0, 9, 100, 1, 3, 8, 1, 2, 90, 4, 10, 6, 30, 5, 0, 7, 0])
);
console.log(bubbleSort([100, 10, 15, 23, 2, 9, 28, 1, 36, 1]));
