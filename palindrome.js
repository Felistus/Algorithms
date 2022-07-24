// Return True or False if a word is a Palindrome
// Hint: a palindrome is a word that can be spelt backwards and looks the same.
// For example;
// isPalindrome(‘madam’) to return true

function isPalindromeOne(string) {
  const regExp = /[\W_]/g;
  const formattedString = string.toLowerCase().replace(regExp, "");
  const reversedStr = formattedString.split("").reverse().join("");
  if (reversedStr === formattedString) return true;
  else return false;
}
console.log(isPalindromeOne("madam"));
console.log(isPalindromeOne("octagon"));
console.log(isPalindromeOne("kayak"));
console.log(isPalindromeOne("A man, a plan, a canal. Panama"));

// OR

function isPalindromeTwo(string) {
  const regExp = /[\W_]/g;
  const newArr = [];
  let testWord = "";
  const formattedString = string.toLowerCase().replace(regExp, "");
  for (let i = 0; i < formattedString.length; i++)
    newArr.unshift(formattedString[i]); //adds string to the front of the array

  for (let j = 0; j < newArr.length; j++) testWord += newArr[j]; //joins the array element (join(""))

  if (formattedString === testWord) return true;
  else return false;
}
console.log(isPalindromeTwo("octagon"));
console.log(isPalindromeTwo("kayak"));

// OR

function isPalindromeThree(string) {
  const regExp = /[\W_]/g;
  let testWord = "";
  const formattedString = string.toLowerCase().replace(regExp, "");
  for (let i = formattedString.length - 1; i >= 0; i--)
    testWord += formattedString[i];
  return formattedString === testWord ? true : false;
}
console.log(isPalindromeThree("A man, a plan, a canal. Panama"));
