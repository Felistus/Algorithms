function gridDistance(arrayOfDirections) {
  // write your code here
  const myMap = new Map();
  const distanceArray = [];

  const newArrayOfDirections = arrayOfDirections
    .map((arrayItem) => arrayItem.split("-"))
    .map(([key, value]) => [value, key]); //swap elements

  for (let i = 0; i < newArrayOfDirections.length; i++) {
    if (!myMap.has(newArrayOfDirections[i][0])) {
      myMap.set(
        newArrayOfDirections[i][0],
        Number(newArrayOfDirections[i][1].split("km")[0])
      );
    } else {
      myMap.set(
        newArrayOfDirections[i][0],
        myMap.get(newArrayOfDirections[i][0]) +
          Number(newArrayOfDirections[i][1].split("km")[0])
      );
    }
  }
  for (let [key, value] of myMap) {
    if (key === "north" || key === "west") distanceArray.push(-value);
    else distanceArray.push(value);
  }
  return `${distanceArray.reduce((a, b) => a + b, 0)}km`;
}

console.log(
  gridDistance([
    "300km-south",
    "50km-south",
    "70km-north",
    "160km-east",
    "79km-south",
    "50km-east",
  ])
);
console.log(gridDistance(["2km-west", "4km-south", "0km-north", "12km-east"]));
