//Given an array  of size N which contains elements from 0 to N-1, you need to find all the elements occuring
//more than once in the array and return them, else return -1
function repeatedArrayValues(array) {
  const repeatedMap = new Map();
  const repeatedArray = [];
  let index = 0;

  for (index; index < array.length; index++) {
    repeatedMap.has(array[index])
      ? repeatedMap.set(array[index], repeatedMap.get(array[index]) + 1)
      : repeatedMap.set(array[index], 1);
  }
  for (let [key, value] of repeatedMap) {
    if (value > 1) repeatedArray.push(key);
  }
  return repeatedArray.length ? repeatedArray.join(",") : -1;
}
console.log(repeatedArrayValues([]));
console.log(repeatedArrayValues([2, 3, 5, 2, 6, 3]));
console.log(repeatedArrayValues([1, 3]));
