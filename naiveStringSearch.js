// Return the number of times a string appeears in another string
// example: inputs: "lorie lol", "lol" => output: 1

/**
 * My Psuedo code
 * loop through the long string : using i
 * loop through the short string : using j
 * check: if the element of the long string != element of the short string; break inner loop =>
 * [ longStr[ i + j ] !== shortStr[ j ] ] break;
 * loop[i+j] is done to increment the position of i when inner loop runs again
 * create a counter to keep track of the match frequency
 *
 */

function naiveStrSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
console.log(naiveStrSearch("lorie lol", "pop"));
console.log(naiveStrSearch("lorie lol", "lol"));
console.log(naiveStrSearch("lorlollaoie lol", "lo"));
