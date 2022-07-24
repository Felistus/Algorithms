// Return all the unique values in an array in another array.
// For example;
// uniques([2,4,5,4,3,2,5,6,6,7,7,9,1,2,3,5]) will return [1,2,3,4,5,6,7,9];

// Method 1: using Set() for Unsorted Array
function uniques(array) {
  if (!array.length) return "Empty Array";
  return Array.from(new Set(array));
}
console.log(uniques([2, 4, 5, 4, 3, 2, 5, 6, 6, 7, 7, 9, 1, 2, 3, 5]));
console.log(uniques([1, 2, 2, 5, 7, 7, 99]));

// OR

// Method 2: using for loop [ Sorted Array ]

function uniqueValues(array) {
  if (!array.length) return "Empty Array";
  const sortedArray = array.sort();
  let i = 0;
  let uniqueArray = [];

  for (let j = 1; j < sortedArray.length + 1; j++) {
    if (sortedArray[i] !== sortedArray[j]) {
      uniqueArray.push(sortedArray[i]);
      i++;
    } else i++;
  }
  return uniqueArray;
}
console.log(uniqueValues([2, 4, 5, 4, 3, 2, 5, 6, 6, 7, 7, 9, 1, 2, 3, 5]));
console.log(uniqueValues([1, 2, 2, 5, 7, 7, 99]));
console.log(uniqueValues([]));
