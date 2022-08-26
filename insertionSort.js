function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}
console.log(insertionSort([1, 4, 2, 3, 0, 6]));
console.log(insertionSort([5, 7, 2, 4, 8, 1]));
