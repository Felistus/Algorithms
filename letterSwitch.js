/**
switchChar is a function that helps children in swapping values to return a new word
a word is a set of alphabets that obviously must not be a dictionary word. The children are offered three inputs:

* inputChar: cade
* actualChar: abcdefgh  (is a set of non-repeating alpha-characters)
* changeChar: grdwqsdr
switchChar(inputChar, actualChar, changeChar) => dgwq

you are to write a function that takes these values as arguments and return the result only if:
1) actualChar and changeChar are of the same length,
2) characters in actualChar are not repeated,
3) the length of inputChar is not longer than the length of actualChar
4) the characters in inputChar are contained in actualChar

if none of this conditions are met, here are the returned values
1) actualChar and changeChar are not the same length returns => "Length mismatch"
2) characters in actualChar are repeated returns => 'Repeated value'
3) the length of inputChar is longer than the length of actualChar returns => -1
4) the characters in inputChar are not contained in actualChar -1

note:
actualChar is a set of none repeating characters of length (0 to N)
inputChar is a set of characters of length (0 to N-1)
changeChar is a set of characters of length (length of actualChar)
unmet conditions must return values
//////////////////////////////////////
examples:
switchChar('decagon', 'lmnbvcxzasdfghjktyrueiwoqp', 'zdewsaqxcfrtgvbhyujnmkilop') => "rmacgle
switchChar('we', 'wkeap', 'mgren')​​​ => "mr"
**/
const switchChar = (inputChar, actualChar, changeChar) => {
  const lenActual = actualChar.length;
  const lenChange = changeChar.length;
  const lenInput = inputChar.length;
  const uniqueMap = new Map();
  let newWord = "";

  if (lenChange !== lenActual)
    return "actuaChar and changeChar length mismatch";
  if (lenInput > lenActual)
    return "inputChar can not be longer than actualChar";
  if (lenInput <= 0) return "inputChar cannot be empty";
  for (let i = 0; i < lenActual; i++) {
    if (!uniqueMap.has(actualChar[i]))
      uniqueMap.set(actualChar[i], changeChar[i]);
    else return "repeated value in actualChar";
  }
  for (let val of inputChar) {
    if (uniqueMap.has(val)) newWord += uniqueMap.get(val);
    else return -1;
  }
  return newWord;
};
console.log(switchChar("cade", "abcdefgh", "grdwqsdr"));
