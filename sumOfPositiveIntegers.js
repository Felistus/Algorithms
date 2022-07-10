// Given two arrays, return the sum of all positive non-zero results when arr1[i] is subtracted from arr2[i].
// For example:
// totalPositiveSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]) => 11
// Explanation:
// 2 - 2 = 0; 5 - 3 = 2; 1 - 5 = -4; 0 - 6 = -6; 5 - 2 = 3; 7 - 1 = 6; => Sum = 2 + 3 + 6 = 11

function totalPositiveSum(array1, array2) {
  const nonZeroPositiveIntegersArray = [];
  let sumOfElement;
  for (let i = 0; i < array1.length; i++) {
    sumOfElement = array1[i] - array2[i];
    if (sumOfElement !== 0 && sumOfElement > 0)
      nonZeroPositiveIntegersArray.push(sumOfElement);
  }
  return nonZeroPositiveIntegersArray.reduce((a, b) => a + b, 0);
}
console.log(totalPositiveSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]));
