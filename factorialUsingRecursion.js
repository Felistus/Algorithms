//Using recursion to solve a Factorial problem n!
function factorial(num) {
  // state end condition first
  if (num <= 1) return 1;
  else return num * factorial(num - 1);
}
console.log(factorial(6));
