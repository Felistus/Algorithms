// Return True or False if a word is a Palindrome
// Hint: a palindrome is a word that can be spelt backwards and looks the same.
// Not case sensitive
// For example;
// isPalindrome(‘madam’) to return true
// isPalindrome(‘decagon’) to return false

function isPalindrome(string) {
  const regExp = /[\W_]/g;
  const formattedString = string
    .toLowerCase()
    .replace(regExp, "")
    .split("")
    .reverse()
    .join("");

  if (string === formattedString) return true;
  else return false;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("decagon"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
