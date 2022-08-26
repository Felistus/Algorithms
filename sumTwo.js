function sumTwo(arr, num) {
  const numMap = new Map();
  const newA = [];

  for (let i = 0; i < arr.length; i++) {
    const pairNum = num - arr[i];
    if (numMap.has(pairNum)) {
      newA.push(numMap.get(pairNum), i);
    }
    numMap.set(arr[i], i);
  }
  return newA;
}
console.log(sumTwo([2, 7, 11, 15], 9));
