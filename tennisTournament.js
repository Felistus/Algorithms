/** 
 For example, given P = 5players and C = 3: available courts, the function should return 2, as two games can 
be played simultaneously (for instance, the first and second players can play on the first court, and the third
 and fourth players on the second court, and the third court will be empty because the fifth player doesn't have
  a partner to play with)
*/

function solution(player, availableCourts) {
  let numberOfGames;

  if (player / 2 >= availableCourts) numberOfGames = availableCourts;
  else if (player / 2 < availableCourts) numberOfGames = Math.floor(player / 2);
  else if (player === 0 && availableCourts === 0)
    numberOfGames = player || availableCourts;
  else return "invalid entry";

  return `${
    numberOfGames > 1 ? `${numberOfGames} games` : `${numberOfGames} game`
  } `;
}
console.log(solution(2, 3));
