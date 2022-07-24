// Given a string, return the length of the longest Palindorme in the string.

function subStringPalindrome(str) {
  const arr = [];
  const splittedStr = str.toLowerCase().replace(/[.,!]/g, "").split(" ");
  for (let i = 0; i < splittedStr.length; i++) {
    const wordSplit = splittedStr[i].split("").reverse().join("");
    if (wordSplit === splittedStr[i]) {
      arr.push(wordSplit.length);
    }
  }
  return Math.max(...arr);
}
console.log(subStringPalindrome("madam is going to kayak"));

// OR

function subStringPalindromeTwo(str) {
  const arr = [];
  const splittedStr = str.toLowerCase().replace(/[.,!]/g, "").split(" ");

  for (let i = 0; i < splittedStr.length; i++) {
    let word = "";
    for (let j = splittedStr[i].length - 1; j >= 0; j--) {
      word += splittedStr[i][j];
    }
    if (word === splittedStr[i]) arr.push(word.length);
  }
  return Math.max(...arr);
}

console.log(subStringPalindromeTwo("madam is going to kayak to repaper."));
