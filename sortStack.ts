// sort an array of elements using stack
function sortArrayUsingStack(arr: number[]) {
  const tempStack: number[] = [];

  while (arr.length > 0) {
    let popElem = arr[arr.length - 1];
    arr.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > popElem) {
      arr.push(tempStack[tempStack.length - 1]);
      tempStack.pop();
    }
    tempStack.push(popElem);
  }
  return tempStack;
}
const arr = [34, 3, 31, 98, 92, 23];
console.log(sortArrayUsingStack(arr));
