//Using recursion!

// factorial
function factorial(num) {
  // state end condition first
  if (num <= 1) return 1;
  else return num * factorial(num - 1);
}
console.log(factorial(6));

// reverse string
function reverseStr(str) {
  if (str.length === 1) return str
  return reverseStr(str.slice(1)) + str[0];
}
console.log(reverseStr("noah"));