//Write a function to return the smallest substring of the first string in the array that contains the second string

function getCombinationOfSearchString(searchString) {
  const combinationArray = [];
  for (let i = 0; i < searchString.length; i = i + 1) {
    const restOfString = getCombinationOfSearchString(
      searchString.slice(0, i).concat(searchString.slice(i + 1))
    );
    if (!restOfString.length) combinationArray.push([searchString[i]]);
    else
      for (let j = 0; j < restOfString.length; j = j + 1)
        combinationArray.push([searchString[i]].concat(restOfString[j]));
  }
  return combinationArray;
}

const buildSubstrings = (strArr) => {
  const longStr = strArr[0];
  const shortStr = strArr[1];
  let i, j;
  const matchBox = [];
  const lengthBox = [];
  const arrayOfSubstrings = [];

  for (i = 0; i < longStr.length; i++) {
    for (j = i + 1; j < longStr.length + 1; j++) {
      arrayOfSubstrings.push(longStr.slice(i, j));
    }
  }
  const combinations = getCombinationOfSearchString(shortStr).map((combo) =>
    combo.join(".*?")
  );
  for (let p = 0; p < combinations.length; p = p + 1) {
    const exp = new RegExp(combinations[p], "g");
    for (let k = 0; k < arrayOfSubstrings.length; k++) {
      if (exp.test(arrayOfSubstrings[k])) {
        matchBox.push(arrayOfSubstrings[k]);
        lengthBox.push(arrayOfSubstrings[k].length);
      }
    }
  }
  const wordPosition = lengthBox.indexOf(Math.min(...lengthBox));
  return matchBox[wordPosition];
};
console.log(buildSubstrings(["ahffaksfajeeubsne", "jefaa"]));
console.log(buildSubstrings(["aaabaaddae", "aed"]));
