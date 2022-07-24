/**
 Given an unsorted array of size N having both negative and positive integers. Place all negative
 integers at the end  of the array without changing the order of positive integers and negative integers.
 */
function rearrangeArrayValues(array) {
  const positiveArray = array.filter((value) => value > 0);
  const negativeArray = array.filter((value) => value < 0);
  return [...positiveArray, ...negativeArray];
}
console.log(rearrangeArrayValues([1, -1, 3, 2, -7, -5, 11, 6]));

// OR

function rearrangeArrayValue(array) {
  const positiveArray = [];
  const negativeArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) positiveArray.push(array[i]);
    else negativeArray.push(array[i]);
  }
  return [...positiveArray, ...negativeArray];
}
console.log(rearrangeArrayValues([1, -1, 3, 2, -7, -5, 11, 6]));