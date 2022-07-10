// Find all the numbers in a string and sum them up
// For Example;
// expect(‘1weudh56jdnbfskjn788sdhkfbs90’) to return (935)

function sumNumbersInString(string) {
  const regExp = /\d+/g;
  const newString = string.match(regExp); // check if the regExp matches any character as stated in the condition;
  return newString.map((element) => Number(element)).reduce((a, b) => a + b, 0);
}
console.log(sumNumbersInString("1weudh56jdnbfskjn788sdhkfbs90"));
