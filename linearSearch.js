// best solution for unsorted array O(n)
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) return i;
  }
  return -1;
}
console.log(linearSearch([2, 3, 5, 2, 6, 3], 6));
