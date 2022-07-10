// Find the sum of all the ages in an array of objects
// For example;
// [{name: ‘Uche Egbo’, age: 24, occupation: ‘Trader’}, {name: ‘Solomon Ogbodo’, age: 30, occupation: ‘Accountant’}]
// to return 54.

function sumOfAges(array) {
  return array.map((value) => value.age).reduce((a, b) => a + b, 0);
}
console.log(
  sumOfAges([
    { name: "Uche Egbo", age: 54, occupation: "Trader" },
    { name: "Solomon Ogbodo", age: 30, occupation: "Accountant" },
  ])
);
