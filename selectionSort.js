function selectionSort(arrayToBeSorted) {
  for (let pointer1 = 0; pointer1 < arrayToBeSorted.length - 1; pointer1++) {
    let smallestValueIndex = pointer1;

    for (
      let pointer2 = pointer1 + 1;
      pointer2 < arrayToBeSorted.length;
      pointer2++
    ) {
      if (arrayToBeSorted[smallestValueIndex] > arrayToBeSorted[pointer2]) {
        smallestValueIndex = pointer2;
      }
    }

    let tempPointer = arrayToBeSorted[pointer1]; //saves the current pointer1 value
    arrayToBeSorted[pointer1] = arrayToBeSorted[smallestValueIndex]; //sets the smallest value to the current pointer1
    arrayToBeSorted[smallestValueIndex] = tempPointer; //sets the large value to the position of the smallest value
  }
  return arrayToBeSorted;
}
console.log(
  selectionSort([0, 100, 1, 3, 8, 1, 2, 90, 4, 10, 6, 30, 5, 0, 7, 0])
);
