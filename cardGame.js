// In a card game, each player will be given a set of random cards. Players will throw on the table their one
// winning card, the player with the highest card wins. A winning card is the card that exists once in
// the set of cards and the highest one.
// Given an array of sets of integers: cards, return the card of the winning player. Return -1 if no such card is found.
// SAMPLE 1: [[5,7,3,9,4,9,8,3,2], [1,2,2,4,4,1], [1,2,3]] => 8
// SAMPLE 2: [[5,5], [2,2]] => -1

function cardGame(arr) {
  const lenOfArr = arr.length;
  const uniqueArr = [];

  for (let i = 0; i < lenOfArr; i++) {
    const element = arr[i];
    const len = element.length;
    for (let j = 0; j < len; j++) {
      if (element.lastIndexOf(element[j]) === element.indexOf(element[j])) {
        uniqueArr.push(element[j]);
      }
    }
  }
  return uniqueArr.length > 0 ? Math.max(...uniqueArr) : -1;
}
console.log(
  cardGame([
    [5, 7, 3, 9, 4, 9, 8, 3, 2],
    [1, 2, 2, 4, 4, 1],
    [1, 2, 3],
  ])
);
console.log(
  cardGame([
    [5, 5],
    [2, 2],
  ])
);
