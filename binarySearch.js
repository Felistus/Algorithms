// best solution for sorted array O(logn)
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== num && start <= end) {
    arr[middle] > num ? (end = middle - 1) : (start = middle + 1);
    middle = Math.floor((end + start) / 2);
  }
  return arr[middle] === num ? middle : -1;
}
console.log(
  binarySearch([1, 2, 3, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13, 16, 19], 90)
);
console.log(binarySearch([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 19], 9));
