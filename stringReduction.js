function stringReduction(str) {
  let newString, pointer;
  let replaceVal = {
    ab: "c",
    ac: "b",
    bc: "a",
    ba: "c",
    ca: "b",
    cb: "a",
  };

  while (str !== newString) {
    newString = str;
    for (pointer in replaceVal) str = str.replace(pointer, replaceVal[pointer]);
  }
  return str.length;
}
console.log(stringReduction("abc"));
