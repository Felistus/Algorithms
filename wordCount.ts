function wordCount(arrayOfStrings: string[]) {
  const wordMap: Map<string, number> = new Map();
  let index: number = 0;

  for (index; index < arrayOfStrings.length; index++) {
    if (wordMap.has(arrayOfStrings[index])) {
      wordMap.set(
        arrayOfStrings[index],
        Number(wordMap.get(arrayOfStrings[index])) + 1
      );
    } else {
      wordMap.set(arrayOfStrings[index], 1);
    }
  }
  return wordMap;
}
console.log(wordCount(["a", "b", "a", "c", "b"]));
console.log(wordCount(["str", "hell", "str", "str"]));
console.log(
  wordCount(["one", "fish", "two", "fish", "red", "fish", "blue", "fish"])
);
