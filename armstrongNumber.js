// A number is thought of as an Armstrong number if the sum of its own digits raised
// to the power of number of digits gives the number itself. eg: 391 = 3^3 + 9^3 + 1^3 = 391
// Write a function that returns true if a number is an Armstrong Number

const armstrongNumberCheck = (num) => {
  let sum = 0;
  let strNum = num.toString();
  for (let digit of strNum) sum += digit ** strNum.length;
  return sum !== num ? false : true;
};
console.log(armstrongNumberCheck(153));
console.log(armstrongNumberCheck(8208));
console.log(armstrongNumberCheck(164));
