// Given an array of mixed values, return a new array based on the operations in the old array.
// Add values into the new array, but when: a "C" is encountered, delete the last values; "D" is encountered,
// square the last value and add to array; a "+" is encountered, add the two last values and add to array.
// Return the Sum of the final values.

function operations(ops) {
  const finalArray = []; // array to hold final values
  const lenOfOps = ops.length;

  if (typeof ops[0] === "string") return "initial value must be a number";
  for (let i = 0; i < lenOfOps; i++) {
    const lenOfFinal = finalArray.length;
    const element = ops[i];
    if (element !== "C") {
      if (element !== "D") {
        if (element !== "+") finalArray.push(element);
        else
          finalArray.push(
            finalArray[lenOfFinal - 1] + finalArray[lenOfFinal - 2]
          );
      } else finalArray.push(finalArray[lenOfFinal - 1] * 2);
    } else finalArray.pop();
  }
  console.log(finalArray);
  return finalArray.reduce((a, b) => a + b);
}
console.log(operations([5, 5, 2, "C", "D", "+"]));
// console.log(operations(["+", 5, 2, "C", "D", "+"]));
// console.log(operations([5, -2, 4, "C", "D", 9, "+", "+"]));
