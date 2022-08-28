// helper function to merge two sorted arrays
function merge(arr1, arr2) {
  let i = 0,
    j = 0;
  const lenArr1 = arr1.length;
  const lenArr2 = arr2.length;
  const sortedArray = [];

  while (i < lenArr1 && j < lenArr2) {
    if (arr2[j] > arr1[i]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < lenArr1) {
    sortedArray.push(arr1[i]);
    i++;
  }
  while (j < lenArr2) {
    sortedArray.push(arr2[j]);
    j++;
  }
  return sortedArray;
}

// using recursion
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArray = mergeSort(arr.slice(0, mid));
  const rightArray = mergeSort(arr.slice(mid));
  return merge(leftArray, rightArray);
}
console.log(mergeSort([1, 20, 30, 50, 100, 10, 50]));
console.log(mergeSort([1, 2, 14, 99, 10, 20, 30, 50, 100]));
