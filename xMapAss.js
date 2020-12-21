const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  const humanLoc = [0, 0];
  for (var q = 0; q < moves.length; q++) {
    for (const move of moves) {
      switch (move) {
        case "north":
          humanLoc[1] = humanLoc[1] + 1;
          break;
        case "south":
          humanLoc[1] = humanLoc[1] - 1;
          break;
        case "west":
          humanLoc[0] = humanLoc[0] - 1;
          break;
        case "east":
          humanLoc[0] = humanLoc[0] + 1;
          break;
      }
    }
  }
  return humanLoc;
};
console.log(finalPosition(moves));
